import express from 'express';
import {client} from './sanity.js';

const router = express.Router();

router.get('/missionVision', async (req, res) => {
  try {
    const query = `*[_type == "missionVision"]{
      _id,
      title,
      content,
      icon,
      circleColor,
      iconColor
    }`;
    const data = await client.fetch(query);
    res.json({ result: data });
  } catch (err) {
    console.error("Error fetching missionVision:", err);
    res.status(500).json({ error: "Failed to fetch Mission & Vision" });
  }
});

export default router;
