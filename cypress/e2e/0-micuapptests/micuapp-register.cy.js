describe ('Micuapp Register test', () => {
    beforeEach(() => {
        cy.visit('http://localhost:3000/')
      })

      it('A user can register into micuapp', function () {
        let newname = 'Maria'
        let newparent = 'Jose'
        let newemail = 'jose@gmail.com'
        let newpassword = 'password'
    
        cy.visit('http://localhost:3000/signin')

        cy.get('input[name=name]').type(newname)

        cy.get('input[name=parent]').type(newparent)
    
        cy.get('input[name=email]').type(newemail)
    
        cy.get('input[name=password]').type(`${newpassword}{enter}`)
        
        cy.getAllLocalStorage().should('exist')
    
        cy.get('.swal-modal').contains('Te has registrado correctamente')
        
        cy.get('.swal-button').click()

        cy.url().should('include', 'http://localhost:3000/')
        })

    })
    