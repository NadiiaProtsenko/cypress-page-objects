/// <reference types="cypress" />

export default class BasePage {
    constructor() {
        this.baseUrl = 'https://www.saucedemo.com/';
    }

    open(url) {
        cy.visit(`${this.baseUrl}${url}`);
    }

}