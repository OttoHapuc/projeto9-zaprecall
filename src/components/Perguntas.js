import styled from "styled-components"
import vira from "../assets/img/seta_virar.png"
import play from "../assets/img/seta_play.png"
import win from "../assets/img/icone_certo.png"
import ahh from "../assets/img/icone_quase.png"
import loser from "../assets/img/icone_erro.png"

import {useState} from "react"
export default function Perguntas({card, num}) {
    const [theCard, setTheCard] = useState(true);
    const [resp, setResp] = useState(true);
    const [cor, setCor] = useState("#333333");


    function abrirPergunta(){
        setTheCard(false);
    }
    function abrirResposta(){
        setResp(false);
    }

    const imagens = [play, win, ahh, loser]
    const [botao, setBotao] = useState(0);
    const [habilitathrough, setHabilitaThrough] = useState(false)

    function NaoLembrei(){ 
        setTheCard(true); 
        setResp(true); 
        setBotao(3);
        setHabilitaThrough(true);
        setCor("#FF3030")
    }
    function QuaseLembrei(){ 
        setTheCard(true); 
        setResp(true); 
        setBotao(2);
        setHabilitaThrough(true);
        setCor("#FF922E")
    }
    function Zap(){ 
        setTheCard(true); 
        setResp(true); 
        setBotao(1);
        setHabilitaThrough(true);
        setCor("#2FBE34")
    }

    return (
        <>
            {theCard && <PerguntaFechada 
            encerraQuestao = {habilitathrough}
            cor={cor}>
                <p>Pergunta {num}</p>
                <img onClick={()=>abrirPergunta()} src={imagens[botao]} />
            </PerguntaFechada>}

            {!theCard && resp && <PerguntaAberta>
                <p>{card.question}</p>
                <img onClick={()=>abrirResposta()} src={vira} />
            </PerguntaAberta>}

            {!resp && <PerguntaAberta>
                <p>{card.answer}</p>
                <OsBotoes>
                    <Botoe1 onClick={()=>NaoLembrei()}>Não lembrei</Botoe1>
                    <Botoe2 onClick={()=>QuaseLembrei()}>Quase não lembrei</Botoe2>
                    <Botoe3 onClick={()=>Zap()}>Zap!</Botoe3>
                </OsBotoes>
            </PerguntaAberta>}
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
        color: ${prop => prop.cor};
        text-decoration: ${prop => prop.encerraQuestao ?  'line-through' : ""}
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
const Botoe1 = styled.button`
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
    background-color: #FF3030;
    border-radius: 5px;
    border: none;
    padding:5px;
`
const Botoe2 = styled.button`
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
    background-color: #FF922E;
    border-radius: 5px;
    border: none;
    padding:5px;
`
const Botoe3 = styled.button`
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
    background-color: #2FBE34;
    border-radius: 5px;
    border: none;
    padding:5px;
`