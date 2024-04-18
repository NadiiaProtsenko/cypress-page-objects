/// <reference types="cypress" />
import ItemPage from "../../page-objects/pages/ItemPage"


describe('Item tests with POM', () => {

    beforeEach(() => {
        ItemPage.open();
    })

    it('Click on item by name Sauce Labs Bike Light', () =>{
        ItemPage.getItemByName('Sauce Labs Bike Light').click();
    })

    it('Item image is displayed', () => {
        ItemPage.itemImage.should('be.visible');
    });
    
    it('Item description is displayed', () => {
        ItemPage.itemDescription.should('be.visible');
    });
    
    it('Item price is displayed', () => {
        ItemPage.itemPrice.should('be.visible');
    });
    
    it('Item name is displayed', () => {
        ItemPage.itemName.should('be.visible');
    });

    it('Add to cart button changes to Remove after click', () => {
        ItemPage.addToCartButton.click();
        ItemPage.removeButton.should('be.visible');
    });
    
    it('Remove button changes to Add to Cart after click', () => {
        ItemPage.addToCartButton.click();
        ItemPage.removeButton.click();
        ItemPage.addToCartButton.should('be.visible');
    });

});