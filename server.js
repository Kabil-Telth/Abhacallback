const express = require("express");
require("dotenv").config();
const app = express();

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

// ABDM calls this after fetch-modes
app.post("/v0.5/users/auth/on-fetch-modes", (req, res) => {
    console.log("on-fetch-modes callback:", JSON.stringify(req.body, null, 2));
    res.status(200).json({ success: true });
});

// ABDM calls this after link token generation
app.post("/v0.5/links/link/on-init", (req, res) => {
    console.log("on-init callback:", JSON.stringify(req.body, null, 2));
    res.status(200).json({ success: true });
});

// Health Check
app.get("/", (req, res) => {
    res.send("ABHA Callback Server Running");
});
    
app.listen(process.env.PORT, () => {
    console.log(`Server running on port ${process.env.PORT}`);
});