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

    get cartIcon() {
        return cy.get('[data-test="shopping-cart-link"]');
    }

    get allItems(){
        return cy.get('[data-test="inventory-item-name"]')
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

    getItemByName(name){
        return cy.get('[data-test="inventory-item-name"]').contains(name);
    }

    clickItemByIndex(index){
        this.allItems.eq(index).click();
    }
}

export default new InventoryPage();
