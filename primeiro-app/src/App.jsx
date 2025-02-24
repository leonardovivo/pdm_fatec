import './styles.css'
function App () {
  const estiloBotao = {marginTop: 12, paddingTop: 8, paddingBottom: 8, backgroundColor: 'blueviolet', color: 'white', border: 'none', borderRadius: 8, width: '100%'}
  const textoDoRotulo = 'Nome:'
  const obterTextoBotao = () => 'Enviar'
  const aoClicarNoBotao = () => alert('Botão foi clicado')
  return(
    <div
    style={{margin: 'auto', width: 768, backgroundColor: '#EEE', padding: 12, borderRadius: 8}}>
      <label 
      htmlFor="nome"
      className='rotulo'
      style={{display: 'block', marginBottom: 4}}>
        {textoDoRotulo}
      </label>
      <input type="text"
      id="nome"
      style={{paddingTop: 8, paddingBottom: 8, borderStyle: 'hidden', outline: 'none', width: '100%', borderRadius: 8}} />
      <button
      onClick={() => aoClicarNoBotao()}
      style={estiloBotao}>
        {obterTextoBotao()}
        </button>
    </div>
  )
}

  export default App