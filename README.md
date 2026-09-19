# BrightHR Playwright Task
- Technical task for BrightHR, built using playwright with Typescript to create couple of new employees and verifies the same are displayed on Employee Hub Page.

## Test Scenarios
1. Log in to the BrightHR Sandbox-app Lite account.(Pre-requisite step implemented using custom fixture)
2. Navigate to the employee tab on the left-hand side of the panel and add an employee by filling in all the fields, including optional ones.
3. Add a second employee.
4. Verify both employees are visible in the Employee Hub.

Note : Employee firstname generated includes random number suffix to ensure repeated runs do not use teh same data to avoid conflicts.

## Data Driven
- Tests are data driven using the .ts file 
- Base URL and login details derived from .env file

## Project Structure
data/              Test data for the employees to be created and asserted
fixtures/          Shared Playwright fixture that user logs in and navigates to Employee Hub Page
PageObjects/       Page Object Model classes including Page Object Manager class
tests/             Playwright test spec files
.github/workflows/ GitHub Actions workflow

## Prerequisites
- A BrightHR Lite account with access to the Employee Hub

## Executing Tests
Tests can be run using below commands as requried. Usage of run commands created in package.json :

- npm run BrightHRTask //  `To run in headless mode on all defined browsers`
- npm run BrightHRTask:headed // `To run in headed mode on all defined browsers`
- npm run BrightHRTask:debug // `To run in debug mode`
- npm run BrightHRTask:report // `To run a report post execution if not opened automatically`

## Continuous Integration
- GitHub Workflow Actions is used to build and run the tests in CI environment.
- Configure below repository secrets in GitHub settings.

|     Secret     |            Value               |
|----------------|--------------------------------|
| `BHR_BASE_URL` | Bright HR Sandbox URL          |
| `BHR_USERNAME` | BrightHR account email address |
| `BHR_PASSWORD` | BrightHR account password      |