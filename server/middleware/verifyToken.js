import jwt from "jsonwebtoken";

const verifyToken = (req, res, next) => {
  try {
    const token = req.cookies.token;
    if (!token) {
      return res.json({ status: false, message: "No token found" });
    }
    const decoded = jwt.verify(token, process.env.JWT_SECRETKEY);
    req.user = decoded;
    next();
  } catch (err) {
    console.log(err);
    return res.json({ status: false, message: "Token error" });
  }
};

export default verifyToken;
