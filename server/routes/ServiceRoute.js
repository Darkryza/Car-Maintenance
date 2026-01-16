import multer from "multer";
import express from "express";
import conn from "../utils/db.js";

const router = express.Router();
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "../images");
  },
  filename: (req, file, cb) => {
    cb(null, `${Date.now()}_${file.originalname}`);
  },
});

const upload = multer({ storage: storage });

router.post("/addService", upload.single("file"), (req, res) => {
  try {
    const data = req.body;
    const query = "INSET INTO services VALUES ?";
    conn.query(query, data, (err, result) => {
      if (err) {
        console.log("DB Error: ", err);
        return res.json({ status: false, meesage: "DB error" });
      }
      if (result) {
        return res
          .status(201)
          .json({ status: true, message: "Successful added service" });
      }
    });
  } catch (err) {
    console.log(err);
  }
});

export { router as serviceRouter };
