class DeleteBoard {

    get boardList() {
        return cy.get(".vs-c-list--boards");
    }

    get board() {
        return this.boardList.find("li").eq(-2);
    }

    get projectMenu() {
        return cy.get(".vs-l-project__menu");
    }

    get listItems() {
        return this.projectMenu.find("ul");
    }

    get trashIcon() {
        return this.listItems.find("li").eq(-2);
    }

    deleteBoard() {
        this.board.should("exist").and("be.hidden").and("have.class", "vs-c-list__item-board");
        this.board.click();
        this.projectMenu.should("be.visible").and("have.class", "vs-l-project__menu");
        this.listItems.should("be.visible").and("have.class", "vs-c-list");
        this.trashIcon.should("exist").and("be.visible");
        this.trashIcon.click();
    };
};

export const deleteBoard = new DeleteBoard();
