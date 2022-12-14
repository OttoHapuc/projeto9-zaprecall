import GlobalStyle from "./assets/css/GlobalStyle";
import styled from "styled-components"
import Logo from "./components/Logo"
import Perguntas from "./components/Perguntas"
import Footer from "./components/Footer"
import { useState } from "react"
function App() {

  const [cards, setCards] = useState([
    { question: "O que é JSX?", answer: "Uma extensão da linguagem JavaScript", butt: "" },
    { question: "O React é __", answer: "Uma biblioteca JavaScript para construção de interfaces", butt: "" },
    { question: "Componentes devem iniciar com __", answer: "Letra maiúscula", butt: "" },
    { question: "Podemos colocar __ dentro do JSX", answer: "expressões", butt: "" },
    { question: "O ReactDOM nos ajuda __", answer: "Interagindo com a DOM para colocar componentes React na mesma", butt: "" },
    { question: "Usamos o npm para __", answer: "Gerenciar os pacotes necessários e suas dependências", butt: "" },
    { question: "Usamos props para __", answer: "Passar diferentes informações para componentes", butt: "" },
    { question: "Usamos estado (state) para __", answer: "Dizer para o React quais informações quando atualizadas devem renderizar a tela novamente", butt: "" }
  ])
  let numPergunta =1

  const[cardPronto, setCardPronto] = useState(0)
    return (
    <>
      <GlobalStyle />
      <Conteudo>

        <Logo />
        
        {cards.map((card) => <Perguntas
          key={card.question}
          card={card} 
          num={numPergunta++}
          cards={cards}
          setCards={setCards}
          cardPronto={cardPronto}
          setCardPronto={setCardPronto}
        />)}

        <Footer 
        cards={cards}
        card={cardPronto}
        />
        
      </Conteudo>
    </>
  );
}

export default App;

const Conteudo = styled.div`
  background-color: #FB6B6B;
  width: 100vw;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0px;
  padding: 0px 0px 80px 0px;
`
