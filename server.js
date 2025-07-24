import express from "express"
import cors from "cors"
import fetch from "node-fetch"

const app = express()
const PORT = 5000
const API_KEY = "Nv8iy6ahufEpMyBpxNCmyg==Pjq3PevX34nL6ZEr"

app.use(cors())
app.use(express.json())

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

app.post("/api/cars", async (req, res) => {
  const { brand, name, pricePerDay } = req.body
  console.log("Incoming POST:", req.body)

  try {
    const url = new URL("https://api.api-ninjas.com/v1/cars")
    if (brand) url.searchParams.append("make", brand)
    if (name) url.searchParams.append("model", name)

    const response = await fetch(url, {
      headers: { "X-Api-Key": API_KEY },
    })

    const data = await response.json()

    const withPrice = Array.isArray(data)
      ? data.map((car) => ({ ...car, pricePerDay }))
      : { ...data, pricePerDay }

    res.json(withPrice)
  } catch (err) {
    console.error("POST /api/cars error:", err)
    res.status(500).json({ error: "Failed to fetch car data" })
  }
})

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`)
})
