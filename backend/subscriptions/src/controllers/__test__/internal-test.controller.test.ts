import request from 'supertest';
import { app } from '../../app';
import { TOKENS } from '../../utils/tokens.utils';

const testPaths = TOKENS.tests.routes;
const testData = TOKENS.tests.data;
const testSuites = TOKENS.tests.suites.internalSubscriptionController;

describe(testSuites.title, () => {
  describe(testSuites.createSubscription.title, () => {
    it(testSuites.createSubscription.cases.successCreate, async () => {
      const response = await request(app)
        .post(testPaths.createSubscription)
        .send(testData.valid.subscription.createSubscriptionRequest_Basic);

      expect(response.status).toBe(TOKENS.httpStatus.OK);
      expect(response.body.message).toBeDefined();
      expect(response.body.subscriptionId).toBeDefined();
    });
    it(testSuites.createSubscription.cases.invalidBody, async () => {
      const response = await request(app)
        .post(testPaths.createSubscription)
        .send(testData.invalid.subscription.createSubscription_InvalidPlan);

      expect(response.status).toBe(TOKENS.httpStatus.BAD_REQUEST);
      expect(response.body.error).toBeDefined();
    });
    it(testSuites.createSubscription.cases.secretFail, async () => {
      const response = await request(app)
        .post(testPaths.createSubscription)
        .send(testData.invalid.subscription.createSubscription_InvalidSecret);

      expect(response.status).toBe(TOKENS.httpStatus.BAD_REQUEST);
      expect(response.body.error).toBeDefined();
    });
  });
});
