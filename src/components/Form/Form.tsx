import { countries } from "../../data/countries";


export default function Form() {
  return (
    <form action="">
        <div>
            <label htmlFor="city">Ciudad:</label>
            <input 
                id="city"
                type="text"
                name="city"
                placeholder="Ciudad" />
        </div>
        <div>
            <label htmlFor="city">Pais:</label>
            <select name="" id="">
                <option value="">--Seleciones un Pais--</option>
                {countries.map(country=>(
                <option
                 key={country.code}>{country.name}
                 </option>
                 ))}
            </select>
        </div>
        <input type="submit" value='Consultar Clima' />
    </form>
  )
}
