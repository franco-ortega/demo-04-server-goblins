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

  static async update(id, { goblinName, hitPoints, armorClass, items }) {
    const { rows } = await pool.query(
      `
      UPDATE
      SET
      goblin_name=$1,
      hit_points=$2,
      armor_class=$3,
      items=$4
      WHERE id = id=$5
      RETURNING *
      `,
      [goblinName, hitPoints, armorClass, items, id]
    );
    return new Goblin(rows[0]);
  };
};
