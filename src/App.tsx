import style from "./App.module.css"
import Alert from "./components/Alert/Alert"
import Form from "./components/Form/Form"
import Spinner from "./components/Spinner/Spinner"

import WeatherDetail from "./components/WeatherDetail/WeatherDetail"
import useWheather from "./Hooks/useWheather"

function App() {
  
  const {weather,loading,notFound,feachWeather, hasWeatherData}=useWheather()

  

  return (
    <>
     <h1 className={style.title}>Buscador de clima</h1>
     <div className={style.container}>
      <Form
        fetchWeather={feachWeather}
      />
      {loading && <Spinner/>}
      {hasWeatherData &&
        <WeatherDetail
            weather={weather}
        />
      }
      {notFound && <Alert>Ciudad No en contrada</Alert>}
     
     </div>
    </>
  )
}

export default App
