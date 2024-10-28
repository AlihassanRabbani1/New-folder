import React, { useState } from 'react'
import { Form , Button} from 'react-bootstrap'
import axios from 'axios'
import WeatherCard from './../WeatherCard'

let  Home = () => {

     const[CityName, setCityName] = useState("");
     const[data , setData] = useState([]);


      let submitHandler = async(e) =>{
        e.preventDefault();

        console.log("I am submit handler function");
        try{
          let response= await axios.get(`https://api.openweathermap.org/data/2.5/forecast?q=${CityName}&appid=2d93cd43c6c0fa7a5697a1f434c522dc`)

          console.log("response:" , response)


          setData(response.data.list)

        } catch (error){
          console.log("error in api call" , error);
        }

      }


  return (
    
    <div>

      <h1>Weather App Home</h1>


      <Form onSubmit={submitHandler }>

      <Form.Group className="mb-3" controlId="examplrForm.ControlInput1">
        <Form.Label>City Name</Form.Label>
        <Form.Control type="text" placeholder="Enter City Name" onChange={(e) =>{
            //  console.log(e.target.value);
            setCityName(e.target.value);
        }}
             
         />
        
        </Form.Group>


      <Button type="submit">Get Weather</Button>
   
      </Form>


           {
      
           data.map((eachForcast, index) => (

         


               <WeatherCard
                 key={index}
                 date={eachForcast.dt_txt}
                 temp={eachForcast.main.temp}
                  min={eachForcast.main.temp_min}
                  max={eachForcast.main.temp_max}
                  pressure={eachForcast.main.pressure}
                  humadity={eachForcast.main.humadity}
                  kf = {eachForcast.main.temp_kf}
                  feel={eachForcast.main.feel_like}

               
               
               
               
               
               
               />

           




             ))
      
      
      
      
      
      
      
      
      
      
            }

    </div>


  )
}

export default Home