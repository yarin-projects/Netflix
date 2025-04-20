import request from 'supertest';
import { app } from '../../app';
import { TOKENS } from '../../utils/tokens.utils';

const testPaths = TOKENS.tests.routes;
const testData = TOKENS.tests.data;
const testSuites = TOKENS.tests.suites.authController;

describe(testSuites.title, () => {
  describe(testSuites.refreshTokens.title, () => {
    it(testSuites.refreshTokens.cases.validRequest, async () => {
      const { body } = await request(app)
        .post(testPaths.generateTokens)
        .send(testData.valid.internalAuth.generateRequest);

      const { refreshToken } = body;
      const requestData = testData.valid.auth.refreshRequest;
      requestData.refreshToken = refreshToken;

      const { status, body: refreshTokenResponseBody } = await request(app)
        .post(testPaths.refreshTokens)
        .send(requestData);

      expect(status).toBe(TOKENS.httpStatus.OK);
      expect(refreshTokenResponseBody.message).toBe(TOKENS.messages.tokenRefreshed);
    });
    it(testSuites.refreshTokens.cases.missingToken, async () => {
      await request(app)
        .post(testPaths.generateTokens)
        .send(testData.valid.internalAuth.generateRequest);
      const requestData = testData.invalid.auth.refreshRequest_MissingToken;

      const { status, body } = await request(app).post(testPaths.refreshTokens).send(requestData);

      expect(status).toBe(TOKENS.httpStatus.BAD_REQUEST);
      expect(body.error).toBe(TOKENS.validations.refreshToken.required);
    });
    it(testSuites.refreshTokens.cases.invalidUserId, async () => {
      await request(app)
        .post(testPaths.generateTokens)
        .send(testData.valid.internalAuth.generateRequest);
      const requestData = testData.invalid.auth.refreshRequest_InvalidUserId;

      const { status, body } = await request(app).post(testPaths.refreshTokens).send(requestData);

      expect(status).toBe(TOKENS.httpStatus.BAD_REQUEST);
      expect(body.error).toBe(TOKENS.validations.userId.message);
    });
    it(testSuites.refreshTokens.cases.invalidIpAddress, async () => {
      await request(app)
        .post(testPaths.generateTokens)
        .send(testData.valid.internalAuth.generateRequest);
      const requestData = testData.invalid.auth.refreshRequest_InvalidIpAddress;

      const { status, body } = await request(app).post(testPaths.refreshTokens).send(requestData);

      expect(status).toBe(TOKENS.httpStatus.BAD_REQUEST);
      expect(body.error).toBe(TOKENS.validations.ipAddress.message);
    });
  });
  describe(testSuites.me.title, () => {
    it(testSuites.me.cases.validRequest, async () => {
      const { status, body } = await request(app).get(testPaths.me);

      expect(status).toBe(TOKENS.httpStatus.OK);
      expect(body.message).toBe(TOKENS.messages.userAutheticated);
    });
  });
});
