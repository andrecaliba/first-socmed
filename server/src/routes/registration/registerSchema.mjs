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
    notEmpty: true,
    isString: true,
    isLength: {
      options: { min: 8 }
    }
  },
  confirmPassword: {
    errorMessage: "Invalid password",
    notEmpty: true,
    isString: true,
    isLength: {
      options: { min: 8 }
    },
    custom: {
      options: (value, { req }) => value === req.body.password
    }
  }
};
export default registerSchema;