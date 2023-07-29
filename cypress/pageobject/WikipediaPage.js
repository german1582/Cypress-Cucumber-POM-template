class WikipediaPage{
    elements={
        inputTxtSearch: ()=>cy.get('#searchInput'),
        btnSubmitSearch: ()=>cy.get("button[type='submit']")
    }

    navigateTo(url){
        cy.visit(url)
    }

    validatePageTitle(title){
        cy.title().should('eq',title)
    }

    doTheSearch(searching){

        this.elements.inputTxtSearch().type(searching)
        this.elements.btnSubmitSearch().click()

        // Otra alternativa en una línea:
        //this.elements.inputTxtSearch().type(searching).type('{enter}')
    }
}

module.exports = new WikipediaPage();