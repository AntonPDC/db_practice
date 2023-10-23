import express from "express";

const app = express();
const port = process.env.PORT || 8000;

app.use(express.json());

app.get("/", (req: any, res: any) => {
  res.send("Hello, Express with TypeScript!");
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
