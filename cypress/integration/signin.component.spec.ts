import '../support/commands';

describe('LogIn Component', () => {

  it('should log a user in if the credentials are valid', () => {
    cy
      .login('test@test.com', 'test');
    cy
      .location('pathname').should('eq', '/smes-dashboard')
      .get('a').contains('Log in').should('not.be.visible')
      .get('a').contains('Sign up').should('not.be.visible')
      .get('div.content.col-md-8').contains('content goes here')
      .get('h4').contains('Logout').click();
  });

  it('should not log a user in if the credentials are invalid', () => {
    cy
      .login('not@correct.com', 'incorrect');
    cy
      .location('pathname').should('eq', '/sign-in')
      .get('div.alert.alert-danger')
      .contains('Incorrect email and/or password.');
  });

});
