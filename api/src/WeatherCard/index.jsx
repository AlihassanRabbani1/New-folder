import moment from "moment";



let WeatherCard = ({date, temp, min, max, humadity, kf, feel}) =>{

    return(
<>
       <h1>{moment(date).subtract(6, 'days').calendar()}</h1>
       <h1>Your Weather feel is {feel}</h1>
       <h1>temp = {temp}°C </h1>
       <h1>min = {min}°C</h1>
       <h1>max = {max}°C</h1>
       <h1>humadity = {humadity}</h1>
       <h1>kf = {kf}</h1>

       </>
    )
}

export default WeatherCard