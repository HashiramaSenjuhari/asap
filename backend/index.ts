import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import router from "./routes/routes";
import mongoose from "mongoose";
import connection from "./config";
import User from "./model/user";
import Song from "./model/song";

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.json({ type: 'application/*+json' }))

// parse some custom thing into a Buffer
app.use(bodyParser.raw({ type: 'application/vnd.custom-type' }))

// parse an HTML body into a string
app.use(bodyParser.text({ type: 'text/html' }))

connection()
  .then(() => {
    console.log("Database connected successfully");
  })
  .catch((err) => {
    console.log("Database connection failed", err);
  });

app.use("/api", router);
// app.get("/apis", async (req: express.Request, res: express.Response) => {
//   res.json({ users: "werytyiuiuj" });
// });

app.listen(3000, () => {
  console.log("Example app listening on port 3000!");
});
