const loginSchema = {
  email: {
    in: ['body'],
    isEmail: {
      errorMessage: 'Please provide a valid email address',
    },
    normalizeEmail: true,
    trim: true,
  },
  password: {
    in: ['body'],
    isLength: {
      errorMessage: 'Password must be at least 8 characters long',
      options: { min: 8 },
    },
    trim: true,
  },
}

export default loginSchema;