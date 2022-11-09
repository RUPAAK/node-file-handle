import express, { Request, Response } from "express";
import multer from "multer";
import path from "path";
// const upload = multer({ dest: 'uploads/' })

const imageStorage = multer.diskStorage({
  destination: "uploads",
  filename: (req, file, cb) => {
    cb(
      null,
      file.fieldname + "_" + Date.now() + path.extname(file.originalname)
    );
  },
});

const upload = multer({ storage: imageStorage });

const app = express();

app.use(express.json());
app.use("/images", express.static("./uploads"));

app.get("/", (req: Request, res: Response) => {
  res.send("hello");
});

// app.get('/image', )

app.post("/file", upload.single("file"), (req: Request, res: Response) => {
  // console.log(req.file);
  // console.log(req);
  res.end();
});

app.listen("9261", () => console.log("Server on"));
