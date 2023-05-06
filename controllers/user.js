import User from "../models/user.js";
import mongoose from "mongoose";

//Fetching users from the database
export const getUsers = async (req,res) => {
    try {
        const users = await User.find();
        if(res == undefined){
            return users;
        }
        res.status(200  ).json(users); //Sending OK http status code
    }catch (error){
        res.status(404).json({ message: error }); //Sending not found http status code
    }
}

//Create a new user record and insert into the database
export const addUser = (req,res) => {
    const post = req.body;
    //creating a new instance from user model and assigning item data
    const newUser = new User({ ...post, createdAt: new Date().toISOString() })
    try {
        newUser.save(); //Saving to the database

        res.status(201).json(newUser); //Sending created http status code
    }catch (error){
        res.status(409).json({ message: error }); //Conflict response status code
    }
}
