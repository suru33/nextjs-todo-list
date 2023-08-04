CREATE ROLE todo_user PASSWORD 'todo_password' LOGIN CREATEDB;

CREATE DATABASE todo_master;
CREATE DATABASE todo_prisma_shadow;
GRANT ALL PRIVILEGES ON DATABASE todo_master TO todo_user;
GRANT ALL PRIVILEGES ON DATABASE todo_prisma_shadow TO todo_user;