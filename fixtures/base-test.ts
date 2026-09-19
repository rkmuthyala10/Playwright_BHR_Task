import { test as baseTestFixture } from '@playwright/test';
import { PageManager } from '../PageObjects/PageManager';
import { EmployeeHubPage } from '../PageObjects/EmployeeHubPage';

type Fixtures = {
  employeeHubPage: EmployeeHubPage;
};

export const test = baseTestFixture.extend<Fixtures>({
  // Login successfully and navigate to the Employee Hub page before the test actual test runs.
  employeeHubPage: async ({ page }, use) => {
    const username = process.env.BHR_USERNAME!;
    const password = process.env.BHR_PASSWORD!;

    const pageManager = new PageManager(page);
    const indexPage = pageManager.getIndexPage();
    const loginPage = pageManager.getLoginPage();
    const dashBoardPage = pageManager.getDashboardPage();
    const employeeHubPage = pageManager.getEmployeeHubPage();

    await indexPage.openIndexPage();
    await indexPage.navigateToLoginPage();
    await loginPage.validLogin(username, password);
    await dashBoardPage.navigateToEmployeeHub();

    await use(employeeHubPage);

  },
});

export { expect } from '@playwright/test';


