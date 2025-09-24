import express from 'express';
import {client, urlFor} from './sanity.js';

const router = express.Router();
router.get('/gallery', async(req , res)=>{
    try{
        const data = await client.fetch(`*[_type == "galleryImage"]{ _id, title, image }`);
        const images = data.map(img =>({
            _id: img._id,
            title: img.title,
            url: urlFor(img.image).width(1200).url()
        }));
        res.json(images);
    } catch(err){
        console.error("Error fetching gallery:",err);
        res.status(500).json({ error:"Failed to fetch gallery"});
    }
});
export default router;