import User from "../../model/user";
import express from "express";
 

type IUser = {
  username: string;
  email: string;
  password: string;
};

export const createUser = async (
  req:express.Request,
  res: express.Response
) => {
  try{
    const { username, email, password } = req.body as unknown as IUser;
    const existUser = await User.findOne({ email });
    if (existUser) return res.send("user aldready exist");
    const user = new User({
      username,
      email,
      password,
    });
  
    const user1 = await user.save();
    console.log(user1);
    res.send("user created successfully");
  }
  catch(err:any){
    res.send(err.message);
  }
};
