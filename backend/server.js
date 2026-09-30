const express = require("express");
const cors = require("cors");

const app = express();

const PORT = 5000;


/* =========================================================
   Middleware
   ========================================================= */

app.use(cors());

app.use(express.json());

app.use(
    express.urlencoded({
        extended: true
    })
);


/* =========================================================
   Health Check
   ========================================================= */

app.get("/", (req, res) => {

    res.json({
        success: true,
        message: "ScholarEase API is running successfully"
    });

});


/* =========================================================
   Server
   ========================================================= */

app.listen(PORT, () => {

    console.log(
        `ScholarEase server running on http://localhost:${PORT}`
    );

});