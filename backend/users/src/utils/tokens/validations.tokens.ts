export const validations = {
  email: {
    message: 'Invalid email',
  },
  password: {
    min: {
      value: 6,
      message: 'Password must be at least 6 characters',
    },
    max: {
      value: 20,
      message: 'Password must be at most 20 characters',
    },
  },
};
