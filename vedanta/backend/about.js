import express from 'express';
import {client} from './sanity.js';


const router = express.Router();


router.get('/about', async(req,res)=>{
    try{
        const query=`*[_type=='about'][0]{
        _id,
        heading,
        content,
        "image":image.asset->url
        }`;
        const aboutData = await client.fetch(query);
        res.json({result:aboutData || {}});
    }
    catch(err){
        console.error("Error fetching About data:",err);
        res.status(500).json({message:"Error fetching About Data"});

    }
});
export default router;