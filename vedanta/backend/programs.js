import express from "express";
import { client } from "./sanity.js";
const router = express.Router();

router.get("/programs", async (req, res) => {
  try {
    const query = `*[_type == 'program']{ 
        _id,
        title,
        shortDesc,
        fullDesc,
        duration,
        "imageUrl": image.asset->url
        }`;

    const programs = await client.fetch(query);
    res.json(programs);
  } catch (err) {
    console.error("Error fetching programs:", err);
    res.status(500).json({ message: "Error fetching programs" });
  }
});
export default router;
