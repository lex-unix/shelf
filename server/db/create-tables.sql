CREATE TABLE IF NOT EXISTS Account (
  id        SERIAL,
  password  VARCHAR(256) NOT NULL,
  name      VARCHAR NOT NULL,
  email     VARCHAR(64) NOT NULL,
  createdAt TIMESTAMP NOT NULL DEFAULT now()
);

ALTER TABLE Account ADD CONSTRAINT pk_Account PRIMARY KEY (id);

CREATE UNIQUE INDEX idx_AccountEmail ON Account (email);

CREATE TABLE IF NOT EXISTS Book (
  id        SERIAL,
  author    VARCHAR(256) NOT NULL,
  title     VARCHAR(256) NOT NULL,
  tag       VARCHAR(32) NOT NULL DEFAULT 'wantToRead',
  userId    INTEGER NOT NULL,
  createdAt TIMESTAMP NOT NULL DEFAULT now()

);

ALTER TABLE Book ADD CONSTRAINT pk_Book PRIMARY KEY(id);
ALTER TABLE Book ADD CONSTRAINT fk_BookUserId FOREIGN KEY (userId) REFERENCES Account (id) ON DELETE CASCADE;

ALTER TABLE IF EXISTS Book ADD COLUMN cover VARCHAR(256);

CREATE TABLE IF NOT EXISTS Goal (
  id        SERIAL,
  name      VARCHAR(256) NOT NULL,
  total     INTEGER NOT NULL,
  progress  INTEGER NOT NULL DEFAULT 0,
  userId    INTEGER NOT NULL,
  startDate TIMESTAMP NOT NULL DEFAULT now(),
  endDate   TIMESTAMP NOT NULL DEFAULT (make_timestamp(EXTRACT(YEAR FROM CURRENT_DATE)::integer, 12, 31, 23, 59, 59)),
  createdAt TIMESTAMP NOT NULL DEFAULT now()

);

ALTER TABLE Goal ADD CONSTRAINT pk_Goal PRIMARY KEY (id);
ALTER TABLE Goal ADD CONSTRAINT fk_GoalUserId FOREIGN KEY (userId) REFERENCES Account (id) ON DELETE CASCADE;
