# Task

Please organize implementation as it is supposed to be a production-ready code.

*Acronyms used:*

*BE - back-end, FE - front-end, DB - database*

We will create a questionnaire builder application with Vue, which will have an interaction with a simulated BE API and some custom business logic.

*Bonuses in each task are optional for implementation. Please implement any bonuses if you wish to show more of your skills.*

## Specifications

Create a Vue application with the use of Vue CLI. We implement only the FE interface, without BE API.

We assume that implementation is going to be integrated with an already existing BE. There will be two main domains in the App: Form builder and Analytics.

*Bonus*: use Vue 3 with Vue composition API or use V2 with the Vue composition API plugin. **Form builder feature**

On FE we create a Form builder interface, that produces a JSON representation of a form to be saved in DB on BE.

There is a JSON example to work with at `public/static/data/forms.json`. JSON has a tree structure, each of the JSON entries might have children elements.

In this test task, we are working on new FE features to be integrated with BE.

-   initial JSON loading (simulated HTTP requests, return from file), the form rendering
-   work with form functionality, such as drag and drop, changing question list parent, adding a new element, adding new children elements
-   open existing JSON for rendering and editing
-   saving form from a Form builder by sending JSON to BE (simulated)

*Bonus*: add the ability to copy an item and place a copy under copied item. Copy should contain all the copied item children with new unique UUIDs.

**Form conduction feature**

We need to be able to get a JSON structure to render a questionnaire form on FE and save it back with answers.

See attached image below as an example of what it looks like on FE.

There is a JSON example to work with at `public/static/data/forms.json`. JSON has a tree structure, each of the JSON entries might have children elements.

*Note*: The form conduction interface has a flat structure, items are rendered one under another.

-   initial JSON loading (simulated HTTP requests, return from file), the form rendering
-   allow a user to select yes, no, n/a answer and save it to JSON
-   send answered json form back to BE (simulated)

*Bonus*: add a question-answer validation - required answer. If not all questions are answered, output an error message and disable the form sending button.

**BE API endpoints definition for a simulation**

-   /form POST - save initial Form json from a client-side form builder.
-   /form/:id GET - get a saved Form json by id
-   /questionnaire POST - save Form with answers

When loading JSON to work with on FE, please implement models in Typescript representing items in JSON form (f.e. Form, Section, Item, Question, etc).

Please implement some services and/or use Vuex to manage form builder and conduction form state, or use Vue composition API hooks.

Please design FE code in a manner that is easy to add a new question type (f.e. checkbox, text).

*Bonus*: add a few Unit (Jest) or e2e (Cypress) tests to test your interface logic.

**Technical specifications**

Front-end: Javascript ES6+, Vue, Vue CLI, Vuex, Vue composition API, Typescript

CSS: SCSS, Tailwind CSS, Bulma CSS, BEM (<https://getbem.com>)

Testing: Jest, Cypress

*Bonus Infrastructure*: as a bonus, you might wrap the application in Docker. Please add a docker-compose config to run your application as a Docker container with Node inside.

It should work on Mac or Linux.
