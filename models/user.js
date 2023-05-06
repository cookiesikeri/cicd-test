import mongoose from "mongoose";

//User model
const userSchema = mongoose.Schema({
    name: { type: String, required:  true },
    email: { type: String, required: true },
    address: { type: String, required: true },
    password: { type: String, required: true },
    id: { type: String },
});

export default mongoose.model("User", userSchema);