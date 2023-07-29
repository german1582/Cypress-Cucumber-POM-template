class WikipediaSearchingPage{
    elements={
        lblSearchResult: ()=>cy.get('.mw-page-title-main')
    }


    // No se comporta como quisiera, en la wikipedia.steps no imprime el text.
    getLblSearchResult(){
        this.elements.lblSearchResult().invoke('text').as('txtTitle')
        
        const extractedText = cy.get('@txtTitle')
        // imprime [object Object]
        cy.log(`>>>>>>>>>>>>>>>>>> imprime: ${extractedText} <<<<<<<<<<<<<<<<<<<<<<`)
        return extractedText
    }
}

module.exports = new WikipediaSearchingPage();