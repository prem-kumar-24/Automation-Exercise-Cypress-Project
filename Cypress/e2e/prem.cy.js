// import 'cypress-iframe';
import visit from "/Cypress automation/cypress/feature/test.js";
import "/Cypress automation/cypress/support/commands.js";
// import { it } from 'mocha';

describe("Automation", () => {
  let input, selector;

  before('Fixture', () => {
    cy.fixture('input.json').then((data) => {
      input = data;
    });
    cy.fixture('selectors.json').then((data1) => {
      selector = data1;
    });
  });
  const obj = new visit();
  beforeEach('visit', () => {
    // cy.visit("https://automationexercise.com/");
    obj.visitpage(input);
  });

  it("Test1: Should verify the presence of key elements on the homepage", () => {
    cy.visitpage(selector, input); 
  });

  it("Test 2 : should display the sign-in page elements", () => {
    cy.visitpage(selector, input);
    cy.signin(selector, input);
  });

  it("Test 3 : create account", () => { 
    cy.signin(selector, input); 
    cy.createaccount(selector , input)
  });

  it("Test 4 : login", () => {
    cy.signin(selector, input); 
    cy.login(selector , input);
  });

  it("Test 5 : search product & add to cart", () => { 
    cy.login(selector , input);
    cy.searchproduct(selector , input);
  });

  it("Test 6 : review", () => {
    cy.review(selector , input);
  });

  it("Test 7 : adding multiple quantity of a product to cart", () => {
    cy.multiplequantity(selector , input);
  });

  it("Test 8 : contact us ", () => {
    cy.contactus(selector , input);
  });

  it("Test 9 : logout", () => {
    cy.login(selector , input);
    cy.logout(selector , input);
  });

  it("Test 10 : delete account", () => {
    cy.login(selector , input);
    cy.deleteaccount(selector , input);
  });

});















