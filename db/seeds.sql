USE calendar_db;

-- ### SAMPLE PROJECT DATA ###
INSERT INTO projects (`project_name`, `description`, `date_due`, `createdAt`, `updatedAt`)
VALUES ('Science Project', 'Extracting electricity from an orange', '2018-08-18', NULL, NULL);

INSERT INTO projects (`project_name`, `description`, `date_due`, `createdAt`, `updatedAt`)
VALUES ('Paint living room', 'Make my home nicer', NULL, NULL, NULL);

INSERT INTO projects (`project_name`, `description`, `date_due`, `createdAt`, `updatedAt`)
VALUES ('Slack stuff', NULL, NULL, NULL, NULL);

-- ### SAMPLE TASKS DATA ###
INSERT INTO tasks (`projectId`, `task_name`, `category`, `address`, `description`, `priority`, `date_due`, `hours_complete`, `is_complete`)
VALUES (1, 'Buy supplies', 'School', '1045 Walmart Street', 'Trifold, orange, markers etc.', 3, '2018-08-13', 1, 1);

INSERT INTO tasks (`projectId`, `task_name`, `category`, `address`, `description`, `priority`, `date_due`, `hours_complete`, `is_complete`)
VALUES (1, 'Create trifold', 'School', 'Home', "Invite group members to my place", 3, '2018-08-18', 1, 0);

INSERT INTO tasks (`projectId`, `task_name`, `category`, `address`, `description`, `priority`, `date_due`, `hours_complete`, `is_complete`)
VALUES (1, 'Practice short presentation', 'School', 'Home', 'Practice presentation for Science Fair', 3, '2018-08-15', 1, 0);

INSERT INTO tasks (`projectId`, `task_name`, `category`, `address`, `description`, `priority`, `date_due`, `hours_complete`, `is_complete`)
VALUES (2, 'Buy paint', 'Home', '9999 Home Depot Ave', 'Take picture of furniture, match paint with color palette, buy masking tape', 1, '2018-08-18', 0, 0);

INSERT INTO tasks (`projectId`, `task_name`, `category`, `address`, `description`, `priority`, `date_due`, `hours_complete`, `is_complete`)
VALUES (2, 'Paint', 'Home', 'Home', 'Drag Jake over to help, set up newspapers, ladder and paint', 1, '2018-08-19', 0, 0);

INSERT INTO tasks (`projectId`, `task_name`, `category`, `address`, `description`, `priority`, `date_due`, `hours_complete`, `is_complete`)
VALUES (3, 'Add custom emoji to the company Slack workspace', 'Work', '55 Work Avenue', 'This is a vauluable task that I should make a top priority', 3, '2018-08-18', 8, 1);

-- NOTE: I've made the following the priority scale: 0 = none, 1 = low, 2 = med, 3 = high. Think of it as exclamation marks to represent importance. _ !, !!, !!!

-- ### NO SAMPLE STEPS DATA RIGHT NOW ###
-- INSERT INTO steps (`step_name`, `address`, `desription`, `priority`, `date_due`, `hours_complete`)
-- VALUES ();

-- ### SAMPLE GOALS DATA ###
INSERT INTO goals (`goal_name`, `description`, `progress`, `complete`)
VALUES ('Become a Millionare', 'Plus I would get to meet Regis Philbin in the process', .02, 0);

INSERT INTO goals (`goal_name`, `description`, `progress`, `complete`)
VALUES ('Read War and Peace', 'Self-explanatory', .3, 0);

INSERT INTO goals (`goal_name`, `description`, `progress`, `complete`)
VALUES ('Get a job as a developer', 'I want to feel accomplished, so I should make an easy goal', .7, 0);

INSERT INTO goals (`goal_name`, `description`, `progress`, `complete`)
VALUES ('Get halfway through bootcamp', 'Milestone for me', 1, 1);