describe('Edge cases', () => {
  it('A User visits a non-existing url', () => {
    cy.visit('http://localhost:3000/lorem/items?q=notebook')
    cy.wait(2000)
    expect(cy.get('input[data-testid="input-search"]')).to.not.be.null
  })
})

