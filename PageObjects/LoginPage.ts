import { Page, Locator } from '@playwright/test';
export class LoginPage {
    readonly page:Page;
    readonly emailTextBox: Locator;
    readonly passwordTextBox: Locator;
    readonly loginButton: Locator;

    constructor(page: Page) {
        this.page = page;
        this.emailTextBox = this.page.getByRole('textbox', { name: 'Email Address' });
        this.passwordTextBox = this.page.getByLabel('Password');
        this.loginButton = this.page.getByTestId('login-button');
    }

    async validLogin(email: string, password: string) {
        await this.emailTextBox.fill(email);
        await this.passwordTextBox.fill(password);
        await this.loginButton.click();
    }
}
