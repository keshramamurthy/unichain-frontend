import express from "express";
import path from "path";

const app = express();
app.use(express.static(path.join(__dirname, "..", "public")));
app.use(express.json());

app.get("/", (req, res) => {
    res.redirect("index.html");
});

// Change this port if needed
app.listen(8080, () => {
    console.log("Server running on port 8080");
})