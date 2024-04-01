import express from "express";
import User from "../../model/user";

export const updateProfile = async (
  req: express.Request,
  res: express.Response
) => {
  const { id, name, email, password } = req.body;
  const user = await User.updateOne({ id }, { $set: { name } });
  if (!user) {
    res.status(404).json({ message: "User not found" });
    return;
  }
  res.json(user);
};
