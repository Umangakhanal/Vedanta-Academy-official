import express from 'express';
import {client} from "./sanity.js";

const router = express.Router();

router.get("/home", async(req, res)=>{
    try{
        const query= `*[_type == "home"]{
        _id,
        heroTitle,
        content,
        "heroImage":heroImage.asset->url}`;
        const data = await client.fetch(query);
        res.json({result:data});
    }
    catch(err){
        console.error("Error fetching home data:",err);
        res.status(500).json({error: "Failed to fetch Home data"});
    }
});
export default router;