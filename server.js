const express = require("express");

const app = express();
const PORT = 3000;

// Parse JSON request body
app.use(express.json());

// ABDM Callback Endpoint
app.post("/api/abha/callback", (req, res) => {
    console.log("===== CALLBACK RECEIVED =====");
    console.log("Headers:", req.headers);
    console.log("Body:", JSON.stringify(req.body, null, 2));

    // Process ABDM callback data here

    res.status(200).json({
        success: true,
        message: "Callback received successfully"
    });
});

// Health Check
app.get("/", (req, res) => {
    res.send("ABHA Callback Server Running");
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});