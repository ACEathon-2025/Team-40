exports.checkPassword = (req, res) => {
  const { password } = req.body;
  if (!password) return res.status(400).json({ error: "Password is required" });

  let strength = "Weak";
  if (password.length >= 8 && /[A-Z]/.test(password) && /[0-9]/.test(password)) {
    strength = "Strong";
  } else if (password.length >= 6) {
    strength = "Medium";
  }

  res.json({ password, strength });
};
