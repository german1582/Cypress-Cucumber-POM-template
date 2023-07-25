import FreeRangeHome from '../../Pages/FreeRangeHome'

const home = new FreeRangeHome

describe('Ejemplo de POM en la web Free Range Testers', ()=>{

    it('Prueba con POM - el BTN "Empezar a aprender" existe', ()=>{
        home.navigateToHome()
        home.empezarButton().should('exist')        
    })
})