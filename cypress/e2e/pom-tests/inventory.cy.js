/// <reference types="cypress" />
import InventoryPage from "../../page-objects/pages/InventoryPage";
import ItemPage from "../../page-objects/pages/ItemPage";


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

    it('Burger menu, shopping cart icon, and sorting dropdown are visible', () => {
        InventoryPage.burgerMenu.should('be.visible');
        InventoryPage.shoppingCartIcon.should('be.visible');
        InventoryPage.sortingIcon.should('be.visible');
    })

    it('Sorting dropdown has 4 options', () => {
        InventoryPage.sortingOptions.should('have.length', 4);
    })

    it('Redirects to cart page after clicking on cart icon', () => {
        InventoryPage.cartIcon.click();
        cy.url().should('eq', 'https://www.saucedemo.com/cart.html');
    })

    it('Click on item by index 0', () => {
        InventoryPage.clickItemByIndex(0);
        ItemPage.checkItemNameVisibility('Sauce Labs Backpack');
    })

    it('Click on item by name Sauce Labs Backpack', () => {
        InventoryPage.getItemByName('Sauce Labs Backpack').click();
        ItemPage.checkItemNameVisibility('Sauce Labs Backpack');
    })

    it('Click on item by index 1', () => {
        InventoryPage.clickItemByIndex(1);
        ItemPage.checkItemNameVisibility('Sauce Labs Bike Light');
    })

    it('Click on item by name Sauce Labs Bike Light', () => {
        InventoryPage.getItemByName('Sauce Labs Bike Light').click();
        ItemPage.checkItemNameVisibility('Sauce Labs Bike Light');
    })

    it('Click on item by index 2', () => {
        InventoryPage.clickItemByIndex(2);
        ItemPage.checkItemNameVisibility('Sauce Labs Bolt T-Shirt');
    })

    it('Click on item by name Sauce Labs Bolt T-Shirt', () => {
        InventoryPage.getItemByName('Sauce Labs Bolt T-Shirt').click();
        ItemPage.checkItemNameVisibility('Sauce Labs Bolt T-Shirt');
    })

    it('Click on item by index 3', () => {
        InventoryPage.clickItemByIndex(3);
        ItemPage.checkItemNameVisibility('Sauce Labs Fleece Jacket');
    })

    it('Click on item by name Sauce Labs Fleece Jacket', () => {
        InventoryPage.getItemByName('Sauce Labs Fleece Jacket').click();
        ItemPage.checkItemNameVisibility('Sauce Labs Fleece Jacket');
    })

    it('Click on item by index 4', () => {
        InventoryPage.clickItemByIndex(4);
        ItemPage.checkItemNameVisibility('Sauce Labs Onesie');
    })

    it('Click on item by name Sauce Labs Onesie', () => {
        InventoryPage.getItemByName('Sauce Labs Onesie').click();
        ItemPage.checkItemNameVisibility('Sauce Labs Onesie');
    })

    it('Click on item by index 5', () => {
        InventoryPage.clickItemByIndex(5);
        ItemPage.checkItemNameVisibility('Test.allTheThings() T-Shirt (Red)');
    })

    it('Click on item by name Test.allTheThings() T-Shirt (Red)', () => {
        InventoryPage.getItemByName('Test.allTheThings() T-Shirt (Red)').click();
        ItemPage.checkItemNameVisibility('Test.allTheThings() T-Shirt (Red)');
    })

})