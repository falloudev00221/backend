
import './sidebar.css'

import { useNavigate } from 'react-router-dom'
export const Sidebar=()=>{

    let Navigate = useNavigate()


    const passer=()=>{


        Navigate('/hotels')
    }

    const passerHome=()=>{

        Navigate('/dashbord')
    }

    const passer2=()=>{


        Navigate('/')
    }


return(


    <div>


        <div id="side_container" className="">

           <ui id="ul_menu" className="p-10">
            <div className='flex flex'>

            <img  className='w-6 h-8' src='image/ic1.png'></img><h2 className='text-white'>RED PRODUCT</h2>
            

            </div>
            <p className='text-white'>Principal</p>

          <div id='alpha' className='flex flex '>

          <img  id='ic2' className='w-4 h-4' src='image/ic2.png'></img>
          <li onClick={passerHome}><a href='#'>Dashbord</a></li>
          </div>
            <div id='alpha2' className='flex flex'>
            <img  id='ic3' className='w-4 h-4 mt-7' src='image/ic3.png'></img>
             <li  onClick={passer} className='mr-4'><a href='#'>List des hotel</a></li>
            </div>
        <li  onClick={passer2} ><a href='#'>log out</a></li>
     
     

           </ui>

        </div>

    </div>
)



}