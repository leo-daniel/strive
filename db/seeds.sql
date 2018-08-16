USE calendar_db;

-- ### SAMPLE PROJECT DATA ###
INSERT INTO projects (`project_name`, `description`, `date_due`, `total_tasks`, `complete_tasks`)
VALUES ('Science Project', NULL, NULL, NULL, NULL);

INSERT INTO projects (`project_name`, `description`, `date_due`, `total_tasks`, `complete_tasks`)
VALUES ('Space station construction', NULL, NULL, NULL, NULL);

INSERT INTO projects (`project_name`, `description`, `date_due`, `total_tasks`, `complete_tasks`)
VALUES ('DIY Nuclear Reactor', NULL, NULL, NULL, NULL);

-- ### SAMPLE TASKS DATA ###
INSERT INTO tasks (`task_name`, `category`, `address`, `description`, `priority`, `date_due`, `is_complete`, `hours_complete`)
VALUES ('Pay my credit card bill', 'Home', NULL, NULL, 0, '2018-09-11', 1, 0);

INSERT INTO tasks (`task_name`, `category`, `address`, `description`, `priority`, `date_due`, `is_complete`, `hours_complete`)
VALUES ('Add custom emoji to the company Slack workspace', 'Work', NULL, 'This is a vauluable task that I should make a top priority', 3, '2018-09-11', 0,  8);

INSERT INTO tasks (`task_name`, `category`, `address`, `description`, `priority`, `date_due`, `is_complete`, `hours_complete`)
VALUES ('Write code for to-do app', 'Work', NULL, 'Node.js, Handlebars, Express, Sequelize, Heroku', 2, '2018-09-11', 0, 20);

INSERT INTO tasks (`task_name`, `category`, `address`, `description`, `priority`, `date_due`, `is_complete`, `hours_complete`)
VALUES ('Uncategorized task', NULL, NULL, NULL, 1, '2018-09-11', 0, 0);
-- NOTE: I've made the following the priority scale: 0 = none, 1 = low, 2 = med, 3 = high. Think of it as exclamation marks to represent importance. _ !, !!, !!!

-- ### NO SAMPLE STEPS DATA RIGHT NOW ###
-- INSERT INTO steps (`step_name`, `address`, `desription`, `priority`, `date_due`, `hours_complete`)
-- VALUES ();

-- ### SAMPLE GOALS DATA ###
INSERT INTO goals (`goal_name`, `description`, `progress`)
VALUES ('Become a Millionare', 'Plus I would get to meet Regis Philbin in the process', 0);

INSERT INTO goals (`goal_name`, `description`, `progress`)
VALUES ('Achieve world domination', 'How much does it cost to become a member of S.P.E.C.T.R.E.?', 0);

INSERT INTO goals (`goal_name`, `description`, `progress`)
VALUES ('Write some goals', 'I want to feel accomplished, so I should make an easy goal', 50)