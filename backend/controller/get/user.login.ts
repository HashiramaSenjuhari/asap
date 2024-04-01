import express from "express";
import User from "../../model/user";
import bcryptjs from "bcryptjs";

export const checkUser = async (
  req: express.Request,
  res: express.Response
) => {
  try {
    const findUser = await User.findOne({ email: req.body.email });
    if (!findUser) {
      return res.status(400).json({ message: "User not found" });
    }
    return res.status(200).json({ message: "User found" });
  } catch (err: any) {
    return res.status(500).json({ message: err.message });
  }
};
