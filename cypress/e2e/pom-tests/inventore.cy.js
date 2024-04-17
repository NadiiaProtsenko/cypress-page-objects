/// <reference types="cypress" />
import InventoryPage from "../../page-objects/pages/InventoryPage"


describe('Inventory tests with POM', () => {

    beforeEach(() => {
        InventoryPage.open();
    })

    it('Six items are displayed by default', () => {
        InventoryPage.allItems.should('have.length', 6);
    })


    it('Verifying prices for six items', () => {
        const expectedPrices = ['$29.99', '$9.99', '$15.99', '$49.99', '$7.99', '$15.99'];
        let actualPrices = InventoryPage.getAllPricesOnPage();
        cy.wrap(actualPrices).should('deep.equal', expectedPrices);
    })


    it('Sorting by Price (low to high)', () => {
        const expectedPrices = ['$7.99', '$9.99', '$15.99', '$15.99', '$29.99', '$49.99'];
        InventoryPage.selectSortingOption('Price (low to high)');
        let actualPrices = InventoryPage.getAllPricesOnPage();
        cy.wrap(actualPrices).should('deep.equal', expectedPrices);
    })


    it('Burger menu is visible', () => {
        InventoryPage.burgerMenu.should('be.visible');
    })

    it('Shopping cart icon is visible', () => {
        InventoryPage.shoppingCartIcon.should('be.visible');
    })

    it('Sorting dropdown is visible', () => {
        InventoryPage.sortingIcon.should('be.visible');
    })

    it('Sorting dropdown has 4 options', () => {
        InventoryPage.sortingOptions.should('have.length', 4);
    })

}) 