CREATE TABLE users(
    id SERIAL PRIMARY KEY,
    firstName VARCHAR(100) NOT NULL,
    lastName VARCHAR(100) NOT NULL,
    hashedPassword VARCHAR NOT NULL
);