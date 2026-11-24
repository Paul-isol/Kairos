import "dotenv/config"
import cors from "cors"
import express from "express"

const port = Number(process.env.PORT) || 3000
const app = express()
const appOrigin = process.env.APP_URL ?? "http://localhost:4200"

app.use(
    cors({
        origin: appOrigin,
        credentials: true
    })
)

app.use(express.json())

app.get("/health", (_req, res) => {
    try {
        res.status(200).json({ message: "ok" })
    } catch (error) {
        res.status(500).json({ message: "error", error })
    }
})

app.listen(port, () => {
    console.log(`Server running on port ${port}`)
})