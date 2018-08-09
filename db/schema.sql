DROP DATABASE calendar_db;

CREATE DATABASE calendar_db;

USE calendar_db;

CREATE TABLE projects(
	id INTEGER(50) NOT NULL AUTO_INCREMENT,
    project_name VARCHAR(50) NOT NULL,
    category VARCHAR(50),
    `address` TEXT,
    `description` TEXT,
    progress DECIMAL(2, 2),
    `priority` INT,
    date_due DATETIME,
    PRIMARY KEY (id)
);

CREATE TABLE tasks(
	id INTEGER NOT NULL AUTO_INCREMENT,
	project_id_fk INT NOT NULL,
    task_name VARCHAR(50) NOT NULL,
    category VARCHAR(50),
    `address` VARCHAR(50),
    `description` TEXT,
    `priority` INT,
    date_due DATETIME,
    PRIMARY KEY (id),
    FOREIGN KEY (project_id_fk) REFERENCES projects(id)
);

CREATE TABLE steps(
	id INTEGER AUTO_INCREMENT,
    task_id_fk INT NOT NULL,
    step_name VARCHAR(50) NOT NULL,
    `address` VARCHAR(50),
    `description` TEXT,
    `priority` INT,
    date_due DATETIME,
    PRIMARY KEY (id),
    FOREIGN KEY (task_id_fk) REFERENCES tasks(id)
);

CREATE TABLE goals(
    id INTEGER AUTO_INCREMENT,
    goal_name VARCHAR(50) NOT NULL,
    `description` TEXT,
    progress DECIMAL(2, 2),
    PRIMARY KEY (id)
);
