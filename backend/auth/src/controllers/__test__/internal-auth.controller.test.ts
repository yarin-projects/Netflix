import request from 'supertest';
import { app } from '../../app';
import { TOKENS } from '../../utils/tokens.utils';

const testPaths = TOKENS.tests.routes;
const testData = TOKENS.tests.data;
const testSuites = TOKENS.tests.suites.internalAuthController;

describe(testSuites.title, () => {
  describe(testSuites.generateTokens.title, () => {
    it(testSuites.generateTokens.cases.validRequest, async () => {
      const { status, body } = await request(app)
        .post(testPaths.generateTokens)
        .send(testData.valid.internalAuth.generateRequest);

      expect(status).toBe(TOKENS.httpStatus.OK);
      expect(body).toHaveProperty(TOKENS.jwt.accessToken);
      expect(body).toHaveProperty(TOKENS.jwt.refreshToken);
    });
    it(testSuites.generateTokens.cases.missingSecret, async () => {
      const { status, body } = await request(app)
        .post(testPaths.generateTokens)
        .send(testData.invalid.internalAuth.generateRequest_MissingSecret);

      expect(status).toBe(TOKENS.httpStatus.BAD_REQUEST);
      expect(body.error).toBe(TOKENS.validations.secret.required);
    });
    it(testSuites.generateTokens.cases.missingUserId, async () => {
      const { status, body } = await request(app)
        .post(testPaths.generateTokens)
        .send(testData.invalid.internalAuth.generateRequest_MissingUserId);

      expect(status).toBe(TOKENS.httpStatus.BAD_REQUEST);
      expect(body.error).toBe(TOKENS.validations.userId.required);
    });
    it(testSuites.generateTokens.cases.invalidSecret, async () => {
      const { status, body } = await request(app)
        .post(testPaths.generateTokens)
        .send(testData.invalid.internalAuth.generateRequest_InvalidSecret);

      expect(status).toBe(TOKENS.httpStatus.BAD_REQUEST);
      expect(body.error).toBe(TOKENS.errors.internalRouteSecretInvalid);
    });
    it(testSuites.generateTokens.cases.invalidEmail, async () => {
      const { status, body } = await request(app)
        .post(testPaths.generateTokens)
        .send(testData.invalid.internalAuth.generateRequest_InvalidEmail);

      expect(status).toBe(TOKENS.httpStatus.BAD_REQUEST);
      expect(body.error).toBe(TOKENS.validations.email.message);
    });
  });
});
