import jwt from "jsonwebtoken";

const authUser = async (req, res, next) => {
  const authHeader = req.headers.authorization;
  console.log("Auth middleware - Authorization header:", authHeader ? "Present" : "Missing");

  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    console.log("Auth failed: No valid Bearer token");
    return res.json({ success: false, message: "Not Authorized. Login Again" });
  }

  const token = authHeader.split(" ")[1];
  console.log("Token extracted:", token ? "Yes" : "No");

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    console.log("Token verified, userId:", decoded.id);
    req.userId = decoded.id;
    next();
  } catch (error) {
    console.error("Token verification failed:", error.message);
    res.json({ success: false, message: "Invalid token" });
  }
};

export default authUser;
