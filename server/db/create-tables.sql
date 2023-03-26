CREATE TABLE IF NOT EXISTS Account (
  id        SERIAL,
  password  VARCHAR(256) NOT NULL,
  name      VARCHAR NOT NULL,
  email     VARCHAR(64) NOT NULL
);

ALTER TABLE Account ADD CONSTRAINT pk_Account PRIMARY KEY (id);

CREATE UNIQUE INDEX idx_AccountEmail ON Account (email);
