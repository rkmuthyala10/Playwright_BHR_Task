import { Page } from '@playwright/test';
import { DashboardPage } from './DashboardPage';
import { LoginPage } from './LoginPage';
import { IndexPage } from './IndexPage';
import { EmployeeHubPage } from './EmployeeHubPage';

export class PageManager {
    readonly page: Page;
    readonly indexPage: IndexPage;
    readonly loginPage: LoginPage;
    readonly dashBoardPage: DashboardPage;
    readonly employeeHubPage: EmployeeHubPage;

    constructor(page: Page) {
        // Initialize page objects here
        this.page = page;
        this.indexPage = new IndexPage(this.page);
        this.loginPage = new LoginPage(this.page);
        this.dashBoardPage = new DashboardPage(this.page);
        this.employeeHubPage = new EmployeeHubPage(this.page);
    }

    getIndexPage() {
        return this.indexPage;
    }

    getLoginPage() {
        return this.loginPage;
    }

    getDashboardPage() {
        return this.dashBoardPage;
    }

    getEmployeeHubPage() {
        return this.employeeHubPage;
    }
}