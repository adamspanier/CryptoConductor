
# User and Misuser Stories

## Overview

_User stories_ help elicit the requirements of any software design more completely. While many use cases can be perceived through the intended functionality of a given system, more subtle use cases can be missed without intentional probing. The _user stories_ in this document help communicate the expectations users require when using the CryptoConductor platform.


### Users

1. Specialists
2. Leaders
3. Clients
4. Associates

#### Specialists

Specialists comprise any user that will add numerical or text data in relation to any project in the system. Specialists are given a specialty, and can only submit information relating directly to that specialty. If a cybersecurity expert is involved in grading a software system, they would be given a _cybersecurity_ specialty and allowed to submit information relating only to the Software Assurance portion of the grading scale.

#### Leaders

Leaders can also be Specialists, but are given the added ability to create new analysis projects. When a new company or product needs to be added to the system for grading, a Leader is required to both create the project, but also be accountable for it's progress, operation, and behaviors.

#### Clients

Clients are any entity that originate from any project in the system. This could be a CEO of a company requesting scoring checking scoring progress, it could be a programmer that needs software analyzed checking on specialist notes, or it could be a researcher in a research project looking at the progress of the project.

#### Associates

Associates are any entity that does not have any vested interest in the system. This comprises all non-Specialist, non-Leader, and non-Client operators. Associates maintain the lowest level of access privileges.

## User Stories

#### Specialist User Stories

- As a **Specialist**, I want to **browse pertinent projects** so I can **find out if I need to provide input**.
  - _Acceptance Criteria:_
    1. Ensure view project interface exists
    2. Ensure each project can be viewed by specialty
    3. Each project must have a list of specializations defined
    4. Specialist interface lists projects with specialist specializations
    5. Project listing in specialist interface has an active edit hyperlink

- As a **Specialist**, I want to **open pertinent projects** so I can **read existing information about the project**.
  - _Acceptance Criteria:_ 
    1. Ensure a view project interface exists
    2. Ensure each project can be viewed by specialty
    3. Provide an edit hyperlink 
    4. Open project in specialist view

- As a **Specialist**, I want to **edit pertinent projects** so I can **add numerical scoring and text notes to the project**.
  - _Acceptance Criteria:_
    1. Ensure project view interface exists
    2. Ensure projects can be viewed by specialty
    3. Provide add/edit user notes button that is available only for input made by current user
    4. Ensure numerical user score field exists
    5. Provide an edit numerical score button 
    
<!---
- As a **Specialist**, I want to **view pertinent project scores** so I can **determine how my input affected the overall score**.
  - Acceptance Criteria: Allow user- and specialization-based viewing of output score
- As a **Specialist**, I want to **edit pertinent projects** so I can **change my previous input in a given project**.
  - Acceptance Criteria: Allow user-based updates on previous input
- As a **Specialist**, I want to **view pertinent project scores** so I can **determine how my input affected the overall score**.
  - Acceptance Criteria: Allow user- and specialization-based viewing of output score
- As a **Specialist**, I want to **view pertinent projects** so I can **see what other specialists have added**.
  - Acceptance Criteria: Allow specialization-based viewing of pertinent projects
- As a **Specialist**, I want to **view pertinent projects** so I can **ask other specialists questions about their input**.
  - Acceptance Criteria: Allow specialization-based viewing of pertinent projects
-->

#### Leader User Stories

- As a **Leader**, I want to **create new projects** so I can **start the scoring process**.
  - _Acceptance Criteria:_
    1. Ensure new project interface exists
    2. Leader interface provides new project button
    3. New project process allows user to enter Name, Description, checkmark specialties, and limit access
    4. Create button makes new project
     
- As a **Leader**, I want to **edit projects** so I can **fix errors or update information**.
  - _Acceptance Criteria:_
    1. Ensure project edit interface exists
    2. Leader interface provides a list of existing projects
    3. Ensure edit button exists for each project in the leader interface list
    4. Edit button links to project edit interface
 
- As a **Leader**, I want to **view projects** so I can **track specialist changes**.
  - _Acceptance Criteria:_
    1.  Ensure project view interface exists
    2.  Provide role based views of each project
    3.  Ensure all changes to any given project are logged
    4.  List change history for each piece of information in the project

