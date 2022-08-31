/// <reference types="cypress" />

context("Adding a user flow - happy route", () => {
  it("should navigate to the home page", () => {
    cy.visit("localhost:3000");
    cy.get('[href="/profile/1"]');
    cy.get('[name="email"]').should("be.visible");
    cy.get('[name="username"]').should("be.visible");
    cy.get('[name="password"]').should("be.visible");
  });

  it("should fill in the correct data", () => {
    cy.get('[name="email"]').type("eve.holt@reqres.in");
    cy.get('[name="username"]').type("eve.holt@reqres.in");
    cy.get('[name="password"]').type("pistol");
  });

  it("should click on the submit button ", () => {
    cy.get('[data-cy="submit-button"]').click();
  });

  it("should clear the form and show a success notification ", () => {
    cy.get('[name="email"]').should("be.empty");
    cy.get('[name="username"]').should("be.empty");
    cy.get('[name="password"]').should("be.empty");
    cy.contains("Your action was successful!");
  });
});

context("Adding a user flow - error route", () => {
  //api will not register the user successfully if the details entered aren't the preset ones
  it("should navigate to the home page", () => {
    cy.visit("localhost:3000");
    cy.get('[href="/profile/1"]');
    cy.get('[name="email"]').should("be.visible");
    cy.get('[name="username"]').should("be.visible");
    cy.get('[name="password"]').should("be.visible");
  });

  it("should fill in the correct data", () => {
    cy.get('[name="email"]').type("21maruan@gmail.com");
    cy.get('[name="username"]').type("maruan");
    cy.get('[name="password"]').type("password");
  });

  it("should click on the submit button ", () => {
    cy.get('[data-cy="submit-button"]').click();
  });

  it("should clear the form and show a success notification ", () => {
    cy.get('[name="email"]').should("be.empty");
    cy.get('[name="username"]').should("be.empty");
    cy.get('[name="password"]').should("be.empty");
    cy.contains("Your action was unsuccessful!");
  });
});

context("Adding a user flow - validation test", () => {
  //api will not register the user successfully if the details entered aren't the preset ones
  it("should navigate to the home page", () => {
    cy.visit("localhost:3000");
    cy.get('[href="/profile/1"]');
    cy.get('[name="email"]').should("be.visible");
    cy.get('[name="username"]').should("be.visible");
    cy.get('[name="password"]').should("be.visible");
  });

  it("should click on the submit button ", () => {
    cy.get('[data-cy="submit-button"]').click();
  });

  it("should show error messages", () => {
    cy.contains("email is a required field");
    cy.contains("username is a required field");
    cy.contains("password is a required field");
  });
});
