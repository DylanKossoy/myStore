import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import User from "../models/User.js";

const pick = (obj, keys) => Object.fromEntries(keys.map(k => [k, obj[k]]));

export const registerUser = async (req, res) => {
  try {
    const { username, email, password } = req.body;

    // 1) Validate input
    if (!username || !email || !password) {
      return res.status(400).json({ message: "All fields are required" });
    }

    // 2) Check if user exists
    const existing = await User.findOne({ $or: [{ email }, { username }] });
    if (existing) {
      return res.status(409).json({ message: "Email or username already in use" });
    }

    // 3) Hash password
    const passwordHash = await bcrypt.hash(password, 12);

    // 4) Save user
    const user = await User.create({ username, email, passwordHash });

    // 5) Create token
    const token = jwt.sign({ sub: user._id }, process.env.JWT_SECRET, { expiresIn: "7d" });

    // 6) Respond
    res.status(201).json({
      user: pick(user.toObject(), ["_id", "username", "email", "createdAt"]),
      token
    });
  } catch (err) {
    console.error("Register error:", err);
    res.status(500).json({ message: "Server error" });
  }
};



export const loginUser = async (req, res) => {
  try {
    const { emailOrUsername, password } = req.body;
    if (!emailOrUsername || !password) {
      return res
        .status(400)
        .json({ message: "emailOrUsername and password are required" });
    }

    const user = await User.findOne({
      $or: [
        { email: emailOrUsername.toLowerCase() },
        { username: emailOrUsername },
      ],
    });
    if (!user) return res.status(401).json({ message: "Invalid credentials" });

    const ok = await bcrypt.compare(password, user.passwordHash);
    if (!ok) return res.status(401).json({ message: "Invalid credentials" });

    const token = jwt.sign({ sub: user._id }, process.env.JWT_SECRET, {
      expiresIn: "7d",
    });
    res.json({
      user: { _id: user._id, username: user.username, email: user.email },
      token,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
};

export const me = async (req, res) => {
  res.json({ user: req.user });
};
