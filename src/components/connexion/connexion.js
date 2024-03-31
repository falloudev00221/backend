import React, { useState } from 'react';
  
import axios from 'axios'

import { Inscription } from '../inscription/inscription';
import { BrowserRouter, Routes, Route} from "react-router-dom";
import { useNavigate } from 'react-router-dom';


import './connexion.css';



export const  Connexion=()=> {

  const navigate = useNavigate()
  const [formData, setFormData] = useState({
  
    email: '',
    password: ''
    
  });

  const passer=()=>{

    navigate('/dashbord')

  }
  const passer2=()=>{

    navigate('/inscription')

  }

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    let  email= formData.email
    let mdp = formData.password

    
    alert(email)



      


     axios.post("http://localhost:3001/",{
      email,
      mdp


     }).then(res=>{


      if(res.data_sin_in="exist"){

alert("merci bien connecter")
        
      }else if(res.data_sin_in="not existe"){

        alert("tu n'es pas encore insccrit")


      }
     })






    console.log(formData)
  
    
    
  };




  return (
        <div className='block1connexion'>

      <Routes>

        <Route path='./inscription' element={Inscription} ></Route>
      </Routes>


<h2 className='RED8PRODUCTION'>RED PRODUCTION</h2>
<div className="container">


      <p className=''>Connectez vous en tanque admin</p>
      <form onSubmit={handleSubmit}>
      
        <div className="form-group">
          <label htmlFor="email">Adresse Email:</label>
          <input className='champs'
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Mot de passe:</label>
          <input className='champs'
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </div>
    
        <button className='bg-black'   type="submit">connexion</button>

      </form>
    </div>

    <p   className='forget_password'> <a   href='forget'>mot de passe oublier</a> </p> 
        <p className='creercompt'> creer un compt ici <strong className='inscription'> <a  onClick={passer2} href=''>S'inscrire</a></strong> </p> 


        </div>
  );
}


