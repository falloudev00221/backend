
import './dashbordhtel.css'
import { Sidebar } from "../sidebar/sidebar"
import { Navbar } from '../navbar/navbar3'
import { Navbar4 } from '../navbar/navbar4'
import { Card } from "../cards/card"
import { CardHotels } from '../modelHotel/cardhotel'

import { Navbar2 } from "../navbar/navbar2"

 export const DashbordHotelView=()=>{



    return(

<div className="bg-slate-100">
 
 <div class="flex flex-row">
 <div class="w-1/6">
 <Sidebar></Sidebar>
 </div>
 <div class="flex-1">
<Navbar texte="voici les meilleurs hotel au monde"></Navbar>
<Navbar4></Navbar4>

<div className="item_hotel">

<CardHotels  url='image/a.jpg' namehotel="hotel du rail" adress="thies_ville"  ></CardHotels>
<CardHotels url='image/b.jpg' namehotel="hotel leopole" adress="Dakar centre ville"  ></CardHotels>

</div>
<div className="item_hotel2">

<CardHotels  url='image/c.jpeg' namehotel="hotel du rail" adress="thies_ville"  ></CardHotels>
<CardHotels url='image/d.jpeg' namehotel="hotel leopole" adress="Dakar centre ville"  ></CardHotels>

</div>
<div className="item_hotel3">

<CardHotels  url='image/e.jpg' namehotel="hotel du rail" adress="thies_ville"  ></CardHotels>
<CardHotels url='image/f.jpg' namehotel="hotel leopole" adress="Dakar centre ville"  ></CardHotels>

</div>
<div className="item_hotel4">

<CardHotels  url='image/a.jpg' namehotel="hotel du rail" adress="thies_ville"  ></CardHotels>
<CardHotels url='image/b.jpg' namehotel="hotel leopole" adress="Dakar centre ville"  ></CardHotels>

</div>





 </div>
 </div>



</div>


    )
}