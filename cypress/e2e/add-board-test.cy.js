/// <reference types="Cypress" />

import { loginPage } from "../page_objects/loginPage";
import { addNewBoard } from "../page_objects/addNewBoard";
import { faker } from "@faker-js/faker";

describe("Add Board test", () => {
    before("Log into the App", () => {
    cy.visit("/login")
    loginPage.login(Cypress.env("testUserEmail"), Cypress.env("testUserPassword"));
    cy.url().should("not.include", "/login")
    });

    it("Add new Scrum Board", () => {
        cy.intercept({
            method: "POST",
            url: `${Cypress.env("apiUrl")}/boards`,
        }).as("addNewBoard");

        addNewBoard.createScrumBoard(faker.random.words(2));

        cy.wait("@addNewBoard").then((interception) => {
            expect(interception.response.statusCode).eq(201);
            expect(interception.response.statusMessage).eq("Created");

        cy.url().should("include", "/boards/");
        }); 
    });
});
