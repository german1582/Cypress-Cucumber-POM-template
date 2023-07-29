import {Given, When, Then, And} from "cypress-cucumber-preprocessor/steps"
import practicesPage from '../../pageobject/PracticesPage'

Given("I have the following value {string}",(valueToAdd)=>{

    cy.log(`El string resultante es: ${practicesPage.getAntValue()} ${valueToAdd}`)
})

Then("I see the proper return",()=>{
    cy.log(" >> Nada, ya comprobé que la funcion retorna el valor correctamente en el paso anterior :)")
})

Then("I have a list and I'm playing with variable's context and a for cycle",()=>{
    let videojuegos = ['Mario 3', 'Megaman', 'Chrono Trigger']
    let flag = false
    console.log(`El flag es es declarado fuera del for con valor: ${flag}`)
    // Se comentan las instrucciones cy para que pueda ejecutarse con ctrl+alt+n.
    // Pero si se descomentan, funcionan bien con el runner de cypress.
    videojuegos.forEach(v=>{
        console.log(v)
        //cy.log(v)
        if(v=='Megaman'){
            flag = true
        }
    })
    //cy.log(flag)
    console.log(`El flag fue modificado dentro del for y ahora el valor es: ${flag}`)
})

//////////////////////// Paso de variables entre steps ////////////////////////
Given("I have a variable",()=>{
    let a = "OPPEN"
    cy.wrap(a).as('quisio')
})

Then("I want to use that variable here",()=>{
    let b = "HEIMER"
    let c
    let d
    cy.get('@quisio').then(q=>{
        c = q +b
        cy.log(c)

        cy.wrap(c).as('quisioCompleto')

    })

    cy.get('@quisioCompleto').then(q1=>{
        d = 'pude sacar a '+c+' de adentro??' // --> AHORA SI!!
        cy.log(d)
    })


})
///////////////////////////////////////////////////////////////////////////////
