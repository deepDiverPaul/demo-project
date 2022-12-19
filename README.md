# demo-project - sample of work

## Prerequisites

- this SPA demonstrates my implementation of a [Testtask](TASK.md)

- vuex is used for state-management and a http-client has been implemented

- api-endpoints exist for the environments mock and live. A switch between the both is possible using the env-var `VUE_APP_API_CLIENT` but is not used, because there is no actual backend.

## Observations

### form builder

- Use drag and drop toolbar for adding and removing items from the form. This could also be accomplished by buttons

## Improvements

- the ui is clearly a subject to improve

- styles can be centralized in the style-plugin

## Project setup

### Makefile

| Task                                                  | Command           |
| ----------------------------------------------------- | ----------------- |
| list commands                                         | `make`            |
| starts the dev-server (with live update) on port 8088 | `dev`             |
| stops the dev-server                                  | `dev-stop`        |
| restarts the dev-server                               | `dev-restart`     |
| remove docker volumes                                 | `dev-clean`       |
| build assets for production to `./dist/`              | `build`           |
| run production server on port 4127 using nginx        | `production`      |
| stop production server                                | `production-stop` |

### Yarn

| Task                                     | Command          |
| ---------------------------------------- | ---------------- |
| install dependencies                     | `yarn install`   |
| compiles and hot-reloads for development | `yarn serve`     |
| compiles and minifies for production     | `yarn build`     |
| run unit tests                           | `yarn test:unit` |
| run end-to-end tests                     | `yarn test:e2e`  |
| lints and fixes files                    | `yarn lint`      |


