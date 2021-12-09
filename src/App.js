import axios from 'axios';
import { useState, useEffect } from 'react';
import './App.css';
import Header from './Component/Header';
import SearchBar from './Component/SearchBar';
import WeatherCard from './Component/WeatherCard';
function App() {
  const [city , setCity] = useState('Karachi');
 const [tempo,setTempo]= useState(null)
  useEffect(() => {
  async function fetchData(){
    const response =  await axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=70eefff73d1dfcf0e9ca4bfb45c3c9d2`)
    const tempData = await response.data 
    setTempo(tempData)
    console.log(tempData)
  }
  fetchData()
  }, [city])
  console.log(city)
  
  return (
    <div className="App">
      <Header/>
 <SearchBar location = {city} setLocation ={setCity} />
 <WeatherCard data = {tempo}/>
</div>
  );
}

export default App;
