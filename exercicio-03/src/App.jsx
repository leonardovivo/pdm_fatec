import { useState } from 'react'
import medico1 from './images/medico1.jpg'
import './styles.css'

function App() {
  const [count, setCount] = useState(0)

    const estiloAreaDocs = () => {
      return {width: 1200, margin: 'auto', border: '1px solid black',
     backgroundColor: "#EEE", borderRadius: 6, padding: 10, textAlign: 'center'};
      }

      const NomesMedicos = {medico1: 'José da Silva', medico2: 'Maria da Silva', medico3: 'Jaqueline Mendes'};

      const medico2 = import.meta.env.VITE_IMAGEM_MEDICO2;

      return (
      <div style={estiloAreaDocs()}>
      <h2>Profissionais de saúde</h2>
      <div style={{margin: 7, border: '1px solid #DDD', borderRadius: 8, padding: 60, display: 'flex', flexDirection: 'row', justifyContent: 'space-around'}}>
      
      <div className="profissionais">
         <img src={medico1}/>
         <p>{NomesMedicos.medico1}</p>

   </div>

      <div className="profissionais">
         <img src={medico2}/>
         <p>{NomesMedicos.medico2}</p>

   </div>

      <div className="profissionais">
         <p>{NomesMedicos.medico3}</p>

   </div>

  </div>
</div>
      )
}

export default App
