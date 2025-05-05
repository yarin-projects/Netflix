import request from 'supertest';
import { app } from '../../app';
import { TOKENS } from '../../utils/tokens.utils';

const testPaths = TOKENS.tests.routes;
const testData = TOKENS.tests.data;
const testSuites = TOKENS.tests.suites.profileController;

describe(testSuites.title, () => {
  describe(testSuites.me.title, () => {
    it(testSuites.me.cases.success, async () => {
      await request(app)
        .post(testPaths.createDefaultProfileRoute)
        .send(testData.valid.internalProfile.createDefaultProfileRequest);

      const { status, body } = await request(app)
        .get(testPaths.meProfileRoute)
        .send(testData.valid.profile.meProfileRequest);

      expect(status).toBe(TOKENS.httpStatus.OK);
      expect(body).toBeDefined();
      expect(body).toHaveProperty('profile');
      expect(body).toHaveProperty('message');
    });
    it(testSuites.me.cases.notFound, async () => {
      const { status } = await request(app)
        .get(testPaths.meProfileRoute)
        .send(testData.valid.profile.meProfileRequest);
      expect(status).toBe(TOKENS.httpStatus.BAD_REQUEST);
    });
  });
  describe(testSuites.favoritesGet.title, () => {
    it(testSuites.favoritesGet.cases.successEmpty, async () => {
      const {
        body: { profile },
      } = await request(app)
        .post(testPaths.createDefaultProfileRoute)
        .send(testData.valid.internalProfile.createDefaultProfileRequest);

      const data = testData.valid.profile.getFavoritesRequest;
      data.profileId = profile.profileId;

      const { status, body } = await request(app).get(testPaths.favoritesRoute).send(data);

      expect(status).toBe(TOKENS.httpStatus.OK);
      expect(body).toHaveProperty('favorites');
      expect(body).toHaveProperty('message');
    });
    it(testSuites.favoritesGet.cases.successWithData, async () => {
      const {
        body: { profile },
      } = await request(app)
        .post(testPaths.createDefaultProfileRoute)
        .send(testData.valid.internalProfile.createDefaultProfileRequest);

      const data1 = testData.valid.profile.addFavoriteRequest;
      data1.profileId = profile.profileId;
      data1.mediaId = 124;

      await request(app).post(testPaths.addFavoriteRoute).send(data1);

      const data2 = testData.valid.profile.getFavoritesRequest;
      data2.profileId = profile.profileId;

      const { status, body } = await request(app)
        .get(testPaths.favoritesRoute)
        .send(testData.valid.profile.getFavoritesRequest);

      expect(status).toBe(TOKENS.httpStatus.OK);
      expect(body).toBeDefined();
      expect(body.favorites).toHaveLength(1);
    });
    it(testSuites.favoritesGet.cases.authFail, async () => {
      await request(app)
        .post(testPaths.createDefaultProfileRoute)
        .send(testData.valid.internalProfile.createDefaultProfileRequest);

      const { status, body } = await request(app)
        .get(testPaths.favoritesRoute)
        .send(testData.invalid.profile.getFavorites_DifferentUserId);

      expect(status).toBe(TOKENS.httpStatus.BAD_REQUEST);
      expect(body.error).toBeDefined();
    });
    it(testSuites.favoritesGet.cases.invalidBody, async () => {
      await request(app)
        .post(testPaths.createDefaultProfileRoute)
        .send(testData.valid.internalProfile.createDefaultProfileRequest);

      const { status, body } = await request(app)
        .get(testPaths.favoritesRoute)
        .send(testData.invalid.profile.getFavorites_InvalidProfileId);

      expect(status).toBe(TOKENS.httpStatus.BAD_REQUEST);
      expect(body.error).toBeDefined();
    });
  });
  describe(testSuites.favoritesAdd.title, () => {
    it(testSuites.favoritesAdd.cases.successNew, async () => {
      await request(app)
        .post(testPaths.createDefaultProfileRoute)
        .send(testData.valid.internalProfile.createDefaultProfileRequest);

      const { status, body } = await request(app)
        .post(testPaths.addFavoriteRoute)
        .send(testData.valid.profile.addFavoriteRequest);

      expect(status).toBe(TOKENS.httpStatus.CREATED);
      expect(body.message).toBe(TOKENS.messages.favoriteAdded);
    });
    it(testSuites.favoritesAdd.cases.successExisting, async () => {
      await request(app)
        .post(testPaths.createDefaultProfileRoute)
        .send(testData.valid.internalProfile.createDefaultProfileRequest);

      await request(app)
        .post(testPaths.addFavoriteRoute)
        .send(testData.valid.profile.addFavoriteRequest);

      const { status, body } = await request(app)
        .post(testPaths.addFavoriteRoute)
        .send(testData.valid.profile.addFavoriteRequest);

      expect(status).toBe(TOKENS.httpStatus.OK);
      expect(body.message).toBe(TOKENS.messages.alreadyInFavorites);
    });
    it(testSuites.favoritesAdd.cases.invalidBody, async () => {
      await request(app)
        .post(testPaths.createDefaultProfileRoute)
        .send(testData.valid.internalProfile.createDefaultProfileRequest);

      const { status, body } = await request(app)
        .post(testPaths.addFavoriteRoute)
        .send(testData.invalid.profile.addFavorite_InvalidMediaType);

      expect(status).toBe(TOKENS.httpStatus.BAD_REQUEST);
      expect(body.error).toBeDefined();
    });
    it(testSuites.favoritesAdd.cases.invalidBody, async () => {
      await request(app)
        .post(testPaths.createDefaultProfileRoute)
        .send(testData.valid.internalProfile.createDefaultProfileRequest);

      const { status, body } = await request(app)
        .post(testPaths.addFavoriteRoute)
        .send(testData.invalid.profile.addFavorite_InvalidMediaId);

      expect(status).toBe(TOKENS.httpStatus.BAD_REQUEST);
      expect(body.error).toBeDefined();
    });
  });
  describe(testSuites.favoritesRemove.title, () => {
    it(testSuites.favoritesRemove.cases.success, async () => {
      await request(app)
        .post(testPaths.createDefaultProfileRoute)
        .send(testData.valid.internalProfile.createDefaultProfileRequest);

      await request(app)
        .post(testPaths.addFavoriteRoute)
        .send(testData.valid.profile.addFavoriteRequest);

      const { status, body } = await request(app)
        .delete(testPaths.removeFavoriteRoute)
        .send(testData.valid.profile.removeFavoriteRequest);

      expect(status).toBe(TOKENS.httpStatus.OK);
      expect(body.message).toBe(TOKENS.messages.favoriteRemoved);
    });
    it(testSuites.favoritesRemove.cases.notFound, async () => {
      await request(app)
        .post(testPaths.createDefaultProfileRoute)
        .send(testData.valid.internalProfile.createDefaultProfileRequest);

      const { status, body } = await request(app)
        .delete(testPaths.removeFavoriteRoute)
        .send(testData.valid.profile.removeFavoriteRequest);

      expect(status).toBe(TOKENS.httpStatus.BAD_REQUEST);
      expect(body.error).toBeDefined();
    });
    it(testSuites.favoritesRemove.cases.invalidBody, async () => {
      await request(app)
        .post(testPaths.createDefaultProfileRoute)
        .send(testData.valid.internalProfile.createDefaultProfileRequest);

      const { status, body } = await request(app)
        .delete(testPaths.removeFavoriteRoute)
        .send(testData.invalid.profile.removeFavorite_MissingMediaId);

      expect(status).toBe(TOKENS.httpStatus.BAD_REQUEST);
      expect(body.error).toBeDefined();
    });
  });
});
