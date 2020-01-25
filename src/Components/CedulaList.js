import React from 'react'
import Card from './Card'

function CedulaList(props) {
    
    return(
    <div>
               {props.cedula.map((cedula) => {
                        return(
                            <Card 
                                nombre={cedula.nombre} 
                                Nacionalidad={cedula.Nacionalidad}
                                Edad= {cedula.Edad}
                                NumeroDeCedula={cedula.NumeroDeCedula}
                                FechaDeNacimiento={cedula.FechaDeNacimiento}
                                Sexo={cedula.Sexo}
                                Sangre={cedula.Sangre}
                                leftColor={cedula.leftColor}
                                rightColor={cedula.rightColor}
                            
                            />
                        )
                    })}

    </div>
    )
}
export default CedulaList