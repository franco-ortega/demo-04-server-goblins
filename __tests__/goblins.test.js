const fs = require('fs');
const app = require('../lib/app');
const request = require('supertest');
const pool = require('../lib/utils/pool');

describe('Goblin endpoint tests', () => {
  beforeEach(() => pool.query(fs.readFileSync('./sql/database.sql', 'utf-8')));

  afterAll(() => pool.end());

  it('creates a goblin via POST', async() => {
    const response = await request(app)
      .post('/api/v1/goblins')
      .send({
        goblinName: 'Taru',
        hitPoints: 5,
        armorClass: 14,
        items: ['apple muffin', 'tiny watch on chain'],
      })

    expect(response.body).toEqual({
      id: '1',
      goblinName: 'Taru',
      hitPoints: 5,
      armorClass: 14,
      items: ['apple muffin', 'tiny watch on chain'],
    });
  });

  it('retrieves all goblins via GET', async() => {
    await request(app)
      .post('/api/v1/goblins')
      .send({
        goblinName: 'Taru',
        hitPoints: 5,
        armorClass: 14,
        items: ['apple muffin', 'tiny watch on chain'],
      });

    await request(app)
    .post('/api/v1/goblins')
    .send({
      goblinName: 'Daliu',
      hitPoints: 7,
      armorClass: 12,
      items: ['purple gem', 'bucket'],
    });

    await request(app)
    .post('/api/v1/goblins')
    .send({
      goblinName: 'Tarvin',
      hitPoints: 10,
      armorClass: 10,
      items: ['spoon', 'helmet', 'spice', 'pumpkin', 'cat bones', 'mushroom', 'bowtie']
    });

    const response = await request(app)
      .get('/api/v1/goblins');

    expect(response.body).toEqual([
      {
      id: '1',
      goblinName: 'Taru',
      hitPoints: 5,
      armorClass: 14,
      items: ['apple muffin', 'tiny watch on chain'],
      },
      {
        id: '2',
        goblinName: 'Daliu',
        hitPoints: 7,
        armorClass: 12,
        items: ['purple gem', 'bucket'],
      },
      {
        id: '3',
        goblinName: 'Tarvin',
        hitPoints: 10,
        armorClass: 10,
        items: ['spoon', 'helmet', 'spice', 'pumpkin', 'cat bones', 'mushroom', 'bowtie']
      }
    ]);
  });
});
