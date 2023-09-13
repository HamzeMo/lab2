describe('Check The Trip Details',() => {
  it(' Ensure that departure is one day after the current date ', () => {
      cy.visit("https://www.almosafer.com/ar")
      cy.get('.cta__saudi').click()
      const tomorrow = new Date();
      tomorrow.setDate(tomorrow.getDate() + 1);
      let day = String(tomorrow.getDate());
      let month = tomorrow.toLocaleDateString('ar-AE', { month: 'long' });
      let WeekDay = tomorrow.toLocaleDateString('ar-AE', { weekday: 'long' });
      cy.get('[data-testid="FlightSearchBox__FromDateButton"]')
      .should('include.text', `${month}${day} ${WeekDay}`); });
  it(' Ensure that departure is two days after the current date', () => {
      cy.visit("https://www.almosafer.com/ar")
      cy.get('.cta__saudi').click()
      let tomorrow = new Date();
      tomorrow.setDate(tomorrow.getDate() + 2);
      let day = String(tomorrow.getDate());
      let month = tomorrow.toLocaleDateString('ar-AE', { month: 'long' });
      let WeekDay = tomorrow.toLocaleDateString('ar-AE', { weekday: 'long' });
      cy.get('[data-testid="FlightSearchBox__ToDateButton"]')
      .should('include.text', `${month}${day}${WeekDay}`);  });
  it('Third check : Ensure that the flight class is Economy is set automatically ', () => {
      cy.visit("https://www.almosafer.com/ar")
      cy.get('.cta__saudi').click()
      cy.get('.sc-jWxkHr').should('contain.text', 'السياحية');  });});