import { Page, Locator } from '@playwright/test';

export class EmployeeHubPage {
    readonly page: Page;
    readonly addEmployeeBtn: Locator;
    readonly addAnotherEmployeeBtn: Locator;
    readonly firstName: Locator;
    readonly lastName: Locator;
    readonly sendRegEmailCheck: Locator;
    readonly emailAddress: Locator;
    readonly phoneNumber: Locator;
    readonly startDateField: Locator;
    readonly datePicker: Locator;
    readonly jobTitle: Locator;
    readonly saveNewEmployee: Locator;
    readonly closeModalBtn: Locator;

    constructor(page: Page) {
        this.page = page;
        this.addEmployeeBtn = this.page.getByRole('button', { name: 'Add employee' });
        this.addAnotherEmployeeBtn = this.page.getByRole('button', { name: 'Add another employee' });
        this.firstName = this.page.getByRole('textbox', { name: 'First name' });
        this.lastName = this.page.getByRole('textbox', { name: 'Last name' });
        this.emailAddress = this.page.getByRole('textbox', { name: 'Email address' });
        this.sendRegEmailCheck = this.page.getByText('Send registration email');
        this.phoneNumber = this.page.getByRole('textbox', { name: 'Phone number (optional)' });
        this.startDateField = this.page.getByRole('textbox', { name: 'Start Date (optional)' });
        this.datePicker = this.page.locator("div[aria-current='date']");
        this.jobTitle = this.page.getByRole('textbox', { name: 'Job title (optional)' });
        this.saveNewEmployee = this.page.getByText('Save new employee');
        this.closeModalBtn = this.page.getByRole('button', { name: 'Close modal' });

    }

    async addEmployee() {
        await this.addEmployeeBtn.click();
    }

    async addAnotherEmployee() {
        await this.addAnotherEmployeeBtn.click();
    }


    async createEmployee(firstName: string, lastName: string, email: string, phone: string, jobTitle: string) {
        await this.firstName.fill(firstName);
        await this.lastName.fill(lastName);
        await this.emailAddress.fill(email);
        await this.sendRegEmailCheck.check();
        await this.phoneNumber.fill(phone);
        await this.startDateField.click();
        await this.datePicker.click(); // Date picker automatically picks the current date as start date.
        await this.jobTitle.fill(jobTitle);
        await this.saveNewEmployee.click();
    }

    async closeEmployeeCreationForm() {
        await this.closeModalBtn.click();
    }


    employeeByName(firstName: string, lastName: string): Locator {
        const employeeLocator = this.page.locator('h1.text-base').filter({ hasText: firstName + ' ' + lastName });
        return employeeLocator;
    }
}