import express from "express";

import Connection from "./database/db.js";

const app = express();
console.log("server is running");

const PORT = 8000;
app.listen(PORT, () => console.log(`server is running on port ${PORT}`));
Connection();
