/// <reference types="cypress" />

import LoginPage from "../../page-objects/pages/LoginPage";

describe('Login tests with POM', () => {
    let userData;
    beforeEach(() => {
        cy.fixture('userData.json').then((data) => {
            userData = data;
        })
        LoginPage.open();
    })

    it.only('Login with incorrect login and password', () => {
        //POM:
        // LoginPage.login(userData.userNames.incorrectUser, userData.passwords.incorrectPassword);

        //Custom Commands:
        cy.login(userData.userNames.incorrectUser, userData.passwords.incorrectPassword);
        LoginPage.verifyErrorMessage('Epic sadface: Username and password do not match any user in this service');
    })

    it('Login without login and password', () => {
        LoginPage.clickLoginButton();
        LoginPage.verifyErrorMessage('Epic sadface: Username is required');
    })

    it('Login to locked user', () => {
        LoginPage.login(userData.userNames.lockedUser, userData.passwords.correctPassword);
        LoginPage.verifyErrorMessage('Epic sadface: Sorry, this user has been locked out.');
    })

    it('Login with correct login and password', () => {
        LoginPage.login(userData.userNames.correctUser, userData.passwords.correctPassword);
        cy.url().should('eq', 'https://www.saucedemo.com/inventory.html');
    })

})