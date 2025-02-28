import Pedido from "./Pedidos"
import Cartao from "./cartao"
import Feedback from "./feedback"

const App = () => {
  const textoOk = 'Já chegou'
  const textoNOK = 'Ainda não chegou'
  const funcaoOK = () => alert('Obrigado pelo feedback')
  const funcaoNOK = () => aler('Verificaremos o que houve')
  const componenteFeedback = <Feedback textoOk={textoOk} textoNOK={textoNOK}
  funcaoOK={funcaoOK} funcaoNOK={funcaoNOK}/>
  return (
    <div className="container border rounded mt-2">
      <div className="row">

        <div className="col-sm-12 col-md-6 col-xxl-3">
          <Cartao
            cabecalho="22/02/2025">
            <Pedido
              icone="fa-hard-drive"
              titulo="SSD"
              descricao="SSD Kingston A400 - SATA" />
              {componenteFeedback}
          </Cartao>
        </div>

        <div className="col-sm-12 col-md-6 col-xxl-3">
          <Cartao
            cabecalho="20/02/2025">
            <Pedido
              icone="fa-laptop"
              titulo="Notebook"
              descricao="Notebook Dell 1]i7 16Gb" />
              {componenteFeedback}
          </Cartao>
        </div>

        <div className="col-sm-12 col-md-6 col-xxl-3">
          <Cartao
            cabecalho="23/02/2025">
            <Pedido
              icone="fa-computer-mouse"
              titulo="Mouse"
              descricao="Mouse sem fio Microsoft" />
              {componenteFeedback}
          </Cartao>
        </div>

        <div className="col-sm-12 col-md-6 col-xxl-3">
          <Cartao
            cabecalho="21/02/2025">
            <Pedido
              icone="fa-keyboard"
              titulo="Teclado"
              descricao="Teclado sem fio Microsoft" />
              {componenteFeedback}
          </Cartao>
        </div>

      </div>

    </div>
  )
}

export default App