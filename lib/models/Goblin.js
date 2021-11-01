export default class Goblin {
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
};
