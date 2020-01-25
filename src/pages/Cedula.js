import React from 'react'
import Welcome from '../Components/welcome'
import CedulaList from '../Components/CedulaList'
import Button from '../Components/Button'

class Cedula extends React.Component{

    constructor(props){
        super(props)
        this.state ={
            data: [{
                    "id" :1,
                    "nombre": "Andy Marmolejos",
                    "Nacionalidad": "Dominicano",
                    "Edad":  "18",
                    "NumeroDeCedula": "000-0101010-1",
                    "FechaDeNacimiento": "14 de abril de 2002",
                    "Sexo": "M",
                    "Sangre": "O+",
                    "leftColor":"#A74CF2",
                    "rightColor":"#617BFB"
                },{
                    "id": 2,
                    "nombre": "Amy Ramirez",
                    "Nacionalidad": "Dominicaba",
                    "Edad": "18",
                    "NumeroDeCedula": "001=98765432-1",
                    "FechaDeNacimiento": "uns dia de el año",
                    "Sexo": "F",
                    "Sangre": "No se",
                    "leftColor":"#2874A6",
                    "rightColor":"#2835A6"
                },{
                    "id": 3,
                    "nombre": "Oscar Ballard",
                    "Nacionalidad": "Dominicano",
                    "Edad": "18",
                    "NumeroDeCedula": "111-1234567-1",
                    "FechaDeNacimiento": "No se",
                    "Sexo": "M",
                    "Sangre": "No se",
                    "leftColor":"red",
                    "rightColor":"#A62835"
                }
            ]
        }
    }

    render(){
        return(
            <div>
                <Welcome userName="Andy"
                />

                <CedulaList
                    cedula = {this.state.data}
                
                />
                    

                <Button></Button>
            </div>
        )
    }

}
export default Cedula