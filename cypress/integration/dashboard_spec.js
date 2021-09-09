describe('UFO Landing Page Flows', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000')
  })

  it('should be able to visit the page and render the correct form and sighting cards', () => {
    cy.intercept('http://localhost:3000/sightings', {
     sightings: [{
      'id': 1,
      'location': 'Denver, CO',
      'description': 'Bright lights over Cheesman Park'
     }]
    })
    cy.get('h1').contains('We are not alone')
    .get('form').contains('Fill out your sighting here')
    .get('.view-card').contains('Louisville')
    
  })
})