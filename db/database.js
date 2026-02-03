import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config(); // This loads the variables from your .env file

const uri = process.env.MONGO_URI;

mongoose.connect(uri).then(()=> {
    console.log("Connected to MongoDB");
}).catch((err) => {
    console.error("Error connecting to MongoDB:", err);
}
);

export default mongoose;