import express from "express"
import cors from "cors"
import fetch from "node-fetch"

const app = express()
app.use(cors())

const API_KEY = "Nv8iy6ahufEpMyBpxNCmyg==Pjq3PevX34nL6ZEr" 

app.get("/api/cars", async (req, res) => {
  try {
    const response = await fetch("https://api.api-ninjas.com/v1/cars?model=corolla", {
      headers: { "X-Api-Key": API_KEY },
    })
    const data = await response.json()
    res.json(data)
  } catch (err) {
    console.error(err)
    res.status(500).json({ error: "Failed to fetch from API Ninjas" })
  }
})

app.listen(5000, () => {
  console.log("Server running on http://localhost:5000")
})

