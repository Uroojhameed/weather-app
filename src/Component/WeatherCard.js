import { Paper } from '@mui/material'
import React from 'react'

export default function WeatherCard({data}) {
//   console.log(data.main.temp)
  
    if(!data){
        return <h1>Loading</h1>
    }
    else{
        function celsiusConverter(val){
          const celsius = Math.round(val - 273)
          return celsius
        } 
        const icn = data.weather[0].icon
        const iconImg =`https://openweathermap.org/img/wn/${icn}@2x.png` 
        return (
            <div>
                <Paper elevation={8} className = "card">
                    <img src= {iconImg} alt="iconImage"  />

                    <h3>{data.weather[0].description}</h3>
                    <h3>{celsiusConverter(data.main.feels_like)}°c</h3>
                    <h3>{data.name}</h3>
                </Paper>
            </div>
        )
    }
    
}
