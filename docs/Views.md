# Views

There will be a number of primary views:

1. Login
2. Specialist
3. Leader
4. Client
5. Associate
6. Project
7. New Project
8. New User
8. New Specialist
9. New Client

## Login

The login view will present a username and password field and use a submit button.

## Specialist

The specialist view will list all of the projects available to the specialist. These projects are gathered via the specialty and niche associations of the specialist. If the project and the specialist have the same specialization, the project is available to view. If the project and the specialist have the same niche, the project is available to edit.

## Leader

The leader view will display all existing projects. All projects will be available for editing. All edits will be logged. The view will also provide a _new project_ button that will load the _new project_ view where details about the project can be entered. Each new project will be given a link to a project details model.

## Client

The client view will display projects available to clients. All projects with the client affiliated will be available for the client to view based on the client permissions.

## Associate

The associate view will present contact details such that the associate can ask for information.

## Project

The project view will display information about the project contingent on the role of the viewer. A client will see specific information where a leader will see all information.

## New Project

The new project view will provide a name and description text field, followed by a specialty list (contingent on available specialties), a niche list (contingent on available niches), a client list (contingent on available clients), a denial list (contingent on valid users), and will link to a new Project Entry model.

## New user

The new user view will allow a leader to add a user. It will contain first, last, middle, email, and phone fields.

## New Specialist

The new specialist view will allow a leader to add a specialist. a user list dropdown, a specialty list dropdown, a niche list dropdown.

## New Client

The new client view will allow a leader to add a new client. It will contain a user dropdown.
