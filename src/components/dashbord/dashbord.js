


import { Sidebar } from "../sidebar/sidebar"
import './dashbord.css'
import { Carte } from "../cards/card"

import { Navbar4 } from "../navbar/navbar4"
import { Navbar } from "../navbar/navbar3"
import { Navbar2 } from "../navbar/navbar2"

export const Dashbord = ()=>{



    return(

        <div className="bg-slate-100">
 
          <div class="flex flex-row">
          <div class="w-1/6">
          <Sidebar></Sidebar>
          </div>







          <div class="flex-1">
         <Navbar texte="dashbord"></Navbar>
        
         <Navbar2></Navbar2>


         <div id="ligne1" class="flex flex-row">

          <div  class="w-1/2">
          <Carte nombre="125" title="message" message="je ne sais pas"></Carte>
          <Carte nombre="300" title="Notification" message="a visite"></Carte>

          </div>

          <div class="w-1/2">
          <Carte nombre="99" title="Friend" message="Abdou ngom"></Carte>
          <Carte nombre="55" title="Invitation" message="new friend"></Carte>

          </div>

        




          </div>
          </div>
  

        
        </div>
        </div>


    )


}