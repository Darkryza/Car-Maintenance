import jwt from "jsonwebtoken";

const verifyToken = (req, res, next) => {
  try {
    const token = req.headers.authorization?.split(" ")[1];
    if (!token) {
      return res.json({ status: false, message: "No token found" });
    }
    const decoded = jwt.verify(token, process.env.JWT_SECRETKEY);
    req.body.id = decoded.id;
    req.body.username = decoded.username;
    next();
  } catch (err) {
    console.log(err);
  }
};

export default verifyToken;
