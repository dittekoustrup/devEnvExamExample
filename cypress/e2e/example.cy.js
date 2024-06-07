describe('Render website', () => {
 it('Visits the website', () => {
   cy.visit('http://localhost:5173')
 })

 it('checks status code', () => {
  cy.request('http://localhost:5173').then((response) => {
    expect(response.status).to.eq(200)
  })
 })

 it('Test navigation', () => {
  cy.visit('http://localhost:5173')
  cy.get('a').contains('About').click()
  cy.url().should('include', '/about')
 })
})


