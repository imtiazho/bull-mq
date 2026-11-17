import express from "express";
import { serverAdapter } from "./bullmq.js";
import { emailSendingQueue } from "./queue/emailSendingQueue.js";
import "dotenv/config";
import "./worker/woker.js";


const app = express();
app.use(express.json());

app.post("/send-email", async (req, res) => {
  const { email } = req.body;
  if (!email) {
    return res.status(400).json({ error: "Email is required" });
  }

  await emailSendingQueue.add(
    "emailSendingQueue",
    { email },
    // {
    //   attempts: 3,
    //   backoff: { type: "exponential", delay: 2000 },
    //   delay: 10000,
    // },
  );

  res.status(200).json({ message: "Email Sent" });
});

app.use("/admin/queues", serverAdapter.getRouter());

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
