
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelopeOpen, faP } from '@fortawesome/free-solid-svg-icons'
import './card.css'

 export const Carte=(alpha)=>{

return(

<div>

<div id='principale' className='container'>

    <div className='lastCenter'>

 

    <FontAwesomeIcon className='border border-solid bg-blue-600 p-2 rounded-full ' icon={faP} style={{color: "#ffffff",}} />
    <p id='texte2' className='   text-black'>{alpha.nombre}</p>
        <p    id='texte1' className='   text-black'>{alpha.title}</p>
        <p id='texte3' className='   text-black'>{alpha.message}</p>

    </div>






</div>





</div>


)



}