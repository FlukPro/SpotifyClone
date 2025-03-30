import { v2 as cloudinary } from 'cloudinary';
import songModel from '../models/songModel.js';

const addSong = async (req, res) => {
    try {
        // ✅ ตรวจสอบว่ามีข้อมูลที่ต้องใช้ครบ
        const { name, desc, album } = req.body;
        if (!name || !desc || !album || !req.files?.audio || !req.files?.image) {
            return res.status(400).json({ 
                success: false, 
                message: "Missing required fields: name, desc, album, image, audio" 
            });
        }

        // ✅ อัปโหลดไฟล์ขึ้น Cloudinary
        const audioFile = req.files.audio[0];
        const imageFile = req.files.image[0];

        const audioUpload = await cloudinary.uploader.upload(audioFile.path, { resource_type: "video" });
        const imageUpload = await cloudinary.uploader.upload(imageFile.path, { resource_type: "image" });
        const duration = `${Math.floor(audioUpload.duration / 60)}:${Math.floor(audioUpload.duration % 60)}`;

        // ✅ บันทึกข้อมูลลง MongoDB
        const newSong = await songModel.create({
            name,
            desc,
            album,
            image: imageUpload.secure_url,  // ใช้ URL ที่ Cloudinary ให้มา
            file: audioUpload.secure_url,
            duration
        });

        return res.status(201).json({
            success: true,
            message: "Song uploaded successfully",
            data: newSong
        });

    } catch (error) {
        console.error("❌ Error adding song:", error.message);
        res.status(500).json({ success: false, message: "Internal Server Error" });
    }
};


const listSong = async (req, res) => {
    
    try {
        const songs = await songModel.find();
        res.json({ success: true, songs: songs });
    } catch (error) {
        res.json({ success: false});
    }
};

const removeSong = async (req, res) => {
    try {
        await songModel.findByIdAndDelete(req.body.id);
        res.json({ success: true, message: "Song deleted successfully" });
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "Internal Server Error"
        });
    }
};


export { addSong, listSong , removeSong};