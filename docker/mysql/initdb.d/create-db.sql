CREATE USER 'io_user'@'%' IDENTIFIED BY 'io_password';

CREATE DATABASE IF NOT EXISTS io_app DEFAULT CHARACTER SET utf8 DEFAULT COLLATE utf8_general_ci;

GRANT ALL ON *.* TO 'io_user'@'%';