-- Active: 1675349537534@@127.0.0.1@3306

CREATE TABLE users (
    id TEXT PRIMARY KEY UNIQUE NOT NULL,
    name TEXT NOT NULL,
    email TEXT UNIQUE NOT NULL,
    password TEXT NOT NULL,
    role TEXT NOT NULL,
    created_at TEXT DEFAULT (DATETIME()) NOT NULL
);

DROP TABLE users;

CREATE TABLE posts (
    id TEXT PRIMARY KEY UNIQUE NOT NULL,
    creator_id TEXT NOT NULL,
    content TEXT NOT NULL,
    likes INTEGER,
    dislikes INTEGER,
    created_at TEXT DEFAULT (DATETIME()) NOT NULL,
    updated_at TEXT DEFAULT (DATETIME()) NOT NULL,
    FOREIGN KEY (creator_id) REFERENCES users(id)
);

DROP TABLE posts;

CREATE TABLE likes_dislikes (
    user_id TEXT NOT NULL,
    post_id TEXT NOT NULL,
    like INTEGER,
    FOREIGN KEY (user_id) REFERENCES users(id)
    FOREIGN KEY (post_id) REFERENCES posts(id)
);

DROP TABLE likes_dislikes;

INSERT INTO users (id, name, email, password, role)
VALUES
    ("u001", "Fulano", "fulano@email.com", "Fulano123", "NORMAL"),
    ("u002", "Beltrano", "beltrano@email.com", "Beltrano123", "NORMAL"),
    ("u003", "Ciclano", "ciclano@email.com", "Ciclano123", "NORMAL");

SELECT * FROM users;

INSERT INTO posts (id, creator_id, content)
VALUES
    ("p001", "u001", "Bom dia!"),
    ("p002", "u001", "muito boa essa série The Last of Us!"),
    ("p003", "u002", "açaí é sorvete?"),
    ("p004", "u003", "kkkkkkrying"),
    ("p005", "u002", "ta loco que sono");

SELECT * FROM posts;

INSERT INTO likes_dislikes (user_id, post_id)
VALUES
    ("u001", "p001"),
    ("u001", "p002"),
    ("u002", "p003"),
    ("u003", "p004"),
    ("u002", "p005");

SELECT * FROM likes_dislikes;