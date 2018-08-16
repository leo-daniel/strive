USE calendar_db;

-- ### SAMPLE PROJECT DATA ###
INSERT INTO projects (`project_name`, `description`, `total_tasks`, `complete_tasks`, `date_due`, `createdAt`, `updatedAt`)
VALUES ('Science Project', NULL, NULL, NULL, NULL, NULL, NULL);

INSERT INTO projects (`project_name`, `description`, `total_tasks`,`complete_tasks`, `date_due`, `createdAt`, `updatedAt`)
VALUES ('Space station construction', NULL, NULL, NULL, NULL, NULL, NULL);

INSERT INTO projects (`project_name`, `description`, `total_tasks`, `complete_tasks`, `date_due`, `createdAt`, `updatedAt`)
VALUES ('DIY Nuclear Reactor', NULL, NULL, NULL, NULL, NULL, NULL);

-- ### SAMPLE TASKS DATA ###
INSERT INTO tasks (`projectId`, `task_name`, `category`, `address`, `description`, `priority`, `date_due`, `hours_complete`, `is_complete`)
VALUES (NULL, 'Pay my credit card bill', 'Home', NULL, NULL, 0, '2018-09-11', 1, 0);

INSERT INTO tasks (`projectId`, `task_name`, `category`, `address`, `description`, `priority`, `date_due`, `hours_complete`, `is_complete`)
VALUES (NULL, 'Add custom emoji to the company Slack workspace', 'Work', NULL, 'This is a vauluable task that I should make a top priority', 3, '2018-09-11', 8, 0);

INSERT INTO tasks (`projectId`, `task_name`, `category`, `address`, `description`, `priority`, `date_due`, `hours_complete`, `is_complete`)
VALUES (NULL, 'Write code for to-do app', 'Work', NULL, 'Node.js, Handlebars, Express, Sequelize, Heroku', 2, '2018-09-11', 20, 0);

INSERT INTO tasks (`projectId`, `task_name`, `category`, `address`, `description`, `priority`, `date_due`, `hours_complete`, `is_complete`)
VALUES (NULL, 'Uncategorized task', NULL, NULL, NULL, 1, '2018-09-11', 0, 0);
-- NOTE: I've made the following the priority scale: 0 = none, 1 = low, 2 = med, 3 = high. Think of it as exclamation marks to represent importance. _ !, !!, !!!

-- ### NO SAMPLE STEPS DATA RIGHT NOW ###
-- INSERT INTO steps (`step_name`, `address`, `desription`, `priority`, `date_due`, `hours_complete`)
-- VALUES ();

-- ### SAMPLE GOALS DATA ###
INSERT INTO goals (`goal_name`, `description`, `progress`, `complete`)
VALUES ('Become a Millionare', 'Plus I would get to meet Regis Philbin in the process', 0, 0);

INSERT INTO goals (`goal_name`, `description`, `progress`, `complete`)
VALUES ('Achieve world domination', 'How much does it cost to become a member of S.P.E.C.T.R.E.?', 0, 0);

INSERT INTO goals (`goal_name`, `description`, `progress`, `complete`)
VALUES ('Write some goals', 'I want to feel accomplished, so I should make an easy goal', 50, 1)