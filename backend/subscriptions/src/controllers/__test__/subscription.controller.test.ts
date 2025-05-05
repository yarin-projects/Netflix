import request from 'supertest';
import { app } from '../../app';
import { TOKENS } from '../../utils/tokens.utils';

const testPaths = TOKENS.tests.routes;
const testData = TOKENS.tests.data;
const testSuites = TOKENS.tests.suites.subscriptionController;

describe(testSuites.title, () => {
  describe(testSuites.getMySubscription.title, () => {
    it(testSuites.getMySubscription.cases.successActive, async () => {
      await request(app)
        .post(testPaths.createSubscription)
        .send(testData.valid.subscription.createSubscriptionRequest_Basic);

      const response = await request(app)
        .post(testPaths.getMySubscription)
        .send(testData.valid.subscription.getMySubscriptionRequest);

      expect(response.status).toBe(TOKENS.httpStatus.OK);
      expect(response.body.message).toBeDefined();
      expect(response.body.subscription).toBeDefined();
    });
    it(testSuites.getMySubscription.cases.invalidBody, async () => {
      const response = await request(app)
        .post(testPaths.getMySubscription)
        .send(testData.invalid.subscription.getMySubscription_InvalidUser);

      expect(response.status).toBe(TOKENS.httpStatus.BAD_REQUEST);
      expect(response.body.error).toBeDefined();
    });
  });
});
