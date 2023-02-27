class LoginPage {

    get loginPageHeading() {
        return cy.get("h1");
    }
    
    get emailInputField() {
        return cy.get("input[type='email']");
    }

    get passwordInputField() {
        return cy.get("input[type='password']");
    }

    get loginButton() {
        return cy.get("button").first();
    }

    login(email, password) {
        this.emailInputField.type(email);
        this.passwordInputField.type(password);
        this.loginButton.click();
    }
};

export const loginPage = new LoginPage();
