import { useState } from 'react'
import medico1 from './images/medico1.jpg'
import './styles.css'

function App() {

    const estiloAreaMedicos = () => {
      return {width: 1200, margin: 'auto', border: '1px solid black',
     backgroundColor: "#EEE", borderRadius: 6, padding: 10, textAlign: 'center'};
      }

      const NomesMedicos = {medico1: 'José da Silva', medico2: 'Maria da Silva', medico3: 'Jaqueline Mendes'};

      const medico2 = import.meta.env.VITE_IMAGEM_MEDICO2;

      return (
      <div style={estiloAreaMedicos()}>
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
         <img src="https://images.unsplash.com/photo-1591604021695-0c69b7c05981?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"/>
         <p>{NomesMedicos.medico3}</p>

   </div>

  </div>
</div>
      )
}

export default App
