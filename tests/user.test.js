const { expect } = require('chai');
const request = require('supertest');
const { User } = require('../src/models');
const app = require('../src/app');

describe('/users', () => {
  before(async () => User.sequelize.sync());

  beforeEach(async () => {
    await User.destroy({ where: {} });
  });
  
  describe('with no records in the database', () => {
    describe('POST /users', () => {
      it('creates a new user in the database', async() => {
        const response = await request(app).post('/users').send({
          email: 'user1@gmail.com',
          password: 'rainbow123',
        });  
        const newUserRecord = await User.findByPk(response.body.id, {raw: true,});

        expect(response.status).to.equal(201);
        expect(response.body.email).to.equal('user1@gmail.com');
        expect(newUserRecord.email).to.equal('user1@gmail.com');
        expect(newUserRecord.password).to.equal('rainbow123');
      });
      it('returns a 400 and validation error message if it does not pass the validation', async() => {
        const response = await request(app).post('/users').send({
          email: '',
          password: '',
        });
        const newUserRecord = await User.findByPk(response.body.id, {raw: true});

        expect(response.status).to.equal(400);
        expect(response.body.errors.length).to.equal(2);
        expect(newUserRecord).to.equal(null);
      });
    });
  });
});
