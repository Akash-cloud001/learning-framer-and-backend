import mongoose from "mongoose"
import { DB_NAME } from "../constants.js "


const connectDB = async ()=>{
    try {
        const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
        console.log("MongoDB connected :: ",connectionInstance)
    } catch (error) {
        console.log("MongoDB Connection Error", error)
        process.exit(1) // what is this
    }
}

export default connectDB