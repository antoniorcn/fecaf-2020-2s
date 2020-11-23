package edu.curso;

public class TesteCarroFusca {

	public static void main(String args[]) { 
		CarroFusca c1 = new CarroFusca();
		CarroFusca c2 = new CarroFusca();
		CarroFusca c3 = new CarroFusca();
		
		c2.cor = "verde";
		c3.cor = "amarelo";
		
		c1.ligar();
		//c1.fecharPorta();
		System.out.println("Velocidade Carro 1: " + c1.velocidadeAtual);
		c1.acelerar();
		c1.fecharPorta();
		c1.acelerar();
		// c1.frear();
		System.out.println("Velocidade Carro 1: " + c1.velocidadeAtual);
		
	}
}
