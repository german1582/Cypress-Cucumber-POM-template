// El nombre del archivo no es "FreeRangeHome.cy.js" por que no me interesa que Cypress lo 
// levante como un potencial test. Por eso tambien, está por fuera del e2e folder.
class FreeRangeHome{
    
    // -- Locatores/Web-lements:
    
    empezarButton(){
        return  cy.get('#comp-krjarw4p > [data-testid="linkElement"] > .M3I7Z2.wixui-button__label') 
    }

    // -- Actions/Methods on Web-elements

    // Este método no es completamente necesario ya que puede invocarse 'empezarButton()' desde la
    // clase FreeRangePOM.cy.js haciendo: 'home.empezarButton().click()' y funciona de la misma manera.
    // De todas formas, se puede incluir aqui como para mantener el modelo de elements/methods que
    // veniamos usando con JAVA/Selenium.
    clickOnEmpezarButton(){
        this.empezarButton().click()
    }

    // -- Navigation
    navigateToHome(){
        cy.visit('https://www.freerangetesters.com/')
    }

}

export default FreeRangeHome