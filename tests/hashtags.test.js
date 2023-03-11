const { expect } = require('chai');
const request = require('supertest');
const { Hashtag } = require('../src/models');
const app = require('../src/app');

describe('/hashtags', () => {
  before(async () => Hashtag.sequelize.sync());

  beforeEach(async () => {
    await Hashtag.destroy({ where: {} });
  });

  const userId = '73740589849330';

  describe('with no records in the database', () => {
    describe('POST /hashtags', () => {
      it('creates a new hashtag in the database', async () => {
        const response = await request(app)
          .post(`/hashtags`)
          .send({
            title: 'kpop',
            category: 'kpop',
            hashtags: '#kpop, #twice, #blackpink, #BTS, #redvelvet',
            userId: `${userId}`,
          });
        const newHashtagRecord = await Hashtag.findByPk(response.body.id, {
          raw: true,
        });

        expect(response.status).to.equal(201);
        expect(response.body.title).to.equal('kpop');
        expect(newHashtagRecord.category).to.equal('kpop');
        expect(newHashtagRecord.hashtags).to.equal(
          '#kpop, #twice, #blackpink, #BTS, #redvelvet'
        );
        expect(newHashtagRecord.userId).to.equal('73740589849330');
      });
      it('returns a 400 and validation error message if it does not pass the validation', async () => {
        const response = await request(app).post('/hashtags').send({
          title: '',
          category: '',
          hashtags: '',
          userId: '',
        });
        const newHashtagRecord = await Hashtag.findByPk(response.body.id, {
          raw: true,
        });

        expect(response.status).to.equal(400);
        expect(response.body.errors.length).to.equal(4);
        expect(newHashtagRecord).to.equal(null);
      });
    });
  });
});

describe('with records in the database', () => {
  beforeEach(async () => {
    await Hashtag.destroy({ where: {} });
  });

  let hashtags;
  beforeEach(async () => {
    hashtags = await Promise.all([
      Hashtag.create({
        title: 'kpop',
        category: 'kpop',
        hashtags: '#kpop #twice #blackpink #BTS #redvelvet',
        userId: 987654321987,
      }),
      Hashtag.create({
        title: 'nature',
        category: 'nature',
        hashtags: '#nature #naturelove #walkinnature #hiking',
        userId: 875953475987,
      }),
      Hashtag.create({
        title: 'art',
        category: 'art',
        hashtags: '#artist #artistoftheday #watercolour #painting #drawing',
        userId: 765430921987,
      }),
    ]);
  });

  describe('GET /hashtags', () => {
    it('gets all hashtags records', async () => {
      const response = await request(app).get('/hashtags');

      expect(response.status).to.equal(200);
      expect(response.body.length).to.equal(3);

      response.body.forEach((hashtag) => {
        const expected = hashtags.find((a) => a.id === hashtag.id);

        expect(hashtag.title).to.equal(expected.title);
        expect(hashtag.category).to.equal(expected.category);
        expect(hashtag.hashtags).to.equal(expected.hashtags);
      });
    });
  });

  describe('gets hashtag record by id', () => {
    it('gets hashtag record by id', async () => {
      const hashtag = hashtags[0];
      const response = await request(app).get(
        `/hashtags/${hashtag.userId}/hashtag`
      );

      expect(response.status).to.equal(200);
      expect(response.body.title).to.equal(hashtags.title);
      expect(response.body.category).to.equal(hashtags.category);
    });
  });

  describe('DELETE /hashtags/:id', () => {
    it('deletes hashtag record by id', async () => {
      const hashtag = hashtags[0];
      const response = await request(app).delete(`/hashtags/${hashtag.id}`);
      const deletedHashtag = await Hashtag.findByPk(hashtag.id, { raw: true });

      expect(response.status).to.equal(204);
      expect(deletedHashtag).to.equal(null);
    });

    it('returns a 404 if the reader does not exist', async () => {
      const response = await request(app).delete('/hashtags/12345');

      expect(response.status).to.equal(404);
      expect(response.body.error).to.equal(undefined);
    });
  });
});
