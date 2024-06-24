import mongoose from "mongoose";

const DB_URL = process.env.DB_URL;

const dbConnection = async () =>{
    await mongoose.connect(DB_URL);
    console.log("Database Connected to Backend")
}
dbConnection();
