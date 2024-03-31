import './cardHotel.css'

export const CardHotels=(e)=>{




    return(


        <div>



        <div  className='shadow rounded ' id='card' > 

        <img className="img_card" src={e.url} alt='image_hotel'></img>
        <h6 className=' text-black'>{e.namehotel}</h6>
        <p className=' text-black'>{e.adress}</p>


        </div>

        </div>
    )
}