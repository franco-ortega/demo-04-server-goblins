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
    })
  })
})