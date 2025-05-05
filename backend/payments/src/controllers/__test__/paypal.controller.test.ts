import request from 'supertest';
import { app } from '../../app';
import { TOKENS } from '../../utils/tokens.utils';

const testPaths = TOKENS.tests.routes;
const testData = TOKENS.tests.data;
const testSuites = TOKENS.tests.suites.paypalController;

describe(testSuites.title, () => {
  describe(testSuites.createOrder.title, () => {
    it(testSuites.createOrder.cases.success, async () => {
      const payload = testData.valid.payment.createOrderRequest_Premium;
      const { status, body } = await request(app).post(testPaths.createOrder).send(payload);

      expect(status).toBe(TOKENS.httpStatus.OK);
      expect(body.message).toBe(TOKENS.messages.orderCreated);
      expect(body.data).toBeDefined();
      expect(body.data).toHaveProperty('orderId');
    });

    it(testSuites.createOrder.cases.invalidPlan, async () => {
      const payload = testData.invalid.payment.createOrder_InvalidPlan;
      const response = await request(app).post(testPaths.createOrder).send(payload);

      expect(response.status).toBe(TOKENS.httpStatus.BAD_REQUEST);
      expect(response.body.error).toBeDefined();
    });

    it(testSuites.createOrder.cases.missingUser, async () => {
      const payload = testData.invalid.payment.createOrder_MissingUser;
      const response = await request(app).post(testPaths.createOrder).send(payload);

      expect(response.status).toBe(TOKENS.httpStatus.BAD_REQUEST);
      expect(response.body.error).toBeDefined();
    });
  });
  describe(testSuites.captureOrder.title, () => {
    it(testSuites.captureOrder.cases.success, async () => {
      const payload = testData.valid.payment.createOrderRequest_Premium;
      const {
        body: {
          data: { orderId },
        },
      } = await request(app).post(testPaths.createOrder).send(payload);

      const capturePayload = testData.valid.payment.captureOrderRequest;
      capturePayload.orderId = orderId;
      const { status, body } = await request(app).post(testPaths.captureOrder).send(capturePayload);

      expect(status).toBe(TOKENS.httpStatus.OK);
      expect(body.message).toBe(TOKENS.messages.orderConfirmed);
      expect(body.data).toBeDefined();
      expect(body.data).toHaveProperty('transactionId');
    });
    it(testSuites.captureOrder.cases.invalidOrderId, async () => {
      const payload = testData.invalid.payment.captureOrder_InvalidOrderId;
      const response = await request(app).post(testPaths.captureOrder).send(payload);

      expect(response.status).toBe(TOKENS.httpStatus.BAD_REQUEST);
      expect(response.body.error).toBeDefined();
    });
    it(testSuites.captureOrder.cases.orderNotFound, async () => {
      const payload = testData.valid.payment.createOrderRequest_Premium;
      const {
        body: {
          data: { orderId },
        },
      } = await request(app).post(testPaths.createOrder).send(payload);

      const capturePayload = testData.invalid.payment.captureOrder_NotFoundOrderId;
      capturePayload.orderId = orderId;
      const response = await request(app).post(testPaths.captureOrder).send(capturePayload);

      expect(response.status).toBe(TOKENS.httpStatus.BAD_REQUEST);
      expect(response.body.error).toBeDefined();
    });
    it(testSuites.captureOrder.cases.internalCallFail, async () => {
      const payload = testData.valid.payment.createOrderRequest_Premium;
      const {
        body: {
          data: { orderId },
        },
      } = await request(app).post(testPaths.createOrder).send(payload);

      const capturePayload = testData.valid.payment.captureOrderRequest;
      capturePayload.orderId = orderId;
      const response = await request(app).post(testPaths.captureOrder).send(capturePayload);

      expect(response.status).toBe(TOKENS.httpStatus.BAD_REQUEST);
      expect(response.body.error).toBeDefined();
    });
  });
});
