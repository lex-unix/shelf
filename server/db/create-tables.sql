CREATE TABLE IF NOT EXISTS UserAccount (
  id        SERIAL,
  password  VARCHAR(256) NOT NULL,
  name      VARCHAR NOT NULL,
  email     VARCHAR(64) NOT NULL
);

ALTER TABLE UserAccount ADD CONSTRAINT pk_UserAccount PRIMARY KEY (id);

CREATE UNIQUE INDEX idx_UserAccountEmail ON UserAccount (email);
