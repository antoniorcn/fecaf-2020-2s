import React, { Fragment } from 'react';
import { Text, View } from 'react-native';


// const imprimeTexto = (texto) => {
//   return (<Text>{texto}</Text>);
// }

// const imprimeTexto = texto =>
//   (<Text style={{color: "blue"}}>{texto}</Text>)

const imprimeTexto = texto =>
  (<Text>{texto}</Text>)  

// function quadro(nomeFaculdade, texto, nomeAutor) { 
//   return (
//     <Fragment>
//       <Text>##############################</Text>
//       <Text>#  Faculdade: {nomeFaculdade}    #</Text>
//       <Text>#  {texto}   #</Text>
//       <Text>#  feito por: {nomeAutor}   #</Text>
//       <Text>##############################</Text>
//     </Fragment>
//   );
// }

const quadro = (nomeFaculdade, texto, nomeAutor) => {
    return (
      <Fragment>
        {imprimeTexto("##############################")}
        {imprimeTexto(`#  Faculdade: ${nomeFaculdade}    #`)}
        {imprimeTexto(`#  ${texto}   #`)}
        {imprimeTexto(`#  feito por: ${nomeAutor}   #`)}
        {imprimeTexto("##############################")}
      </Fragment>
    );
  }

export default function App() {
  return (
    <View>
      {quadro("FECAF", "Exercício do Quadro", "Antonio Carvalho")}
    </View>
  );
}