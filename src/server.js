import express from "express";

const PORT = 5000;

const app = express();

app.get("/", (req, res) => {return res.end();});

app.listen(PORT, () => console.log(`Server listening on port http://localhost:${PORT}`));
