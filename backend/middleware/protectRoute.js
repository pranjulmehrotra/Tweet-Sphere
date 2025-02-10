import jwt from 'jsonwebtoken';

export const protectRoute = (req, res, next) => {
  const token = req.cookies.jwt;  // Assuming JWT is stored in a cookie

  if (!token) {
    return res.status(401).json({ error: "Unauthorized: No token provided" });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);  // Verify token
    req.user = decoded;  // Attach decoded user info to the request
    next();  // Allow the request to proceed
  } catch (error) {
    return res.status(401).json({ error: "Unauthorized: Invalid token" });
  }
};
