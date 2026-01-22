import multer from "multer";
import express from "express";
import conn from "../utils/db.js";
import verifyToken from "../middleware/verifyToken.js";

const router = express.Router();
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "public/images");
  },
  filename: (req, file, cb) => {
    cb(null, `${Date.now()}_${file.originalname}`);
  },
});

const upload = multer({ storage: storage });

router.post("/addService", upload.single("file"), (req, res) => {
  try {
    const { service, date, cost, location, contact, link, remark } = req.body;
    const file = req.file.filename;
    const data = [service, date, cost, location, contact, link, remark, file];
    const query =
      "INSERT INTO services (service, date, cost, location, contact, link, remark, file) VALUES (?,?,?,?,?,?,?,?)";
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
    return res.json({ status: false, meesage: "Server Error" });
  }
});

router.get("/getData", verifyToken, (req, res) => {
  try {
    const query = "SELECT * FROM services";
    conn.query(query, (err, result) => {
      if (err) {
        console.log(err);
        return res.json({ status: false, message: "Error on query DB" });
      }
      if (result.length > 0) {
        return res.json({ status: true, services: result });
      }
    });
  } catch (err) {
    console.log(err);
    return res.json({ status: false, message: "Server error" });
  }
});

export { router as serviceRouter };
