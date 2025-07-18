import request from 'supertest';
import app from '../../src/index'; // Adjust if split into separate file
import mongoose from 'mongoose';
import Bug from '../../src/models/Bug';

beforeAll(async () => {
  await mongoose.connect('mongodb://localhost:27017/bugtrackertest');
});

afterAll(async () => {
  await mongoose.connection.close();
});

describe('Bug API', () => {
  it('should create a bug', async () => {
    const res = await request(app).post('/api/bugs').send({
      title: 'Login issue',
      description: 'Login fails randomly'
    });
    expect(res.statusCode).toBe(201);
    expect(res.body.title).toBe('Login issue');
  });
});
