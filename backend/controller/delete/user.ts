import express from "express";
import User from "../../model/user";

export const deleteUser = async (
  request: express.Request,
  response: express.Response
) => {
  try {
    const { id } = request.params;
    const user = await User.findByIdAndDelete(id);
    if (!user) {
      return response.status(404).json({ message: "User not found" });
    }
    response.status(200).json({ message: "User deleted successfully" });
  } catch (error: any) {
    response.status(500).json({ message: error.message });
  }
};
