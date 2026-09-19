import { test, expect } from '../fixtures/base-test';
import { employeeData } from '../data/employee';

/*
 * Test suite to create multiple employees and assert their presence
 */

test('Create and validate multiple employees', async ({ page, employeeHubPage }) => {

  /*
  * Checking the user successfully logged in and landed on the Employee Hub Page using fixture.
  */
  await test.step('Verify user successfully Logged in navigated to the Employee Hub Page', async () => {
    await expect(page).toHaveTitle(/Employee Hub - BrightHR/);
  });

  /*
  * Opening the employee creation form.
  */
  await test.step('Employee Creation Form Opening', async () => {
    await employeeHubPage.addEmployee();
  });

  /*
   * Adding the Employees based on test data file(employee.ts).
   * Multiple employees can be added using this loop.
   */
  let counter = 1;
  for (const employee of employeeData) {
    await test.step(`Adding Employee ${counter++} from Employee Hub Page`, async () => {
      await employeeHubPage.createEmployee(employee.firstName, employee.lastName, employee.email, employee.phoneNumber, employee.jobTitle);
      await employeeHubPage.addAnotherEmployee();
    });
  }

  /*
  * Closing the employee creation Form.
  */
  await test.step('Employee Creation Form Closing', async () => {
    await employeeHubPage.closeEmployeeCreationForm();
  });

  /*
  * Asserting the added employees on the Employee Hub Page
  */
  await test.step(`Asserting/Validating added Employees on the Employee Hub Page`, async () => {
    for (const employee of employeeData) {
      const empCheck = employeeHubPage.employeeByName(employee.firstName, employee.lastName);
      await expect(empCheck).toBeVisible();
    }
  });
});