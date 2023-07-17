import {Given, When, Then, And} from "cypress-cucumber-preprocessor/steps"
import wikipediaPage from '../../pageobject/WikipediaPage'
import wikipediaSearchingPage from "../../pageobject/WikipediaSearchingPage"

Given(`I navigate to {string}`,(url)=>{
    wikipediaPage.navigateTo(url)
})

And (`I am in the correct page: title {string}`,(title)=>{
    wikipediaPage.validatePageTitle(title)
})

When(`I do the search for {string}`,(searching)=>{
    //cy.get('#searchInput').type(searching).type('{enter}')
    wikipediaPage.doTheSearch(searching)
    
})

Then("I see the proper search",()=>{
    //wikipediaSearchingPage.validateSearch()
    
/*     const elem = wikipediaSearchingPage.getLblSearchResult()
    expect(elem).to.contains.text('Indiana Jones') */
    
    //cy.get('.mw-page-title-main').should('contain.text','Indiana')

/*     wikipediaSearchingPage.elements.lblSearchResult().invoke('text').as('t')
    cy.get('@t').should('contain.text','Indiana Jones') */

    wikipediaSearchingPage.getLblSearchResult()
    wikipediaSearchingPage.elements.lblSearchResult().should('have.text','Indiana Jones')
    
    cy.log(wikipediaSearchingPage.getLblSearchResult())
    
})