<!---
- As a **Leader**, I want to **view projects** so I can **track specialist participation**.
  - Acceptance Criteria: Log all specialist activity realted to each project
- As a **Leader**, I want to **create automated reports** so I can **determine regular reporting criteria**.
  - Acceptance Criteria: Allow leader to create reporting criteria
- As a **Leader**, I want to **receive automated reports** so I can **track overall changes in the system**.
  - Acceptance Criteria: Create and send automated reports
- As a **Leader**, I want to **limit project access** so I can **choose which specialists can open and edit**.
  - Acceptance Criteria: Allow leaders to reduce access to projects by user and specialty
- As a **Leader**, I want to **add new specialists** so I can **have then provide input**.
  - Acceptance Criteria: 
- As a **Leader**, I want to **add new clients** so I can **let them see their progress**.
  - Acceptance Criteria: 
- As a **Leader**, I want to **add new Associates** so I can **allow them to communcate with users**.
  - Acceptance Criteria: 
-->

#### Client User Stories

- As a **Client**, I want to **view my project** so I can **check on scoring progress**.
  - _Acceptance Criteria:_
    1. Ensure view project interface exists
    2. Ensure project view provides user specific views
    3. Allow projects to have a client list
    4. Display all projects that have the client contained in the client list  

<!--
- As a **Client**, I want to **view my project** so I can **read specialist input**.
  - Acceptance Criteria: 
-->

#### Associate User Stories

- As an **Associate**, I want to **communicate with a leader** so I can **ask questions**.
  - _Acceptance Criteria:_
    1. Ensure a generic communication interface is available
    2. Display generic contact information with all non-authorized users  

## Misuser Stories

#### Specialist Misuser Stories
- As a **Specialist _Misuser_**, I want to **open unauthorized projects** so I can **read information I'm not allowed to know**.
  - Mitigation Criteria: Enforce specialization-based project access
- As a **Specialist _Misuser_**, I want to **edit unauthorized projects** so I can **change other specialist input values**.
  - Mitigation Criteria: Enforce specialization- and user-based project editing
- As a **Specialist _Misuser_**, I want to **edit unauthorized projects** so I can **provide inappropriate input**.
  - Mitigation Criteria: Implement white lists, regular expressions, and input sanitization
- As a **Specialist _Misuser_**, I want to **edit unauthorized projects** so I can **act like another user**.
  - Mitigation Criteria: Enforce user-based project editing
- As a **Specialist _Misuser_**, I want to **edit unauthorized projects** so I can **make changes without anyone knowing**.
  - Mitigation Criteria: Log all changes


#### Leader Misuser Stories
- As a **Leader _Misuser_**, I want to **edit project** so I can **change specialist input without permission**.
  - Mitigation Criteria: Enforce user-based notification upon any user input change
- As a **Leader _Misuser_**, I want to **edit project** so I can **delete input I don't like**.
  - Mitigation Criteria: Enforce user-based notification upon any user input delete
- As a **Leader _Misuser_**, I want to **delete projects** so I can **delete projects I don't like**.
  - Mitigation Criteria: Enforce dual-leader delete and separation of duties
- As a **Leader _Misuser_**, I want to **edit the system** so I can **delete specialists I don't like**.
  - Mitigation Criteria: Enforce dual-leader delete
- As a **Leader _Misuser_**, I want to **change logging** so I can **make changes without anyone knowing**.
  - Mitigation Criteria: Enforce dual-leader logging changes

#### Client Misuser Stories
- As a **Client _Misuser_**, I want to **edit my projects** so I can **change scoring**.
  - Mitigation Criteria: Allow client-based viewing in affiliated projects only
- As a **Client _Misuser_**, I want to **view other projects** so I can **learn about my competition**.
  - Mitigation Criteria: Allow client-based viewing in affiliated projects
- As a **Client _Misuser_**, I want to **edit my projects** so I can **change text input**.
  - Mitigation Criteria: Disallow client editing

#### Associate Misuser Stories
- As an **Associate _Misuser_**, I want to **view projects** so I can **find out information that I shouldn't know**.
  - Mitigation Criteria: Least privileges in Associate users
