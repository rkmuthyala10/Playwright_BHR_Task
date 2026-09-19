import { Page } from '@playwright/test'

export class IndexPage {
    readonly page: Page;

    constructor(page: Page) {
        this.page = page;
    }
    // Open the Index Page
    async openIndexPage() {
        await this.page.goto("/lite");
    }
    // Navigate to the Login Page
    async navigateToLoginPage() {
        await this.page.getByRole('link', { name: 'Log in' }).click();
    }
}
