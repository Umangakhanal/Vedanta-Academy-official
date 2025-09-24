import { createClient } from "@sanity/client";
// import * as emailjs from "emailjs";
import cors from "cors";
import express from "express";
import dotenv from "dotenv";

dotenv.config();
const app = express();
const PORT = process.env.PORT || 5000;
app.use(cors());
app.use(express.json());

const client = createClient({
  projectId: process.env.SANITY_PROJECT_ID,
  dataset: process.env.SANITY_DATASET,
  useCdn: false,
  token: process.env.SANITY_WRITE_TOKEN,
  apiVersion: "2025-09-23",
});

app.post("/api/contact", async (req, res) => {
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
    console.log("Form data saved to Sanity:", result);

    // const emailResponse = await emailjs.send(
    //   process.env.EMAILJS_SERVICE_ID,
    //   process.env.EMAILJS_TEMPLATE_ID,
    //   {
    //     fullName: formData.fullName,
    //     email: formData.email,
    //     phone: formData.phone,
    //     program: formData.program,
    //     message: formData.message,
    //   },
    //   process.env.EMAILJS_PRIVATE_KEY
    // );
    // console.log("EmailJS response:", emailResponse);
    res.status(200).json({ message: "Form saved successfully" });
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ message: "Error saving form" });
  }
});
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
