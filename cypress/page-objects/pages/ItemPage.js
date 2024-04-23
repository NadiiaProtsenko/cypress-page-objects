/// <reference types="cypress" />
import LoginPage from "./LoginPage";
import BasePage from "./BasePage";

import userData from '../../fixtures/userData.json'

class ItemPage extends BasePage {

    open() {
        super.open('');
        LoginPage.login(userData.userNames.correctUser, userData.passwords.correctPassword);
        this.getItemByName('Sauce Labs Bike Light').click();
    }

    get itemImage() {
        return cy.get('[data-test="item-sauce-labs-bike-light-img"]');
    }

    get itemDescription() {
        return cy.get('[data-test="inventory-item-desc"]');
    }

    get itemPrice() {
        return cy.get('[data-test="inventory-item-price"]');
    }

    get itemName() {
        return cy.get('[data-test="inventory-item-name"]');
    }

    get addToCartButton() {
        return cy.get('[data-test="add-to-cart"]');
    }

    get removeButton() {
        return cy.get('[data-test="remove"]');
    }

    getItemByName(name){
        return cy.get('[data-test="inventory-item-name"]').contains(name);
    }

    checkItemNameVisibility(itemName) {
        cy.get('.inventory_details_name').should('have.text', itemName);
    }
}

export default new ItemPage();
