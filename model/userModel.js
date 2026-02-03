import mongoose from "mongoose";

const userSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    age:{
        type: Number,
        min: 18,
        max: 65,
        require: true,
    },
    created:{
        type: String,
        default: Date.now(),
    }
});


const User = mongoose.model("User", userSchema);
export default User;