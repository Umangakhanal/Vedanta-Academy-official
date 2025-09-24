import express from "express";
import { client, urlFor } from "./sanity.js";
const router = express.Router();
router.get("/stats", async (req, res) => {
  try {
    const data = await client.fetch(
      `*[_type == "stat"]{_id, icon, number,suffix,label}`
    );
    console.log("Raw stats data from Sanity:",data);
    const stats = data.map((stat) => ({
      _id: stat._id,
      icon: stat.icon,
      number: stat.number,
      suffix: stat.suffix,
      label: stat.label,
    }));
    res.json(stats);
  } catch (err) {
    console.error("Error fetching stats:", err);
    res.status(500).json({ error: "Failed to fetch stats" });
  }
});
export default router;
