import mongoose from "mongoose";

const connectDB = async () => {

    mongoose.connection.on('connected',() => {
        console.log("connection established");
    })

    await mongoose.connect(process.env.MONGODB_URI, {
        dbName: "spotify"  // ✅ กำหนดชื่อ Database ที่ต้องการใช้
    });

}

export default connectDB;