import { v2 as cloudinary } from 'cloudinary';
import albumModel from '../models/albumModel.js';

const addAlbum = async (req, res) => {

    try {
        
        const name = req.body.name;
        const desc = req.body.desc;
        const bgColour = req.body.bgColour;
        const imageFile = req.file;
        const imageUpload = await cloudinary.uploader.upload(imageFile.path, { resource_type: "image" });

        const albumData = {
            name,
            desc,
            bgColour,
            image: imageUpload.secure_url
        }

        const album = albumModel(albumData);
        await album.save();

        res.json({ success: true, message: "Album added successfully" });


    } catch (error) {
        res.json({ success: false, message: "Internal Server Error" });
    }

}

const listAlbum = async (req, res) => {

    try {
        const albums = await albumModel.find();
        res.json({ success: true, albums });
    } catch (error) {
        res.json({ success: false, message: "Internal Server Error" });
    }

}

const removeAlbum = async (req, res) => {

    try {
        await albumModel.findByIdAndDelete(req.body.id);
        res.json({ success: true, message: "Album deleted successfully" });
    } catch (error) {
        res.json({ success: false, message: "Internal Server Error" });
    }
}

export { addAlbum, listAlbum, removeAlbum };