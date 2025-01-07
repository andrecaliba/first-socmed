const registerSchema = {
  username: {
    errorMessage: "Invalid username",
    notEmpty: true,
    isString: true
  },
  email: {
    errorMessage: "Invalid email",
    notEmpty: true,
    isEmail: true,
  },
  password: {
    errorMessage: "Invalid password",
    notEmpty: {
      errorMessage: "Password cannot be empty"
    },
    isString: true,
    isLength: {
      options: { min: 8 },
      errorMessage: "Password must be at least 8 characters long"
    }
  },
  confirmPassword: {
    errorMessage: "Invalid password",
    notEmpty: true,
    isString: true,
    custom: {
      options: (value, { req }) => value === req.body.password,
      errorMessage: "Passwords do not match"
    }
  }
};
export default registerSchema;