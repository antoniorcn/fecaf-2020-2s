package edu.curso;

public class Exercicio16 {
	public static void main(String[] args) {
		int soma = 0;
		
		int i = 5;			// inicialização
		
		while(i <= 75) {	// condição
			soma = soma + i;
			System.out.println(i + " - " + soma);
			i = i + 1;		// incremento
		}
		
	}
}
