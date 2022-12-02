import styled from "styled-components"
import vira from "../assets/img/seta_virar.png"
import play from "../assets/img/seta_play.png"
export default function Perguntas() {
    return (
        <>
            <PerguntaFechada>
                <p>Pergunta 1</p>
                <img src={play} />
            </PerguntaFechada>
            <PerguntaAberta>
                <p>aqui jás a pergunta</p>
                <img src={vira} />
            </PerguntaAberta>
            <PerguntaAberta>
                <p>aqui jás a resposta</p>
                <OsBotoes>
                    <Botoes>Não lembrei</Botoes>
                    <Botoes>Quase não lembrei</Botoes>
                    <Botoes>Zap!</Botoes>
                </OsBotoes>
            </PerguntaAberta>
        </>
    )
}

const PerguntaFechada = styled.div`
    width: 300px;
    height: 35px;
    background-color: #FFFFFF;
    margin: 12px;
    padding: 15px;
    box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);
    border-radius: 5px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    > p {
        font-family: 'Recursive';
        font-style: normal;
        font-weight: 700;
        font-size: 16px;
        line-height: 19px;
        color: #333333;
    }
`
const PerguntaAberta = styled.div`
    width: 300px;
    margin: 12px;
    padding: 15px;
    min-height: 100px;
    background: #FFFFD5;
    box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);
    border-radius: 5px;
    font-family: 'Recursive';
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 22px;
    color: #333333;
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    > img{
        position: absolute;
        bottom: 10px;
        right: 10px;
    }
`
const OsBotoes = styled.div`
    display: flex;
    justify-content: space-between;
    margin: 6px;
`
const Botoes = styled.button`
    width: 90px;
    font-family: 'Recursive';
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 14px;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    color: #FFFFFF;
    background: blue;
    border-radius: 5px;
    border: 1px solid blue;
    padding:5px;
`