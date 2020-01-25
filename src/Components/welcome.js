import React from 'react';

function Welcome(props){

    return(
            <div className="container">
                <div className="andy-User-info">

                        <h1>Saludos {props.userName}</h1>
                        <p>
                            Esta en tu lista de deudores
                        </p>
                </div>
            </div>


    )
}

export default Welcome