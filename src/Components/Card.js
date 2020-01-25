import React from 'react'
import andyimg from '../images/andy.png'
//import circlesimg from '../images/circles.png'
import'./styles/Card.css'

class Card  extends React.Component{
    /* background: url('../../images/circles.png') no-repeat, linear-gradient(to right, #A74CF2, #617BFB);*/t

        render(){
            const {nombre,Nacionalidad,Edad,NumeroDeCedula,FechaDeNacimiento,Sexo,Sangre,leftColor,rightColor} = this.props
            return (
                <div className="card mx-auto andy-Card"
                style={{
                    backgroundImage: ` linear-gradient(to right, ${leftColor}, ${rightColor})`
                }}
                >
                    <div className="card-body">
                        <div className="row center">
                            <div className="col-6">
                                <img src ={andyimg} className="float-right"/>
                            </div>
                            <div className="col-6 andy-Card-Info">
                                <h1>{nombre}</h1>
                                
                                <p><h2>Nacionalidad:</h2>{Nacionalidad}</p>
                                <p><h2>Edad:</h2>{Edad}</p>
                                <p><h2>Numero de cedula</h2>{NumeroDeCedula}</p>
                                <p><h2>Fecha de nacimiento:</h2>{FechaDeNacimiento}</p>
                                <p><h2>Sexo:</h2>{Sexo}</p>
                                <p><h2>Tipo de Sangre:</h2>{Sangre}</p> 

                            </div>
                            
                         </div>
                    </div>
                </div>
                
            )
        }

}
export default Card