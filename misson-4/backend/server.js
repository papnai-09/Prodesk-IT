import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { GoogleGenAI } from "@google/genai";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

const ai = new GoogleGenAI({
  apiKey: process.env.GEMINI_API_KEY
});

app.post("/generate", async (req, res) => {
  try {
    const { name, role, company, skills } = req.body;

    const prompt = `
Write a professional cover letter for ${name} applying for ${role} at ${company}.
Skills: ${skills}.
Make it formal and impressive.
`;

    const response = await ai.models.generateContent({
      model: "gemini-2.0-flash",
      contents: prompt
    });

    const text = response.text;

    res.json({ letter: text });

  } catch (error) {
    console.log("🔥 ERROR:", error);
    res.status(500).json({ error: "Error generating letter" });
  }
});

app.listen(5000, () => {
  console.log("✅ Server running on port 5000");
});