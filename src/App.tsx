import style from "./App.module.css"
import Form from "./components/Form/Form"
import useWheather from "./Hooks/useWheather"

function App() {
  
  const {feachWeather}=useWheather()


  return (
    <>
     <h1 className={style.title}>Buscador de clima</h1>
     <div className={style.container}>
      <Form
        fetchWeather={feachWeather}
      />
      <p>2</p>
     </div>
    </>
  )
}

export default App
