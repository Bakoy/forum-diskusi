/**
 * - Login spec
 *   - should display login page correctly
 *   - should display alert when username is empty
 *   - should display alert when password is empty
 *   - should display alert when username and password are wrong
 *   - should display Forum Page when username and password are correct
 */

describe('Login spec', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/login');
  });
  it('should display login page correctly', () => {
    cy.get('input[placeholder="Email"]').should('be.visible');
    cy.get('input[placeholder="Passwords"]').should('be.visible');
    cy.get('button').contains(/^Login$/).should('be.visible');
  });
  it('should display alert when Email is empty', () => {
    cy.get('button').contains(/^Login$/).click();
    cy.on('window:alert', (str) => {
      expect(str).to.equal('"email" is not allowed to be empty');
    });
  });
  it('should display alert when password is empty', () => {
    cy.get('input[placeholder="Email"]').type('testuseremail');

    cy.get('button').contains(/^Login$/).click();

    cy.on('window:alert', (str) => {
      expect(str).to.equal('"password" is not allowed to be empty');
    });
  });
  it('should display alert when email and password are wrong', () => {
    cy.get('input[placeholder="Email"]').type('testuseremail');

    cy.get('input[placeholder="Passwords"]').type('wrong_password');

    cy.get('button').contains(/^Login$/).click();

    cy.on('window:alert', (str) => {
      expect(str).to.equal('email or password is wrong');
    });
  });
  it('should display Forum Page when email and password are correct', () => {
    cy.get('input[placeholder="Email"]').type('bakoy@mail.com');

    cy.get('input[placeholder="Passwords"]').type('123456');

    cy.get('button').contains(/^Login$/).click();

    cy.get('p').contains(/^Diskusi tersedia$/).should('be.visible');
    cy.get('span').contains('Logout').should('be.visible');
  });
});
