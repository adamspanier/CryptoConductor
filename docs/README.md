# Design

## Scope

The CryptoConductor prototype created for CYBR 8470 will carry out basic design and prototyping activities. Completion will see six primary dashboards created: a login interface, a project dashboard, a project management dashboard, a project entries dashboard, an account management interface, and a scoring interface. 6 primary models will serve the dashboards above: Project, Entries, Specialty, Niche, User, and Role. Controllers will be used to carry out the business logic and data fetching based on user role and access criteria.

## Mockups

### Login Interface

![Login Mockup](https://github.com/adamspanier/CryptoConductor/blob/main/docs/mockups/Login.jpg)

### Project Dashboard

![Project Dashboard Mockup](https://github.com/adamspanier/CryptoConductor/blob/main/docs/mockups/ProjectDashboard.jpg)

### Project Management Dashboard

![Project Management Dashboard Mockup](https://github.com/adamspanier/CryptoConductor/blob/main/docs/mockups/ProjectManagement.jpg)

### Project Entries Dashboard

![Project Entries Dashboard Mockup](https://github.com/adamspanier/CryptoConductor/blob/main/docs/mockups/ProjectEntries.jpg)

### Account Management Interface

![Account Management Mockup](https://github.com/adamspanier/CryptoConductor/blob/main/docs/mockups/AccountManagement.jpg)

### Scoring Interface

![Scoring Interface Mockup](https://github.com/adamspanier/CryptoConductor/blob/main/docs/mockups/ScoringInterface.jpg)

## Diagrams

### System Context

<p align="center">
  <img src="https://github.com/adamspanier/CryptoConductor/blob/main/docs/diagrams/SystemContext.jpg"/>
</p>

### Container Diagram

<p align="center">
  <img src="https://github.com/adamspanier/CryptoConductor/blob/main/docs/diagrams/CCContainer.jpg"/>
</p>

### Component Diagram


<p align="center">
  <img src="https://github.com/adamspanier/CryptoConductor/blob/main/docs/diagrams/Component.jpg"/>
</p>


# User and Misuser Stories

## Overview

_User stories_ help better elicit software design requirements for any system in a more holistic manner. While many use cases can be inuitively perceived through the obvious functionality of a given system, more subtle use cases can be missed without organized and intentional probing. The _user stories_ in this document help communicate the expectations users require when using the CryptoConductor platform.


### Users

1. Specialists
2. Leaders
3. Clients
4. Associates

#### Specialists

Specialists comprise any discipline-speicific user that provides scoring data in relation to a project in the system. Specialists are given one or more specialties relating to one or more niches. Each Specialist can only submit information relating directly to those specialties and niches. If a cybersecurity expert is involved in grading a software system, they would be given a _Technology_ specialty, a _Cybersecurity_ niche, and allowed to submit information relating only to the Software Assurance portion of the grading scale. Specialties are dynamic and can be added, changed, or removed for a better, more flexible set of Specialists.

#### Leaders

Leaders can also be Specialists, but are given the added ability to create new analysis projects. When a new company or product needs to be added to the system for grading, a Leader is required to both create the project, but also be accountable for it's progress, operation, and behaviors.

#### Clients

Clients are any entity that originate from any project in the system. This could be a CEO of a company requesting scoring or checking scoring progress, it could be a programmer that needs software analyzed checking on specialist notes, it could be a researcher in a research project looking at the progress of the project, or it can be a venture capitalist seeking scoring for a potential investment. Clients can view data regarding their affiliated projects and make payments through the system.

#### Associates

Associates are any entity that does not have any vested interest in the system. This comprises all non-Specialist, non-Leader, and non-Client operators. Associates maintain the lowest level of access privileges.

## User Stories

#### Specialist User Stories

- As a **Specialist**, I want to **browse pertinent projects** so I can **find out if I need to provide input**.
  - _Acceptance Criteria:_
    1. Ensure project dashboard exists
    2. Ensure each project can be viewed by specialty and niche
    3. Each project must have a list of specializations and niches defined
    5. Project listing in specialist project dashboard has an active edit/view hyperlink

- As a **Specialist**, I want to **open pertinent projects** so I can **read existing information about the project**.
  - _Acceptance Criteria:_ 
    1. Ensure project dashboard exists
    2. Ensure each project can be viewed by niche
    3. Ensure each project can be edited by specialty
    3. Provide an edit/view hyperlink as needed
    4. Open project project entries dashboard
    
- As a **Specialist**, I want to **edit pertinent projects** so I can **add numerical scoring and text notes to the project**.
  - _Acceptance Criteria:_
    1. Ensure project dashboard exists
    2. Ensure projects can be viewed by specialty and edited by niche
    3. Provide add/edit user notes button that is available only for input made by current user
    4. Ensure Notes and Score fields exists
    5. Autopopulate username, specialty, and nice.
    5. Provide an update/create button
    
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
    1. Ensure project dashbaord exists
    2. Leader role enables New Project button
    3. Project management console allows user to enter Title, Description, choose specialties, niches, clients, and limit access
    4. Ensure existence of create button
     
- As a **Leader**, I want to **edit projects** so I can **fix errors or update information**.
  - _Acceptance Criteria:_
    1. Ensure project dashboard exists
    2. Leader role enables edit for all projects
    4. Edit button links to project management console
    4. Ensure existence of update button
 
- As a **Leader**, I want to **view projects** so I can **track specialist changes**.
  - _Acceptance Criteria:_
    1.  Ensure project dashboard exists
    2.  Provide role based views of each project
    3.  Ensure all changes to any given project are logged in project entries
    4.  Ensure Project entires dashboard can filter by specialist, specialty, niche, and score.

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
    1. Ensure project dashboard exists
    2. Allow projects to have a client list
    2. Ensure project dahsbaord displays only client-related projects
    4. Ensure the existence of a view hyperlink for each project the client can view

<!--
- As a **Client**, I want to **view my project** so I can **read specialist input**.
  - Acceptance Criteria: 
-->

#### Associate User Stories

- As an **Associate**, I want to **view public project information** so I can **view scores of public projects**.
  - _Acceptance Criteria:_
    1. Ensure project dashboard exists
    2. Display only publically available project scores

- As an **Associate**, I want to **communicate with a leader** so I can **ask questions**.
  - _Acceptance Criteria:_
    1. Ensure project dashboard is available
    2. Display generic contact information


## Misuser Stories

#### Specialist Misuser Stories

- As a **Specialist _Misuser_**, I want to **open unauthorized projects** so I can **read information I'm not allowed to know**.
  - _Mitigation Criteria:_ 
    1. Ensure project dashboard uses user specialties to limit data presented
    2. Ensure each specialist account has a list of specialties
    3. Ensure each specialist account has a list of niches
    3. Specialists require authorization from a leader to change specialties and niches
    4. Project dashboard uses specialist profile role, specialties, and niches to check access
    5. Project dashboard only allows viewing if specialist and project share at least one specialty
    6. Project dashboard only allows editing of entries if specialist and project share at least one niche.

- As a **Specialist _Misuser_**, I want to **edit unauthorized projects** so I can **change other specialist input values**.
  - _Mitigation Criteria:_
    1. Ensure project dashboard uses user specific criteria to enable editing
    2. Ensure specialists can only edit project entries if they share a niche
    2. Entries created by current user are given an edit button
    3. Edit button allows user to change values on their input
    4. All changes to projects are tracked 

- As a **Specialist _Misuser_**, I want to **edit unauthorized projects** so I can **make changes without anyone knowing**.
  - _Mitigation Criteria:_
    1. Project and project entries dashboards both log all changes
    2. Ensure project dashboard displays logs hyperlink for leaders

<!--
- As a **Specialist _Misuser_**, I want to **edit unauthorized projects** so I can **provide inappropriate input**.
  - Mitigation Criteria: Implement white lists, regular expressions, and input sanitization
- As a **Specialist _Misuser_**, I want to **edit unauthorized projects** so I can **act like another user**.
  - Mitigation Criteria: Enforce user-based project editing
-->


#### Leader Misuser Stories

- As a **Leader _Misuser_**, I want to **edit projects** so I can **change specialist input without permission**.
  - _Mitigation Criteria:_
    1. Project dashboard allows leader to edit for all data
    2. All project changes are logged by the system
    3. All specialist input changes are reported to the specialist that created them

- As a **Leader _Misuser_**, I want to **edit project** so I can **delete input I don't like**.
  - _Mitigation Criteria:_
    1. Ensure project dashboard exists
    2. Ensure delete button for specialist input exists
    3. Clicking delete notifies specialist that input is to be deleted
    4. Ensure accept delete prompt exists
    5. Delete only occurs when Leader and Specialist accept delete

- As a **Leader _Misuser_**, I want to **delete projects** so I can **delete projects I don't like**.
  - _Mitigation Criteria:_
    1. Ensure project dashboard exists
    2. Ensure delete project function exists
    3. Ensure delete button exists for each project
    4. Delete button triggers notification to all other leaders that project is to be deleted
    5. Accept button on delete interface must be acted upon by another leader
    6. Two leaders accepting delete start a 30 day countdown to delete 

- As a **Leader _Misuser_**, I want to **edit the system** so I can **delete specialists I don't like**.
  - _Mitigation Criteria:_
    1. Ensure a specialist view interface exists
    2. Ensure a delete specialist button and function exist
    3. Delete button triggers notification to all other leaders that a specialist is to be deleted
    4. Accept button must be triggered by another leader to delete
    5. Delete starts a 30 day countdown to delete 

<!--
- As a **Leader _Misuser_**, I want to **change logging** so I can **make changes without anyone knowing**.
  - Mitigation Criteria: Enforce dual-leader logging changes
-->

#### Client Misuser Stories

- As a **Client _Misuser_**, I want to **edit my projects** so I can **change scoring**.
  - _Mitigation Criteria:_
    1. Ensure project dashboard exists
    2. Ensure that each project dashboard view requires a user role
    3. Ensure each project has a client list
    4. Ensure User role can only be changed by leader
    5. Client list can only be changed by Leader
    6. Project dashboard gets user role from user profile
    7. Project dahsboard checks client name
    8. If client name on project list, client can view
    9. Client cannot edit

- As a **Client _Misuser_**, I want to **view other projects** so I can **learn about my competition**.
  - _Mitigation Criteria:_
    1. Ensure project dashboard exists
    2. Ensure that each project dashboard view requires a user role
    3. Ensure each project has a client list
    4. User role can only be changed by Leaders
    5. Client list can only be changed by Leader
    6. Project dashboard gets user role from user profile
    7. Project dashboard checks client name
    8. If client name on project list, client can view
    9. Client cannot edit

#### Associate Misuser Stories

- As an **Associate**, I want to **view private project information** so I can **view scores of private projects**.
  - _Mitigation Criteria:_
  	1. Ensure project dashboard exists
  	2. Project dashboard checks user role
  	2. Ensure authenticated users must login
  	3. Ensure unauthenticated users are considered associates
  	3. If user role is not authenticated, only public project scores are displayed.
  	4. Display generic communication information
