/// <reference types="Cypress" />

import { loginPage } from "../page_objects/loginPage";

describe("Login test", () => {
    beforeEach("Visit Login page", () => {
        cy.visit("/login")
        cy.url().should("include", "/login");

        loginPage.loginPageHeading
        .should("be.visible")
        .and("have.text", "Log in with your existing account")
        .and("have.css", "color", "rgb(62, 139, 117)");
    });

    it("Login with a valid Data", () => {
        cy.intercept({
            method: "POST",
            url: `${Cypress.env("apiUrl")}/login`,
        }).as("successfullLogin");

        cy.intercept({
            method: "GET",
            url: `${Cypress.env("apiUrl")}/my-organizations`,
          }).as("getMyOrganizations");
      
          loginPage.login(Cypress.env("testUserEmail"), Cypress.env("testUserPassword"));
        
          cy.wait("@successfullLogin").then((interception) => {
            expect(interception.response.statusCode).eq(200);
            expect(interception.response.body.token).to.exist;
          });
      
          cy.wait("@getMyOrganizations").then((interception) => {
            expect(interception.response.statusCode).eq(200);
          });
      
          cy.url().should("include", "/my-organizations");
    });
});
