DROP TABLE IF EXISTS posts;

CREATE TABLE posts (
    id serial PRIMARY KEY,
    title varchar(255),
    author varchar(255),
    story TEXT,
    day int,
    month int
);