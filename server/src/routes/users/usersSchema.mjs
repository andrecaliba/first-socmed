const userSchema = {
  username: {
    errorMessage: "Invalid username",
    in: ['body'],
    trim: true,
    notEmpty: true
  },
  email: {
    errorMessage: "Invalid email",
    in: ['body'],
    isEmail: {
      errorMessage: 'Please provide a valid email address',
    },
    normalizeEmail: true,
    trim: true,
  },
  password: {
    errorMessage: "Invalid password",
    in: ['body'],
    isLength: {
      errorMessage: 'Password must be at least 8 characters long',
      options: { min: 8 },
    },
    trim: true,
  },
  id: {
    errorMessage: "Invalid ID",
    in: ['body'],
    notEmpty: {
      errorMessage: "Provide the user ID"
    }
  }
}

export default userSchema;