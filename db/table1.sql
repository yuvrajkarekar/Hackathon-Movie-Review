create database hackathon;
use hackathon;
CREATE TABLE shares (
    review_id integer,
    user_id integer
);


CREATE TABLE users (
    id integer auto_increment primary key,
    first_name varchar(50),
    last_name varchar(50),
    email varchar(50),
    password varchar(50),
    mobile varchar(20),
    birth DATE
);

CREATE TABLE reviews (
    id integer auto_increment primary key,
    movie_id integer,
    review varchar(100),
    rating integer,
    user_id integer,
    modified DATETIME,
    FOREIGN KEY (user_id) REFERENCES users(id)
);


CREATE TABLE movies (
    id integer primary key auto_increment,
    title varchar(50),
    releases DATE
);