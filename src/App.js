import { Container } from "react-bootstrap";
import GradeProdutos from "./componentes/GradeProdutos";
import BarraBusca from "./templates/BarraBusca";
import TabelaCarrinho from "./componentes/TabelaCarrinho"
import Cabecalho from "./templates/Cabecalho";
import { useEffect, useState } from "react";

function App() {
  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((resposta) => resposta.json())
      .then((produtos) => {
        setProdutos(produtos);
      });  
  },[]);

  const [produtos, setProdutos] = useState([]);
  const [listaCarrinho, setListaCarrinho] = useState([]);
  const [exibirFormulario, setExibirFormulario] = useState(true);


  /*var lista;
  if(lista = localStorage.getItem("carrinho") !== null){
      setListaCarrinho(JSON.parse(lista));
  }
  else{
    setListaCarrinho([]);
  }*/


  return (
  
    <div className="App">
      exibirFormulario?
        <Cabecalho />
        <BarraBusca setListaCarrinho={setListaCarrinho} listaCarrinho={listaCarrinho}/>
        <GradeProdutos listaProdutos={produtos} setListaCarrinho={setListaCarrinho} listaCarrinho={listaCarrinho}/>
        :
        <TabelaCarrinho listaCarrinho={listaCarrinho}/>
    </div>
  );
}

export default App;
