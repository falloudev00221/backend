import './navbar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBell } from '@fortawesome/free-solid-svg-icons'
import { useNavigate } from 'react-router-dom'
import { faUser } from '@fortawesome/free-solid-svg-icons'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import { faRightFromBracket } from '@fortawesome/free-solid-svg-icons'


export const  Navbar =(e)=>{

    let  nav = useNavigate()
const passer=()=>{

nav('/')
    
}

    return(

        <div>

        <div id="nav_bar_container3" className="bg-white shadow mt-6">  <h4 id='dashbord_text' className='mt-3'>{e.texte}</h4>
        
        
        <div className='recherche_block'>
        <FontAwesomeIcon  id="icone"className=' p-1' icon={faMagnifyingGlass} /> 
         <input id='input_recherche' className='rounded' placeholder='      recherche'></input>
           
            <FontAwesomeIcon id='closse' className='P-5 w-10 h-7' icon={faBell} />
            <FontAwesomeIcon id='fauser' className='P-5 w-10 h-7' icon={faUser} />
            <FontAwesomeIcon onClick={passer} id='out' className='P-5 w-10 h-7' icon={faRightFromBracket} />
            


        </div>
        
        
        
        
        
        </div>

       
          
        </div>
    )
}