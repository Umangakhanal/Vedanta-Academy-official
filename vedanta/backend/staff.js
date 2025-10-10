import express from "express";
import {client, urlFor} from './sanity.js'
import dotenv from "dotenv";

const router = express.Router();

//Role priority for sorting
const rolePriority ={
    head:1,
    departmentHead:2,
    supervisor:3,
    worker:4,
};
router.get('/staff', async(req, res)=>{
    try{
        const query = `*[_type == "staff"]{
        _id,
        name,
        role,
        department,
        photo,
        bio
        }`;
        const data= await client.fetch(query);

        const staffWithUrls = data.map(staff =>({
            ...staff,
            photoUrl: staff.photo ? urlFor(staff.photo).width(400).url():null,
        }));

        staffWithUrls.sort((a,b)=>{
            if(rolePriority[a.role]!== rolePriority[b.role]){
                return rolePriority[a.role]-rolePriority[b.role];
            }
            if (a.department && b.department && a.department !== b.department){
                return a.department.localeCompare(b.department);
            }
            return a.name.localeCompare(b.name);
        });
        res.json({ result:staffWithUrls});
    }
    catch(err){
        console.error("Error fetching staff:",err);
        res.status(500).json({error:"Failed to fetch staff"});
    }
});
export default router;



