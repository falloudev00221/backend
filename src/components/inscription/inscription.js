import React, { useContext, useState } from 'react';



import { useNavigate } from 'react-router-dom';
import './inscription.css';

export const  Inscription=()=> {

  let nav = useNavigate()

  const [message,setMessage]=useState("RED PRODUCTION")



  const passer =()=>{

    nav('/')

  }

  const passerdashbord=()=>{

nav('/dashbord')


  }

  const [formData, setFormData] = useState({
 
    email: '',
    password: '',
    confirmPassword: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  
    //inscription a la base de donnee


   
    
    try{

   
    }catch{


    }



  };

  return (
        <div className='center'>
<h2 className='RED8PRODUCTION text-white'>{message}</h2>
<div className="container bg-indigo">
      <p>inscrivez vous en tanque admin</p>
      <form onSubmit={handleSubmit}>
      
        <div className="form-group">
          <label htmlFor="email">Adresse Email:</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Mot de passe:</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="confirmPassword">Confirmer le mot de passe:</label>
          <input
            type="password"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange}
            required
          />
        </div>
        <button   onClick={passerdashbord} className='bg-black' type="submit">S'inscrire</button>
      </form>

      
        <p className='creercompt'> deja un compt <strong className='inscription'> <a  onClick={passer} href=''>deja un compt</a></strong> </p> 




    </div>



        </div>
  );
}


