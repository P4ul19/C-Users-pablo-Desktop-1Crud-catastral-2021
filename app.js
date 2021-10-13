import './App.css';
import { useState } from "react";
import Axios from "axios"

function App() {
    const [Numerocatastral, setNúmerocatastral] = useState("");
    const [Terreno, setTerreno] = useState(0);
    const [Residencial, setResidencial] = useState("");
    const [Propietario, setpropietario] = useState("");
    const [Direccion, setdireccion] = useState(0);

    const [newPredio, setNewPredio] = useState(0);

function Addconsultarpredios() {
Axios.post('http://localhost:3001/create', {
    Numerocatastral: Numerocatastral,
    Terreno: Terreno,
    Residencial: Residencial,
    Propetario: Propietario,
    Direccion: Direccion,
        }).then(() => {
            console.log('success');
        });
    }

    const getconsultarPredios = (id) => {
        Axios.get('http://localhost:3001/Predios').then((response) => {
            setEmployeelist(reponse.data);
        });
    }

    const updateconsultarPredios = () => {
        Axios.get('http://localhost:3001/update',{predios:newPredio, id,id}) .then(
            (response) => setPrediosList(predioslist.map)(value =>{


      })
    );


    return ( 
    <div className = "app" > 
    <div className = "Information" >
    <label> Número catastral </label> <
        input type = "text"
        onChange = {
            (event) => {
                setNúmerocatastral(event.target.value);
            }
        }
        />  

    <label> Terreno </label> <
    input type = "text"
    onChange = {
    (event) => {
    setTerreno(event.target.value);
            }
        }
        /> 
    <label> Residencial </label > <
    input type = "text"
    onChange = {
    (event) => {
    setResidencial(event.target.value);
            }
        }
     /> 
    <label > Propetario </label > <
    input type = "text"
    onChange = {
    (event) => {
    setpropietario(event.target.value);
    }
      }
     /> 
    <label > Direccion </label > <
    input type = "text"
    onChange = {
    (event) => {
    setdireccion(event.target.value);
            }
        }
        />

<button onClick = { Addconsultarpredios } > add predios </button> 
    </div > 
<div className = 'Predios'>
<button onClick = { getconsultarPredios } > show Predios </button>
    </div>
        {
    predioslist.map((val, key) => {
                
 return ( 

    <div className = 'Predios' >        
    <h3> Numerocatastral: { val.Numerocatastral } </h3> 
    <h3> Terreno: { val.Terreno } </h3> 
    <h3> Residencial: { val.Residencial } </h3> 
    <h3> Propietario: { val.Propietario } </h3> 
    <h3> Direccion: { val.Direccion } </h3> 
    <div>
    </div> 
        
  <input type = "text" name = "lugar"/>
  onChange={(event) => {
      setNewPredio(event.target.value);             
  }}   
        <button onClick= {()=> {updateconsultarPredios(val.id)} }> Actualizar </button> 
  </div>  
    
);
})
}) 
);
</div>
    )
}
}
export default App;