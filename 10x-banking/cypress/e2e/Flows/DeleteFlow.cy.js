/// <reference types="cypress" />

context("Deletion flow", () => {
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

  it("should click on the delete button", () => {
    cy.get('[data-cy="delete-button"]').click();
  });

  it("should return the user to the landing page and show a success notification", () => {
    cy.url().should("equal", "http://localhost:3000/");
    cy.contains("Your action was successful!");
  });
});
