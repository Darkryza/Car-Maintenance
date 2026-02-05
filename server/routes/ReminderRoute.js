import multer from "multer";
import express from "express";
import conn from "../utils/db.js";
import verifyToken from "../middleware/verifyToken.js";

const router = express.Router();
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "public/images");
  },
  filename:(req,file,cb) => {
    cb(null, `${Date.now()}_${file.originalname}`);
  },
});

const upload = multer({storage: storage})

router.post("/addReminder", upload.single("file"), (req, res) => {
    try(
        const {}
    )catch(err){console.log(err)}
})

export { router as reminderRouter };
