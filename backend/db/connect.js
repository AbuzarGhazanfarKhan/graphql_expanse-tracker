import mongoose from "mongoose";


export const connectDb=async ()=>{
try {
    const connection= await mongoose.connect(process.env.MONGOOSE_URI);
    console.log(`MongoDB Connected: ${conn.connection.host}`);
} catch (err) {
    console.error(`Error: ${err.message}`);
    process.exit(1);
}

}