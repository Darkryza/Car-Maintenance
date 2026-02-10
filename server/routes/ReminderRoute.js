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

router.post("/addReminder", upload.single("file"), (req, res) => {
  try {
    const { service, cost, location, status, remark } = req.body;
    const file = req.file.filename;
    const data = [service, cost, file, location, status, remark];
    const query =
      "INSERT INTO reminders (service, cost, file, location, status, remark) VALUES (?, ?, ?, ?, ?, ?)";
    conn.query(query, data, (err, result) => {
      if (err) {
        console.log("DB Error: ", err);
        return res.json({ status: false, message: "DB error" });
      }
      if (result) {
        return res
          .status(201)
          .json({ status: true, message: "Successful added reminder" });
      }
    });
  } catch (err) {
    console.log(err);
    return res.json({ status: false, message: "Server Error" });
  }
});

router.get("/getData", verifyToken, (req, res) => {
  try {
    const query = "SELECT * FROM reminders";
    conn.query(query, (err, result) => {
      if (err) {
        console.log(err);
        return res.json({ status: false, message: "DB Error" });
      }
      if (result.length > 0) {
        return res.json({ status: true, reminders: result });
      }
    });
  } catch (err) {
    console.log(err);
    return res.json({ status: false, message: "Server error" });
  }
});

router.delete("/delete/:id", verifyToken, (req, res) => {
  try {
    const { id } = req.params;
    const query = "DELETE FROM reminders WHERE id= ?";
    conn.query(query, [id], (err, result) => {
      if (err) {
        console.log(err);
        return res.json({ status: false, message: "DB Error" });
      }
      return res.json({ status: true, message: "Successfully Deleted" });
    });
  } catch (err) {
    console.log(err);
    return res.json({ status: false, message: "Server error" });
  }
});

export { router as reminderRouter };
