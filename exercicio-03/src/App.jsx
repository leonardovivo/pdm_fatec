import { useState } from 'react'

function App() {
  const [count, setCount] = useState(0)

    const estiloAreaDocs = () => {
      return {width: 1200, margin: 'auto', border: '1px solid black',
     backgroundColor: "#EEE", borderRadius: 6, padding: 10, textAlign: 'center'};
      }
      return (
      <div style={estiloAreaDocs()}>
      <h2>Profissionais de saúde</h2>
      </div>
      )
}

export default App
