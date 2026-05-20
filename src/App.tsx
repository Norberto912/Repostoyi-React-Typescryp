import style from "./App.module.css"
import Form from "./components/Form/Form"
import WeatherDetail from "./components/WeatherDetail/WeatherDetail"
import useWheather from "./Hooks/useWheather"

function App() {
  
  const {weather,feachWeather, hasWeatherData}=useWheather()

  

  return (
    <>
     <h1 className={style.title}>Buscador de clima</h1>
     <div className={style.container}>
      <Form
        fetchWeather={feachWeather}
      />
      {hasWeatherData &&
        <WeatherDetail
            weather={weather}
        />
      }
     
     </div>
    </>
  )
}

export default App
