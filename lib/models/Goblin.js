const pool = require('../utils/pool');

module.exports = class Goblin {
  id;
  goblinName;
  hitPoints;
  armorClass;
  items;

  constructor(row) {
    this.id = row.id;
    this.goblinName = row.goblin_name;
    this.hitPoints = row.hit_points;
    this.armorClass = row.armor_class;
    this.items = row.items;
  }

  static async insert({ goblinName, hitPoints, armorClass, items}) {
    const { rows } = await pool.query(
      `
      INSERT INTO goblins (goblin_name, hit_points, armor_class, items)
      VALUES ($1, $2, $3, $4)
      RETURNING *
      `, [goblinName, hitPoints, armorClass, items]
    );
    return new Goblin(rows[0]);
  };

  static async find() {
    const { rows } = await pool.query(
      'SELECT * FROM goblins'
    );
    return rows.map(goblin => new Goblin(goblin));
  }
};
