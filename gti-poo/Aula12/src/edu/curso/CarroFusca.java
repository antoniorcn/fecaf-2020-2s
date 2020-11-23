package edu.curso;

public class CarroFusca {
	boolean portaAberta = true;
	int velocidadeAtual = 0;
	String potenciaMotor = "1500";
	boolean ligado = false;
	String cor = "azul";
	
	public void acelerar() { 
		if (ligado && portaAberta == false) { 
			velocidadeAtual = velocidadeAtual + 10;
		} else { 
			System.out.println("O carro n�o ir� acelerar at� que a porta esteja fechada e o carro ligado");
		}
	}
	
	public void frear() { 
		velocidadeAtual = 0;
	}
	
	public void abrirPorta() { 
		System.out.println("Porta est� aberta");
		portaAberta = true;
	}
	
	public void fecharPorta() {
		System.out.println("Porta est� fechada");
		portaAberta = false;
	}
	
	public void ligar() { 
		ligado = true;
	}
}
