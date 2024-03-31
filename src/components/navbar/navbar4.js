import { faPlus } from '@fortawesome/free-solid-svg-icons'
import './navbar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export const  Navbar4 =()=>{


    return(

        <div>

        <div id="nav_bar_container2" className="bg-white shadow">

              <div className='block_ajoute'>

              <FontAwesomeIcon id='closse' className='P-5 w-10 h-7' icon={faPlus}  /><p>Ajouter un nouveau hotel</p>

              </div>


            <div>


            
            </div>

        </div>


        </div>
    )
}