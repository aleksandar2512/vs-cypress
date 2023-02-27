/// <reference types="Cypress" />

import { loginPage } from "../page_objects/loginPage";
import { deleteBoard } from "../page_objects/deleteBoard";

describe("Delete Board test", () => {
    before("Log into the App", () => {
    cy.visit("/login")
    loginPage.login(Cypress.env("testUserEmail"), Cypress.env("testUserPassword"));
    cy.url().should("not.include", "/login")
    });

    it("Delete Board", () => {
        cy.intercept({
        method: "GET",
        url: `${Cypress.env("apiUrl")}/boards/*/trash-items`,
        }).as("deleteBoard");

        deleteBoard.deleteBoard();

        cy.wait("@deleteBoard").then((interception) => {
        expect(interception.response.statusCode).eq(200);
        expect(interception.response.statusMessage).eq("OK");
        });
    });
});
