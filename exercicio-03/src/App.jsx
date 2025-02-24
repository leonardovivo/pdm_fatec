import { useState } from 'react'
import './styles.css'

function App() {
  const [count, setCount] = useState(0)

    const estiloAreaDocs = () => {
      return {width: 1200, margin: 'auto', border: '1px solid black',
     backgroundColor: "#EEE", borderRadius: 6, padding: 10, textAlign: 'center'};
      }
      return (
      <div style={estiloAreaDocs()}>
      <h2>Profissionais de saúde</h2>
      <div style={{margin: 7, border: '1px solid #DDD', borderRadius: 8, padding: 60, display: 'flex', flexDirection: 'row', justifyContent: 'space-around'}}>
      
      <div className="profissionais">

   </div>

      <div className="profissionais">

   </div>

      <div className="profissionais">

   </div>

  </div>
</div>
      )
}

export default App
