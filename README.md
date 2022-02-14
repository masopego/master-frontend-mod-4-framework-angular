# Master Frontend Module 4: Framework - Angular 🔥🔥🔥

## KiwiCode App 🥝🥝🥝

In this exercise you practice:

- CLI to create components and services.
- Add Angular Material to the project.
- Design of the complete layout of an application.
- Programming a service to manage the state of the application.
- Service injection.
- routing.
- form

### Statement ✨ ✨

1. Create a new Angular project with routing and scss styles.

2. Add Angular Material: https://material.angular.io/guide/getting-started. (This point is better to do as soon as you start than once the mini-application is finished).

3. Create the necessary components to create the layout described below. You will have layout components (public header, private header, footer, public menu, private menu…) and routed components (the home page, the login page, the about page, the gallery page…)
This app will have 2 menus. A public menu that will be shown when the user has not yet logged in and a private menu that will be shown when the user has logged in.

Public menu links 📢 :

  - Home => Takes you to the welcome page of the application
  - Login => Takes you to a login form
  - About => Takes you to the “About” page

Private menu links 🔒 :

  - dashboard
  - Gallery
  - CRUD
  - profile


A logo and the name of the website should appear in the header and some static content in the footer.

4. Configure the routing to assign a url to each of the 7 menu pages. You can show (for a while) the two menus simultaneously on the screen to check that they work.

The components do not yet have any content. You don't have to program them. At this point it is enough that they exist and their content is displayed by default: 'xxxxxx works'

5. Create a login form with 2 fields: username and password. Put validations and error messages. When submitting the form, the component will call the login() method of the service described in the next point.

6. Create an Auth service that handles state related to user authentication. This service should offer four methods:

- login({username: string, password: string}): boolean
- logout(): void
- isLogged(): boolean
- getUsername(): string

The login method will return true for the valid combination:

`{
    username = 'master8@lemoncode.net',
    password: '12345678' 
}` 

For all other combinations it will return false. (A simple if is enough for this login simulation). If the valid combination that I suggest does not meet the validations of your login form, you can use any other valid combination that suits your case.

7. CHALLENGE. Adds persistence to the authentication state by saving the state to localstorage.

8. Modify the login component so that if when calling the login service, the latter returns true, the component redirects the user to the dashboard.

9. Make it only show the public menu if the user is not logged in and the private menu if the user is logged in.

10. Add an exit button in the header of the web that is only shown if the user is logged in

11. Also in the header, and only when the user is logged in, it shows the user's username.

### CHALLENGE: Using RxJs ✨ ✨

1. Modify the login() method of the service from the first exercise so that it returns the response asynchronously in an observable.
The service would look like this:

- login({username: string, password: string}): Observable

2. Adapt the login component.

3. Simulates a delay in the login response

4. Put an indicator (a loading gif) in the login form that is displayed when you hit the submit button and disappears when the login method has issued its response.
