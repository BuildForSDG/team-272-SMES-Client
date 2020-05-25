describe('Home Page Component', () => {

  it('should display the landing page', () => {
    cy
      .visit('/')
      .get('a.navbar-brand').contains('U Business')
      .get('a.nav-link').contains('Home')
      .get('a.nav-link').contains('Login')
      .get('a.nav-link').contains('SignUp');
  });

});
