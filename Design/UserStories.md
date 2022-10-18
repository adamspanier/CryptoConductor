
# User and Misuser Stories

### Overview

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

### User Stories

#### Specialist User Stories
- As a **Specialist**, I want to **browse pertinent projects** so I can **find out if I need to provide input**.
- As a **Specialist**, I want to **open pertinent projects** so I can **read existing information about the project**.
- As a **Specialist**, I want to **edit pertinent projects** so I can **add numerical scoring and text notes to the project**.
- As a **Specialist**, I want to **edit pertinent projects** so I can **change my previous input in a given project**.
- As a **Specialist**, I want to **view pertinent project scores** so I can **determine how my input affected the overall score**.
- As a **Specialist**, I want to **view pertinent projects** so I can **see what other specialists have added**.
- As a **Specialist**, I want to **view pertinent projects** so I can **ask other specialists questions about their input**.

#### Leader User Stories
- As a **Leader**, I want to **create new projects** so I can **start the scoring process**.
- As a **Leader**, I want to **edit projects** so I can **fix errors or update information**.
- As a **Leader**, I want to **view projects** so I can **track specialist scoring changes**.
- As a **Leader**, I want to **view projects** so I can **track specialist participation**.
- As a **Leader**, I want to **create automated reports** so I can **determine regular reporting criteria**.
- As a **Leader**, I want to **receive automated reports** so I can **track overall changes in the system**.
- As a **Leader**, I want to **limit project access** so I can **choose which specialists can open and edit**.
- As a **Leader**, I want to **add new specialists** so I can **have then provide input**.
- As a **Leader**, I want to **add new clients** so I can **let them see their progress**.
- As a **Leader**, I want to **add new Associates** so I can **allow them to communcate with users**.

#### Client User Stories
- As a **Client**, I want to **view my project** so I can **check on scoring progress**.
- As a **Client**, I want to **view my project** so I can **read specialist input**.

#### Associate User Stories
- As an **Associate**, I want to **communicate with a leader** so I can **ask questions**.

### Misuser Stories

#### Specialist Misuser Stories
- As a **Specialist _Misuser_**, I want to **open unauthorized projects** so I can **read information I'm not allowed to know**.
- As a **Specialist _Misuser_**, I want to **edit unauthorized projects** so I can **change other specialist input values**.
- As a **Specialist _Misuser_**, I want to **edit unauthorized projects** so I can **provide inappropriate input**.
- As a **Specialist _Misuser_**, I want to **edit unauthorized projects** so I can **act like another user**.
- As a **Specialist _Misuser_**, I want to **edit unauthorized projects** so I can **make changes without anyone knowing**.


#### Leader Misuser Stories
- As a **Leader _Misuser_**, I want to **edit project** so I can **change specialist input without permission**.
- As a **Leader _Misuser_**, I want to **edit project** so I can **delete input I don't like**.
- As a **Leader _Misuser_**, I want to **delete projects** so I can **delete projects I don't like**.
- As a **Leader _Misuser_**, I want to **edit the system** so I can **delete specialists I don't like**.
- As a **Leader _Misuser_**, I want to **change logging** so I can **make changes without anyone knowing**.

#### Client Misuser Stories
- As a **Client _Misuser_**, I want to **edit projects** so I can **change scoring**.
- As a **Client _Misuser_**, I want to **edit projects** so I can **change text input**.

#### Associate Misuser Stories
- As an **Associate _Misuser_**, I want to **view projects** so I can **find out information that I shouldn't know**.
