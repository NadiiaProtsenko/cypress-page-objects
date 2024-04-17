/// <reference types="cypress" />
import LoginPage from "./LoginPage";
import BasePage from "./BasePage";

import userData from '../../fixtures/userData.json'

class InventoryPage extends BasePage {

    get allItems() {
        return cy.get('[data-test="inventory-item"]');
    }

    get allPrices() {
        return cy.get('[data-test="inventory-item-price"]');
    }

    get sortingDropdown() {
        return cy.get('[data-test="product-sort-container"]');
    }

    get pageTitle() {
        return cy.get('[data-test="title"]').contains('Products');
    }

    open() {
        super.open('');
        LoginPage.login(userData.userNames.correctUser, userData.passwords.correctPassword);
        this.pageTitle.should('be.visible');
    }

    selectSortingOption(option) {
        this.sortingDropdown.select(option);

    }

    getAllPricesOnPage() {
        let actualPrices = [];
        this.allPrices.each(($price) => {
            cy.wrap($price).invoke('text').then((text) => {
                actualPrices.push(text);
            })
        })
        return actualPrices;
    }

    get burgerMenu() {
        return cy.get('.bm-burger-button'); 
    }

    get shoppingCartIcon() {
        return cy.get('[data-test="shopping-cart-link"]'); 
    }

    get sortingIcon() {
        return cy.get('[data-test="product-sort-container"]'); 
    }

    get sortingOptions() {
        return cy.get('[data-test="product-sort-container"] option');
    }
}

export default new InventoryPage();
