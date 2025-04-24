import { app } from '../../app';
import { TOKENS } from '../../media-utils/tokens.utils';
import request from 'supertest';

describe(TOKENS.tests.suites.mediaController.title, () => {
  // ----- GetAllMovies -----
  describe(TOKENS.tests.suites.mediaController.getAllMovies.title, () => {
    it(
      TOKENS.tests.suites.mediaController.getAllMovies.cases.success,
      async () => {
        const response = await request(app).get(
          `${TOKENS.routes.mediaBasePath}/${TOKENS.routes.getAllMovies}`
        );

        expect(response.status).toBe(TOKENS.httpStatus.OK);
        expect(response.body.message).toBe(TOKENS.messages.getMovies);
        expect(Array.isArray(response.body.data)).toBe(true);
      }
    );

    it(
      TOKENS.tests.suites.mediaController.getAllMovies.cases.notFound,
      async () => {
        // assuming you clear your test DB or mock no-movies
        const response = await request(app).get(
          `${TOKENS.routes.mediaBasePath}/${TOKENS.routes.getAllMovies}`
        );

        expect(response.status).toBe(TOKENS.httpStatus.BAD_REQUEST);
      }
    );
  });

  // ----- GetAllTVs -----
  describe(TOKENS.tests.suites.mediaController.getAllTVs.title, () => {
    it(
      TOKENS.tests.suites.mediaController.getAllTVs.cases.success,
      async () => {
        const response = await request(app).get(
          `${TOKENS.routes.mediaBasePath}/${TOKENS.routes.GetAllTVs}`
        );

        expect(response.status).toBe(TOKENS.httpStatus.OK);
        expect(response.body.message).toBe(TOKENS.messages.getTVs);
        expect(Array.isArray(response.body.data)).toBe(true);
      }
    );

    it(
      TOKENS.tests.suites.mediaController.getAllTVs.cases.notFound,
      async () => {
        const response = await request(app).get(
          `${TOKENS.routes.mediaBasePath}/${TOKENS.routes.GetAllTVs}`
        );

        expect(response.status).toBe(TOKENS.httpStatus.BAD_REQUEST);
      }
    );
  });

  // ----- GetAllMedia -----
  describe(TOKENS.tests.suites.mediaController.getAllMedia.title, () => {
    it(
      TOKENS.tests.suites.mediaController.getAllMedia.cases.success,
      async () => {
        const response = await request(app).get(
          `${TOKENS.routes.mediaBasePath}/${TOKENS.routes.GetAllMedia}`
        );

        expect(response.status).toBe(TOKENS.httpStatus.OK);
        expect(response.body.message).toBe(TOKENS.messages.getMedia);
        expect(Array.isArray(response.body.data)).toBe(true);
      }
    );

    it(
      TOKENS.tests.suites.mediaController.getAllMedia.cases.notFound,
      async () => {
        const response = await request(app).get(
          `${TOKENS.routes.mediaBasePath}/${TOKENS.routes.GetAllMedia}`
        );

        expect(response.status).toBe(TOKENS.httpStatus.BAD_REQUEST);
      }
    );
  });

  // ----- Search -----
  describe(TOKENS.tests.suites.mediaController.Search.title, () => {
    it(
      TOKENS.tests.suites.mediaController.Search.cases.success,
      async () => {
        const response = await request(app)
          .get(`${TOKENS.routes.mediaBasePath}/${TOKENS.routes.Search}`)
          .query({ q: TOKENS.tests.suites.mediaController.Search.data.searchQuery });

        expect(response.status).toBe(TOKENS.httpStatus.OK);
        expect(response.body.message).toBe(TOKENS.messages.searchMedia);
        expect(Array.isArray(response.body.data)).toBe(true);
      }
    );

    it(
      TOKENS.tests.suites.mediaController.Search.cases.notFound,
      async () => {
        const response = await request(app)
          .get(`${TOKENS.routes.mediaBasePath}/${TOKENS.routes.Search}`)
          .query({ q: 'nothing-will-match-this' });

        expect(response.status).toBe(TOKENS.httpStatus.BAD_REQUEST);
      }
    );
  });

  // ----- GetMovieById -----
  describe(TOKENS.tests.suites.mediaController.GetMovieById.title, () => {
    it(
      TOKENS.tests.suites.mediaController.GetMovieById.cases.success,
      async () => {
        const id = TOKENS.tests.suites.mediaController.GetMovieById.data.existingMovieId;
        const response = await request(app).get(
          `${TOKENS.routes.mediaBasePath}/${TOKENS.routes.GetMovieById}/${id}`
        );

        expect(response.status).toBe(TOKENS.httpStatus.OK);
        expect(response.body.message).toBe(TOKENS.messages.getMovieById);
        expect(response.body.data.id).toBe(id);
      }
    );

    it(
      TOKENS.tests.suites.mediaController.GetMovieById.cases.notFound,
      async () => {
        const response = await request(app).get(
          `${TOKENS.routes.mediaBasePath}/${TOKENS.routes.GetMovieById}/nonexistent`
        );

        expect(response.status).toBe(TOKENS.httpStatus.BAD_REQUEST);
      }
    );
  });

  // ----- GetTVById -----
  describe(TOKENS.tests.suites.mediaController.GetTVById.title, () => {
    it(
      TOKENS.tests.suites.mediaController.GetTVById.cases.success,
      async () => {
        const id = TOKENS.tests.suites.mediaController.GetTVById.data.existingTVId;
        const response = await request(app)
          .get(`${TOKENS.routes.mediaBasePath}/${TOKENS.routes.GetTVById}/${id}`)
          .send({ id });

        expect(response.status).toBe(TOKENS.httpStatus.OK);
        expect(response.body.message).toBe(TOKENS.messages.getTVById);
        expect(response.body.data.id).toBe(id);
      }
    );

    it(
      TOKENS.tests.suites.mediaController.GetTVById.cases.notFound,
      async () => {
        const response = await request(app)
          .get(`${TOKENS.routes.mediaBasePath}/${TOKENS.routes.GetTVById}/nope`)
          .send({ id: 'nope' });

        expect(response.status).toBe(TOKENS.httpStatus.BAD_REQUEST);
      }
    );
  });
});

