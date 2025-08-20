// utils/generateToken.js

import jwt from "jsonwebtoken";

const generateToken = (id) => {
  // jwt.sign() creates the token.
  // It takes a payload (the user's ID), a secret (from our .env file),
  // and an options object (we're setting it to expire in 30 days).
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: "30d",
  });
};

export default generateToken;
    