const Goblin = require('../lib/models/Goblin')

describe('Goblin endpoint tests', () => {
  it('creates a goblin via POST', () => {
    const response = Goblin
      .insert({
        goblinName: 'Taru',
        hitPoints: 5,
        armorClass: 14,
        items: ['apple muffin', 'tiny watch on chain'],
      })

    expect(response).toBeEqual({
      id: 1,
      goblinName: 'Taru',
      hitPoints: 5,
      armorClass: 14,
      items: ['apple muffin', 'tiny watch on chain'],
    })
  })
})