import React from 'react';
import { Text, View } from 'react-native';
function App() {
  console.log("Função APP() está sendo iniciada"); 
  const a = 60;
  var b = 80;
  let c = 0;
  console.log("Variáveis iniciadas com sucesso");
  let resultado = (a + b) / c;
  console.log("Resultado calculado com sucesso");

  let nome = "Antonio Rodrigues";
  console.log("Tipo da variavel Nome: ");
  console.log(typeof(nome));

  let x = null;
  console.log("Tipo da variavel X: ");
  console.log(typeof(x));

  // Formula para calculo de média aritmética
  /*
  Esta formula é usada para calcular
  todas as notas médias dos alunos em 
  uma sala de aula
  */

  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent:"center"}}>
      <Text style={{color: 'red'}}>Expressão Matematica:</Text>
      <Text style={{color: 'blue'}}>{a} * {b} / {c} = {resultado}</Text>
    </View>
  );
}
export default App;
