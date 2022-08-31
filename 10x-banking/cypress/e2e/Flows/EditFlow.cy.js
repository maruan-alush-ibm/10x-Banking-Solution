/// <reference types="cypress" />

context("Edit flow - happy route", () => {
  it("should navigate to the home page", () => {
    cy.visit("localhost:3000");
    cy.get('[href="/profile/1"]');
    cy.get('[name="email"]').should("be.visible");
    cy.get('[name="username"]').should("be.visible");
    cy.get('[name="password"]').should("be.visible");
  });

  it("should click on the first profile and navigate to the profile page", () => {
    cy.get('[href="/profile/1"]').click();
    cy.url().should("include", "/profile/");
  });

  it("should click on the edit button and navigate to the edit page", () => {
    cy.get('[data-cy="edit-button"]').click();
    cy.url().should("include", "/edit/");
  });

  it("should change the first name of the user and submit", () => {
    cy.get('[name="first_name"]').type("Maruan");
    cy.get('[data-cy="submit-button"]').click();
  });

  it("should return the user to the landing page and show a success notification", () => {
    cy.url().should("equal", "http://localhost:3000/");
    cy.contains("Your action was successful!");
  });
});

context("Edit flow - test validation", () => {
  it("should navigate to the home page", () => {
    cy.visit("localhost:3000");
    cy.get('[href="/profile/1"]');
    cy.get('[name="email"]').should("be.visible");
    cy.get('[name="username"]').should("be.visible");
    cy.get('[name="password"]').should("be.visible");
  });

  it("should click on the first profile and navigate to the profile page", () => {
    cy.get('[href="/profile/1"]').click();
    cy.url().should("include", "/profile/");
  });

  it("should click on the edit button and navigate to the edit page", () => {
    cy.get('[data-cy="edit-button"]').click();
    cy.url().should("include", "/edit/");
  });

  it("should change the first name of the user and submit", () => {
    cy.get('[name="first_name"]').clear();
    cy.get('[data-cy="submit-button"]').click();
  });

  it("should show an error message", () => {
    cy.contains("first_name is a required field");
  });

  it("should enter a name in the field", () => {
    cy.get('[name="first_name"]').type("Maruan");
  });

  it("should press submit and be redirected to the landing page with a success message", () => {
    cy.get('[data-cy="submit-button"]').click();
    cy.url().should("equal", "http://localhost:3000/");
    cy.contains("Your action was successful!");
  });
});
