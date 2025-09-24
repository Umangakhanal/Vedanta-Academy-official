import express from 'express';
import galleryRouter from './gallery.js';  
import cors from "cors";
import {client } from './sanity.js';
import dotenv from 'dotenv';
import statsRouter from './stats.js';
import programsRouter from './programs.js';
dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());
app.use('/api',galleryRouter);
app.use('/api', statsRouter);
app.use('/api',programsRouter);
app.post("/api/contact", async (req, res) => {
  try {
    const formData = req.body;
    const result = await client.create({
      _type: "contactform",
      fullName: formData.fullName,
      email: formData.email,
      phone: formData.phone,
      program: formData.program,
      message: formData.message,
      submittedAt: new Date().toISOString(),
    });
    console.log("Form data saved to Sanity:", result);
    res.status(200).json({ message: "Form saved successfully" });
  } catch (err) {
    console.error("Error saving form:", err);
    res.status(500).json({ message: "Error saving form" });
  }
});

const PORT = process.env.PORT || 5000; 


app.listen(PORT, () => {
  console.log(`Backend server running at http://localhost:${PORT}`);
});
