# Models

### Types

1. Project
2. Project Entries
3. Specialty
4. Niche
5. User
6. Roles

#### Project Table

The project table correlates specialties, users, and user information together for editing and viewing. Each project in the table will have the following general descriptor fields:

1. _Name_ - Name of the project
2. _Description_ - Description of the project
3. _Specialty list_ - List of associated specialties
4. _Niche list_ - List of assocaited niches
5. _Client list_ - List of associated clients
6. _Denial list_ - List of users that are denied access
7. _Status_ - Current status of the project
7. _Public_ - Boolean value indicating whether the project is public or private

#### Project Entries Table

Each project in the project table will have a project entry table. Each entry in the table will be comprised of the following fields:

1. _Username_ - Name of the specialist that made the entry. A foreign key to a relevant user.
2. _Niche_ - Name of the niche the specialist is creating the entry under.
2. _Project_ - Name of the project the entry is being created for.
3. _Current_Score_ - The current integer score of the specialist. Most recent is the final score.
4. _Text_Notes_ - Any notes the specialist provides
5. _Entry_Date_ - Date the entry was made
6. _Entry_Time_ - Time the entry was made
7. _Last_Modified_Date_ - Date of last modification
8. _Last_Modified_Time_ - Time of last modification

#### Specialty Table

The specialty table lists the different disciplines available in the system. Each specialty entry will have the following fields:

1. _Name_ - Title of specialty (e.g. cybersecurity, software dev, legal, etc.) (unique)
2. _Description_ - A brief description of the specialty and what tasks are required for the specialty

#### Niche Table

Each specialty can have associated sub-niches for higher granularity context. each Niche entry will have the following fields:

1. _Name_ - Name of the niche (unique)
2. _Description_ - A short, text description about the niche and what tasks are required for the niche
3. _Specialty_ - A foreign key to a related specialty

#### User Table

Each user in the system will have a user profile. Each entry in the table will have the following fields:

1. _First_ - The user first name
2. _MI_ - The user middle initial
3. _Last_ - The user last name
4. _Username_ - The user's chosen screenname
5. _Role_ - A foreign key entry to the user role
6. _Specialties_ - A list of foreign keys relating to the specialty table. Dropdown checkbox menu.
6. _Niches_ - A list of foreign keys relating to niche table.
7. _Projects_ - A list of project foreign keys relating to which projects a user has contributed to. Dropdown checkbox menu.
9. _Active_ - A boolean for currently acting

#### Role Table

Each user must fulfill one of four roles. These roles will be contained in a role table and can be expanded later. Each role has the following fields:

1. _Name_ - The name of the role (unique)
2. _Description_ - A brief description of the role
3. _Users_ - A list of foreign keys relating to users in the role
