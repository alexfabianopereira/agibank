/// <reference types="Cypress" />



  describe('Portal Contrato', function() {
    beforeEach(function() {
      cy.visit('https://blogdoagi.com.br/')
     
    })

    it('validar pequisa', function() {
      cy.get('#search-open').click()
      cy.get('.desktop-search > .search-form > label > .search-field').type('Produtos')
      cy.get('.desktop-search > .search-form > .search-submit').click()
      .should('be.visible') 
      
       
    })

    it('validar pequisa sem resultado', function() {
      cy.get('#search-open').click()
      cy.get('.desktop-search > .search-form > label > .search-field').type('111111')
      cy.get('.desktop-search > .search-form > .search-submit').click()
      cy.contains('Nenhum resultado').should('be.visible') 
         
      
       
    })



})