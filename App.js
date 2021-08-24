import React, {useState} from  'react';
import styled from 'styled-components/native';

const Tela = styled.View`
  flex : 1;
`
const Cabecalho = styled.View`
  background-color : #20232a;
  height: 65px;
  padding: 0 30px;
  padding-top: 20px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`

const Busca = styled.TextInput`
  color : #fff;
  font-size : 30px;
`
const Botao = styled.TouchableOpacity`
  
`
const BuscarImagem = styled.Image`
  width: 30px;
  height: 30px;
  
`
const Destaque = styled.View`
  backgound-color: black;
  
`
const Poster = styled.Image`
  width: 300px;
  height: 400px;
  
`
const Info = styled.View`
  backgound-color: #fff;
  height: 300px;
  
`
const Titulo = styled.Text`
  font-size: 36px;
  margin: 0 auto;
   
`

const Texto = styled.Text`
  font-size: 15px;
  
`

const Linha1 = styled.View`
  flex-direction: row;
  justify-content: space-around;
  flex-wrap: wrap;
  margin-top: 10px;
`

const Linha2 = styled.View`
  flex-direction: row;
  justify-content: space-around;
  flex-wrap: wrap;
  margin-top: 10px;
`

const Linha3 = styled.View`
  padding: 0 25px;
  flex-direction: row;
  justify-content: space-around;
  flex-wrap: wrap;
  margin-top: 10px;
`


export default function App () {

  return(
    <Tela>
      <Cabecalho>
        <Busca placeholder="Pesquisar..."/>  
        <Botao activeOpacity={0.3}>
          <BuscarImagem/> 
        </Botao>
      </Cabecalho> 
    </Tela>

  );
};