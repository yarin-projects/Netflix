import request from 'supertest';
import { app } from '../../app';

describe('Tests for user controller', () => {
  describe('Test for getAllMedia', () => {
    it('should return 200 and all the movies and shows', async () => {
      const response = await request(app).get('/api/browse/allMovies').send({
        //send the body as object
      });
      expect(response.status).toBe(200);
      expect(response.body).toBeDefined();
    });
    it('should return 400 if the request is invalid', async () => {
      const response = await request(app).get('/api/browse/invalid').send({
        //send the body as object
      });
      expect(response.status).toBe(404);
      expect(response.body).toBeDefined();
    });
  });
});
