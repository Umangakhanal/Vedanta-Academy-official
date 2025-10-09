import { createClient } from "@sanity/client";
// import cors from "cors";
import express from "express";
import dotenv from "dotenv";


dotenv.config();
const router = express.Router();


const client = createClient({
  projectId: process.env.SANITY_PROJECT_ID,
  dataset: process.env.SANITY_DATASET,
  useCdn: false,
  token: process.env.SANITY_WRITE_TOKEN,
  apiVersion: "2025-09-23",
});

router.post("/contact", async (req, res) => {
  const formData = req.body;
  try {
    const result = await client.create({
      _type: "contactform",
      fullName: formData.fullName,
      email: formData.email,
      phone: formData.phone,
      program: formData.program,
      message: formData.message,
      submittedAt: new Date().toISOString(),
    });
    // console.log("Form data saved to Sanity:", result);
    res.status(200).json({ message: "Form saved successfully" });
  } catch (error) {
    // console.error("Error:", error);
    res.status(500).json({ message: "Error saving form" });
  }
});
router.get('/contact-info',async(req, res)=>{
  try{
    const query = `*[_type == "contact"][0]{
    heading,
    description,
    phone,
    email,
    address,
    socialLinks,
    mapLink
    }`;
    const data = await client.fetch(query);
    res.json(data);

  } catch (error){
    console.error("Error fetching contact info:", error);
    res.status(500).json({ message: "Error fetching contact info"});
  }
});
export default router;