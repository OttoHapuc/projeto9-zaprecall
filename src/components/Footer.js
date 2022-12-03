import styled from "styled-components"
export default function Footer() {
    return (
        <OFundo data-test="footer" >
            -quantidade- Concluidos
        </OFundo>
    )
}

const OFundo = styled.footer`
    width: 100%;
    min-height: 50px;
    background-color: #FFFFFF;
    position: fixed;
    bottom: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-family: 'Recursive';
    font-weight: 400;
    font-size: 18px;
    color: #333333;
    padding: 10px;
`
const Botoes = styled.button`
    display: flex;
    width: 80%;
    justify-content: space-between;
    margin: 20px;
`
/* Você vai precisar trocar a cor dos botões e alguns textos!
  VERDE = "#2FBE34"
  AMARELO = "#FF922E"
  VERMELHO = "#FF3030"
  CINZA = "#333333" 
*/