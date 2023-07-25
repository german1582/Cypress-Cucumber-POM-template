import FreeRangeHome from '../../Pages/FreeRangeHome'

const home = new FreeRangeHome

describe('Ejemplo de POM en la web Free Range Testers', ()=>{

    beforeEach(()=>{
        home.navigateToHome()
    })

    it('Prueba con POM - el BTN "Empezar a aprender" existe', ()=>{
        home.empezarButton().should('exist')        
    })
})