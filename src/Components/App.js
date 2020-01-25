import React from 'react'
import { BrowserRouter,Route,Switch} from 'react-router-dom'
import Cedula from '../pages/Cedula'
import CedulaNew from '../pages/CedulaNew'

const App =() => (
    <BrowserRouter>
            <Switch>
                <Route exact path="/cedula" component={Cedula} />
                <Route exact  path="/CedulaNew" component={CedulaNew}/>
            </Switch>
    </BrowserRouter>
)
// function App(){
//     return(
       
//         <BrowserRouter>
//             <Switch>
//                 <Route exact path="/cedula" component={Cedula} />
//                 <Route exact  path="/CedulaNew" component={CedulaNew}/>
//             </Switch>
//         </BrowserRouter>


//     )

    
// }

export default App