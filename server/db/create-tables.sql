CREATE TABLE IF NOT EXISTS Account (
  id        SERIAL,
  password  VARCHAR(256) NOT NULL,
  name      VARCHAR NOT NULL,
  email     VARCHAR(64) NOT NULL
);

ALTER TABLE Account ADD CONSTRAINT pk_Account PRIMARY KEY (id);

CREATE UNIQUE INDEX idx_AccountEmail ON Account (email);

CREATE TABLE IF NOT EXISTS Book (
  id     SERIAL,
  author VARCHAR(256) NOT NULL,
  title  VARCHAR(256) NOT NULL,
  tag    VARCHAR(32) NOT NULL DEFAULT 'wantToRead',
  userId INTEGER NOT NULL
);

ALTER TABLE Book ADD CONSTRAINT pk_Book PRIMARY KEY(id);
ALTER TABLE Book ADD CONSTRAINT fk_BookUserId FOREIGN KEY (userId) REFERENCES Account (id) ON DELETE CASCADE;

CREATE TABLE IF NOT EXISTS Goal (
  id       SERIAL,
  total    INTEGER NOT NULL,
  progress INTEGER NOT NULL DEFAULT 0,
  userId   INTEGER NOT NULL
);

ALTER TABLE Goal ADD CONSTRAINT pk_Goal PRIMARY KEY (id);
ALTER TABLE Goal ADD CONSTRAINT fk_GoalUserId FOREIGN KEY (userId) REFERENCES Account (id) ON DELETE CASCADE;
