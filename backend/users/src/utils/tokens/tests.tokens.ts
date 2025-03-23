export const tests = {
  data: {
    user: {
      email: 'test@test.com',
      password: '123123',
    },
    invalidUser: {
      email: 'invalidEmail',
      password: '123123',
    },
  },
  routes: {
    signUp: '/api/users/signup',
    login: '/api/users/login',
    logout: '/api/users/logout',
  },
  suites: {
    userController: {
      title: 'Tests For User Controller',
      signUp: {
        title: 'Sign-Up',
        cases: {
          validSignUp: 'Should return status code 201 if signed up successfully',
          invalidEmail: "Should return status code 400 if email isn't probided",
        },
      },
      login: {
        title: 'Login',
        cases: {
          validLogin: 'Should return status code 200 if logged in successfully',
          invalidUser: "Should return status code 400 if user doesn't exist",
        },
      },
      logout: {
        title: 'Logout',
        cases: {
          validLogout: 'Should return status code 200 if logged out successfully',
        },
      },
    },
  },
};
