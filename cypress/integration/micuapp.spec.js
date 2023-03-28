describe ('Micuapp', () => {
    it('Main page can be opened', () =>{
        cy.visit('http://localhost:3000/')
        cy.contains('Flip Cards')
    })

})