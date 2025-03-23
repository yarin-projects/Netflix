import { app } from '../../app';
import { TOKENS } from '../../utils/tokens.utils';
import request from 'supertest';

describe(TOKENS.tests.suites.userController.title, () => {
  describe(TOKENS.tests.suites.userController.signUp.title, () => {
    it(TOKENS.tests.suites.userController.signUp.cases.validSignUp, async () => {
      const response = await request(app)
        .post(TOKENS.tests.routes.signUp)
        .send(TOKENS.tests.data.user);
      expect(response.status).toBe(TOKENS.httpStatus.CREATED);
      expect(response.body.message).toBe(TOKENS.messages.userCreated);
    });
    it(TOKENS.tests.suites.userController.signUp.cases.invalidEmail, async () => {
      const response = await request(app)
        .post(TOKENS.tests.routes.signUp)
        .send(TOKENS.tests.data.invalidUser);
      expect(response.status).toBe(TOKENS.httpStatus.BAD_REQUEST);
    });
  });
  describe(TOKENS.tests.suites.userController.login.title, () => {
    it(TOKENS.tests.suites.userController.login.cases.validLogin, async () => {
      await request(app).post(TOKENS.tests.routes.signUp).send(TOKENS.tests.data.user);
      const response = await request(app)
        .post(TOKENS.tests.routes.login)
        .send(TOKENS.tests.data.user);
      expect(response.status).toBe(TOKENS.httpStatus.OK);
      expect(response.body.message).toBe(TOKENS.messages.loginSuccess);
    });
    it(TOKENS.tests.suites.userController.login.cases.invalidUser, async () => {
      const response = await request(app)
        .post(TOKENS.tests.routes.login)
        .send(TOKENS.tests.data.user);
      expect(response.status).toBe(TOKENS.httpStatus.BAD_REQUEST);
    });
  });
  describe(TOKENS.tests.suites.userController.logout.title, () => {
    it(TOKENS.tests.suites.userController.logout.cases.validLogout, async () => {
      const response = await request(app).post(TOKENS.tests.routes.logout);
      expect(response.status).toBe(TOKENS.httpStatus.OK);
      expect(response.body.message).toBe(TOKENS.messages.logoutSuccess);
    });
  });
});
