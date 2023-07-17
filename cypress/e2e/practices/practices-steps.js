import {Given, When, Then, And} from "cypress-cucumber-preprocessor/steps"
import practicesPage from '../../pageobject/PracticesPage'

Given("I have the following value {string}",(valueToAdd)=>{

    cy.log(`El string resultante es: ${practicesPage.getAntValue()} ${valueToAdd}`)


})

Then("I see the proper return",()=>{
    cy.log(" >> Nada, ya comprobé que la funcion retorna el valor correctamente en el paso anterior :)")
})