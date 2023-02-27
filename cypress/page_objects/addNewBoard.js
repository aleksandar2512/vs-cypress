class AddBoard {
    
    get newBoardWindow() {
        return cy.get(".vs-c-modal");
    }

    get newBoardCancelButton() {
        return this.newBoardWindow.find("button").eq(-2);
    }

    get newBoardNextButton() {
        return this.newBoardWindow.find("button").eq(-1);
    }

    get newBoardTitle() {
        return this.newBoardWindow.find("h2");
    }

    get newBoardOrganizationsInputField() {
        return this.newBoardWindow.find("input").first();
    }

    get newBoardBoardTitleInputField() {
        return this.newBoardWindow.find("input").last();
    }

    get dotPagination() {
        return this.newBoardWindow.find("ul").children();
    }

    get boardTypeWindow() {
        return cy.get(".vs-c-modal");
    }

    get boardTypeTitle() {
        return this.boardTypeWindow.find("h2");
    }

    get boardTypeScrumRadioCheck() {
        return this.boardTypeWindow.find(".vs-c-radio-check").first();
    }

    get boardTypeKanbanRadioCheck() {
        return this.boardTypeWindow.find(".vs-c-radio-check").last();
    }

    get boardTypeScrumDescription() {
        return this.boardTypeWindow.find(".new-board-description").first();
    }

    get boardTypeKanbanDescription() {
        return this.boardTypeWindow.find(".new-board-description").last();
    }

    get boardTypePreviousButton() {
        return this.boardTypeWindow.find("button").eq(-2);
    }

    get boardTypeNextButton() {
        return this.boardTypeWindow.find("button").eq(-1);
    }

    get importWindow() {
        return cy.get (".vs-c-modal");
    }

    get importTitle() {
        return this.importWindow.find("h2");
    }

    get importConfiguartionFromInputField() {
        return this.importWindow.find("input").first();
    }

    get importTeamMembersFromInputField() {
        return this.importWindow.find("input").last();
    }

    get importPreviousButton() {
        return this.importWindow.find("button").eq(-2);
    }

    get importNextButton() {
        return this.importWindow.find("button").eq(-1);
    }

    get configuartionFromDropdownIcon() {
        return this.importConfiguartionFromInputField.find(".el-input__icon");
    }

    get configuartionFromDropdownList() {
        return this.importConfiguartionFromInputField.find(".el-select-dropdown__list")
    }

    get configuartionFromDropdownItem() {
        return this.configuartionFromDropdownList.find("li").first();
    }

    get teamMembersFromDropdownIcon() {
        return this.importTeamMembersFromInputField.find(".el-input__icon");
    }

    get teamMembersFromDropdownList() {
        return this.importTeamMembersFromInputField.find(".el-select-dropdown__list")
    }

    get teamMembersFromDropdownItem() {
        return this.teamMembersFromDropdownList.find("li").first();
    }

    get boardLogoWindow() {
        return cy.get (".vs-c-modal");
    }

    get boardLogoTitle() {
        return this.boardLogoWindow.find("h2");
    }

    get boardLogoParagraf() {
        return this.boardLogoWindow.find("p").last();
    }

    get boardLogoPreviousButton() {
        return this.boardLogoWindow.find("button").eq(-2);
    }

    get boardLogoNextButton() {
        return this.boardLogoWindow.find("button").eq(-1);
    }

    get finishBoardWindow() {
        return cy.get (".vs-c-modal");
    }

    get finishBoardTitle() {
        return this.finishBoardWindow.find("h2");
    }

    get finishBoardParagraf() {
        return this.finishBoardWindow.find("p");
    }

    get finishBoardPreviousButton() {
        return this.finishBoardWindow.find("button").eq(-2);
    }

    get finishBoardFinishButton() {
        return this.finishBoardWindow.find("button").eq(-1);
    }

    get sidebar() {
        return cy.get(".vb-content");
    }

    get myOrganization() {
        return this.sidebar.find(".vs-c-list > li").eq(-2);
    }

    get addNewBoardItem() {
        return this.myOrganization.find("a");
    }

    get addNewBoard() {
        return cy.get(".vs-c-organization-boards__item--add-new");
    }

    get orgContent() {
        return cy.get(".vs-c-my-organization__content");
    }

    get addNewBoard() {
        return this.orgContent.find("li").last();
    }

    createScrumBoard(title) {
        this.orgContent.should("exist").and("be.visible").and("have.class", "vs-c-my-organization__content");
        this.addNewBoard.click();
        this.newBoardTitle.should("exist").and("be.visible").and("have.class", "vs-c-modal__title");
        this.newBoardBoardTitleInputField.should("be.visible").and("be.empty");
        this.newBoardBoardTitleInputField.type(title);
        this.newBoardNextButton.click();
        this.boardTypeTitle.should("exist").and("be.visible").and("have.class", "vs-c-modal__title");
        this.boardTypeScrumDescription.should("exist").and("be.visible");
        this.boardTypeScrumRadioCheck.click();
        this.boardTypeNextButton.click();
        this.importConfiguartionFromInputField.should("exist").and("have.class", "el-input__inner");
        this.importTeamMembersFromInputField.should("exist").and("have.class", "el-input__inner");
        this.importNextButton.click();
        this.boardLogoNextButton.click();
        this.finishBoardFinishButton.click();
    };

    createKanbanBoard(title) {
        this.orgContent.should("exist").and("be.visible").and("have.class", "vs-c-my-organization__content");
        this.addNewBoard.click();
        this.newBoardTitle.should("exist").and("be.visible").and("have.class", "vs-c-modal__title");
        this.newBoardBoardTitleInputField.should("be.visible").and("be.empty");
        this.newBoardBoardTitleInputField.type(title);
        this.newBoardNextButton.click();
        this.boardTypeTitle.should("exist").and("be.visible").and("have.class", "vs-c-modal__title");
        this.boardTypeKanbanDescription.should("exist").and("be.visible");
        this.boardTypeKanbanRadioCheck.click();
        this.boardTypeNextButton.click();
        this.importConfiguartionFromInputField.should("exist").and("have.class", "el-input__inner");
        this.importTeamMembersFromInputField.should("exist").and("have.class", "el-input__inner");
        this.importNextButton.click();
        this.boardLogoNextButton.click();
        this.finishBoardFinishButton.click();
    };
};

export const addNewBoard = new AddBoard();
