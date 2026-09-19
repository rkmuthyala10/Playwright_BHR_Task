import { Page, Locator } from '@playwright/test';

export class DashboardPage {
    readonly page: Page;
    readonly employeesLink: Locator;

    constructor(page: Page) {
        this.page = page;
        this.employeesLink = page.getByTestId('sideBar').getByRole('link', { name: 'Employees' });
    }

    async navigateToEmployeeHub() {
        await this.employeesLink.click();
    }


}