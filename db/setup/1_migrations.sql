DROP TABLE IF EXISTS posts;

CREATE TABLE posts (
    id serial PRIMARY KEY,
    title varchar(140) NOT NULL
    user varchar(140) NOT NULL
    body varchar(900) NOT NULL
);