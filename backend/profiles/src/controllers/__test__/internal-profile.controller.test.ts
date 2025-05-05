import request from 'supertest';
import { TOKENS } from '../../utils/tokens.utils';
import { app } from '../../app';

const testPaths = TOKENS.tests.routes;
const testData = TOKENS.tests.data;
const testSuites = TOKENS.tests.suites.internalProfileController;

describe(testSuites.title, () => {
  describe(testSuites.createDefault.title, () => {
    it(testSuites.createDefault.cases.success, async () => {
      const { body, status } = await request(app)
        .post(testPaths.createDefaultProfileRoute)
        .send(testData.valid.internalProfile.createDefaultProfileRequest);
      expect(status).toBe(TOKENS.httpStatus.CREATED);
      expect(body.message).toBe(TOKENS.messages.defaultProfileCreated);
      expect(body.profile).toBeDefined();
      expect(body.profile).toHaveProperty('profileId');
      expect(body.profile).toHaveProperty('name');
    });
    it(testSuites.createDefault.cases.alreadyExists, async () => {
      await request(app)
        .post(testPaths.createDefaultProfileRoute)
        .send(testData.valid.internalProfile.createDefaultProfileRequest);
      const { body, status } = await request(app)
        .post(testPaths.createDefaultProfileRoute)
        .send(testData.valid.internalProfile.createDefaultProfileRequest);
      expect(status).toBe(TOKENS.httpStatus.CREATED);
      expect(body.message).toBe(TOKENS.messages.defaultProfileCreated);
      expect(body.profile).toBeDefined();
      expect(body.profile).toHaveProperty('profileId');
      expect(body.profile).toHaveProperty('name');
    });
    it(testSuites.createDefault.cases.secretFail, async () => {
      const { body, status } = await request(app)
        .post(testPaths.createDefaultProfileRoute)
        .send(testData.invalid.internalProfile.createDefaultProfileRequest_InvalidSecret);
      expect(status).toBe(TOKENS.httpStatus.BAD_REQUEST);
      expect(body.error).toBe(TOKENS.errors.internalRouteSecretInvalid);
    });
    it(testSuites.createDefault.cases.invalidBody, async () => {
      const { body, status } = await request(app)
        .post(testPaths.createDefaultProfileRoute)
        .send(testData.invalid.internalProfile.createDefaultProfileRequest_MissingUser);
      expect(status).toBe(TOKENS.httpStatus.BAD_REQUEST);
      expect(body.error).toBe(TOKENS.validations.userId.required);
    });
  });
});
