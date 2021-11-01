DROP TABLE IF EXISTS goblins;

CREATE TABLE goblins (
  id BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
  goblin_name TEXT NOT NULL,
  armor_class INTEGER NOT NULL,
  hit_points INTEGER NOT NULL,
  items TEXT[]
);
