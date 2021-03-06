## TTS Angular Project | [Live Demo](https://jordanmor.github.io/tts-angular-project/)

**Short screencast of my completed Angular Lab assignment**  
<em>Coding friends list displayed using a service class, dependency injection, observables and a delay function that simulates a long-running call to get data from a server. A template-based form with validation is used to add a new person to the list of coding friends when the form is submitted. A reactive form with validation is used to update a user's profile information and send the updated JSON data to a mock server.</em>  

![Angular Lab Screen Shot](angular-screencast.gif)

**IMPORTANT PROJECT NOTE**: 
- This Angular project has been moved here to it's own repository from a TTS JavaScript assignments repo for better demonstration purposes.
- **Additional features** have been added including: 
  - template-driven form validation
  - reactive form validation, including a custom email validator 
  - a modal component and modal service shared by using dependency injection
  - layout and styling improvements
- For a history of the previous commits before moving the project to this current repo, please refer to [tts-js-assignments](https://github.com/jordanmor/tts-js-assignments). Please note that the lab was originally built as one of many exercises, so the past commits referring to this lab are interspersed with commits from other assignments.

---

### Angular Fundamentals - Routing, Services, Dependency Injection, Observables, Forms and Animation

Assignment Title: Angular Services Lab-Homework Part 1 (Day 19 & 20)  
Assigned: 8/15/19 - 8/16/19 (Day 19 & 20 Bootcamp - Week 4) 

**Lab/Homework Instructions**   
Build a simple Angular app using routing, services, dependency injection, observables, forms and animation.   
- Create several components, modify the html templates to display something other than the default message, create a route for each new component and add a tag/link that goes to the page.
- Create and style pages links, either as horizontal or vertical items so they resemble a menu
- Make one of the components serve as the application default. Give it some additional "Welcome to the site" verbiage and make it the default route in the routing system.
- Create a simple Person class in the src/app folder. Some applications would also create this in a sub-folder called "models" or "domain-classes", it's entirely up to you.
- Generate a service class. Use the generate command option to NOT create a test file.
  - **NOTE** - I used the command ng g s --skipTests=true
- Display a list of people using the service class, dependency injection, and Observables.
- Add the delay function provided below to the service class to use inside the component's getPerson() method in order to simulate the process of Observables with a long web delay
  ```
  async delay(ms: number) {
    await new Promise(resolve => 
      setTimeout(()=>resolve(), ms));
  }
  ```
- In the ongoing project, create a component for entering new people. Use the template-based approach for wiring up a person model object.
- To simulate saving simply either display an alert when the form is submitted or console.log the values.
- Create another editing component, but use the reactive model for building the form.
- Create a class that has several properties, then create an editing component for that class. Use the FormBuilder to shorten the creation of the form.
- Create a button that is not part of the form. Code the button so that it will change the data in the model when pressed. With the form open, press the button to ensure that the data is refreshed on the form.
- In the AppModule, import the BrowserAnimationsModule.
- Create a new component simply to test the process to create animations. In the new component import the animation functions you will need (trigger, state, style, animate, transition).
- Add the animations property in the @Component declaration, create an animation to transition between to different states on a small area of the screen, such as a small div. Control the state via a simple button.
- Add logic to create more states via an enum - at least 3. Change the logic to switch states; create separate buttons for each state such that clicking the button will set the state property.  

---

### Installation Instructions

1. If you do not already have the Angular CLI installed, then install it globally using the following command:  
`npm install -g @angular/cli`

2. git clone `https://github.com/jordanmor/tts-angular-project`

3. Go to the workspace folder `tts-angular-project`

4. Run `npm install`

### Usage Instructions

**Run the application**

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.  

You can optionally launch the server and automatically open a browser window by using the CLI command `ng serve --open`

**Build**

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

**Build live demo for GitHub**  

Run `ng build --prod --output-path docs --base-href /tts-angular-project/` to build this project for hosting on GitHub Pages. The build artifacts will be stored in the `docs/` directory. Make a duplicate of the `index.html` file in the `docs` directory and rename it to `404.html`. Make sure to keep the `index.html` file.

Commit the `docs` directory to your GitHub repository named `tts-angular-project`. Go to the repo's settings and select the `master branch/docs` folder as the source of your GitHub page.

**Additional information**  

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 8.2.0.
