
import './forget.css'
export const ForgetPassword=()=>{


const passer=()=>{


    alert("verifier votre email pour confirmer votre identite")

}

    return(


            <div className='block1connexion'>


<div className="container">


<p className=''>reinitialisation du mot de passe</p>
<form >

  <div className="form-group">
    <label htmlFor="email">Adresse Email:</label>
    <input className='champs'
      type="email"
      name="email"
 
      required
    />
  </div>

  <button className='bg-black' onClick={passer} type="submit">valider</button>

</form>
</div>


            </div>




    )
}