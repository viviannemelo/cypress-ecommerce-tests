import { faker } from '@faker-js/faker';

describe('Dynamic User Registration', () => {
  it('should register a new user with random data', () => {
    const name = faker.person.fullName();
    const email = faker.internet.email();
    const password = faker.internet.password();

    cy.visit('/register');
    cy.get('input[name="name"]').type(name);
    cy.get('input[name="email"]').type(email);
    cy.get('input[name="password"]').type(password);
    cy.get('button[type="submit"]').click();

    cy.get('.welcome-message').should('contain', name);
  });
});
