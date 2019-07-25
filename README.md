# ADOGTION

## Description

Small app for conect animal shelter with users that want adopt a new ped.
This app have two differents users:
    - Regular User
    - Animal Shelter
code by: Jairo Varela and Pol Ribas for Ironhack WEV-DEV Bootcamp
 
## User Stories

- **404** - As a user I want to see a nice 404 page when I go to a page that doesn’t exist so that I know it was my fault 
- **500** - As a user I want to see a nice error page when the super team screws it up so that I know that is not my fault
- **homepage** - As a user I want to be able to access the homepage so that I see what the app is about and login and signup
- **sign up** - As a user I want to sign up on the webpage so that I can see all the events that I could attend
- **login** - As a user I want to be able to log in on the webpage so that I can get back to my account
- **logout** - As a user I want to be able to log out from the webpage so that I can make sure no one will access my account
- **events list** - As a user I want to see all the events available so that I can choose which ones I want to attend
- **events create** - As a user I want to create an event so that I can invite others to attend
- **events detail** - As a user I want to see the event details and attendee list of one event so that I can decide if I want to attend 
- **event attend** - As a user I want to be able to attend to event so that the organizers can count me in

## Backlog

List of other features outside of the MVPs scope

User profile:
- see my profile
- upload my profile picture
- see other users profile
- list of events created by the user
- list events the user is attending

Geo Location:
- add geolocation to events when creating
- show event in a map in event detail page
- show all events in a map in the event list page

Homepage
- ...


## ROUTES:

-isLoggedIn (access to all the application, except signup and login view)
-isNotLoggedIN (only access to signUp and LogIn. May include backlog to landingPage)

 SignUp, Homepage

- splashScreen
- signUp
- logIn
- userFeed (only available for Regular User)
- shelterFeed (only available for Animal Shelter)
- 
- winScreen

-Authorization and Authentication for both users.
-Password encryption
Views:
- Landing Page
- Login & Signup
- (Only for Regular User) -> User feed (settings, messages/notifications, filter, perfil)
- (Only for Animal Shelter) -> User feed (settings, messages/notifications, new adoptetive dog, corporative perfil)
Models

- GET / 
  - renders the homepage
- GET /auth/signup
  - redirects to / if user logged in
  - renders the signup form (with flash msg)
- POST /auth/signup
  - redirects to / if user logged in
  - body:
    - username
    - email
    - password
- GET /auth/login
  - redirects to / if user logged in
  - renders the login form (with flash msg)
- POST /auth/login
  - redirects to / if user logged in
  - body:
    - username
    - password
- POST /auth/logout
  - body: (empty)

- GET /events
  - renders the event list + the create form
- POST /events/create 
  - redirects to / if user is anonymous
  - body: 
    - name
    - date
    - location
    - description
- GET /events/:id
  - renders the event detail page
  - includes the list of attendees
  - attend button if user not attending yet
- POST /events/:id/attend 
  - redirects to / if user is anonymous
  - body: (empty - the user is already stored in the session)


## Models

- Regular User by name 'User'
  - username (Unique)
  - name -> non required
  - surname -> non required
  - password
  - age -> non required
  - ocupation -> non required
  - civilStatus -> non required
  - phone 
  - email
  - city -> non required
  - Array -> Notes Objectid
  
- Animal Shelter bt name 'Shelter'
  - CorporativeName (Unique)
  - password
  - phone
  - email
  - webSite -> non required
  - Address
  - Array -> ObjectId from Dog
  - Array -> Notes Objectid

- Dog by name 'Dog'
  - name
  - breed
  - size (enum: [small, medium, large, super large])
  - age (String -> aprox or exact) -> non required
  - image (url)
  - state (enum: [Like, Match, Accepted, Adopted])
  
- Notifications by name 'Notes'
  - dogId -> ObjectId
  - message String
  
## States y States Transitions

-isLoggedIn (access to all the application, except signup and login view)
-isNotLoggedIN (only access to signUp and LogIn. May include backlog to landingPage)

## Links

### Trello

[Link to your trello board](https://trello.com) or picture of your physical board

### Git

The url to your repository and to your deployed project

[Repository Link](https://github.com/PolRibas/adogtion-jairoVarela-polRibas-ironhack)

### Slides

The url to your presentation slides

[Slides Link](http://slides.com)