package edu.curso;

public class Exercicio16 {
	public static void main(String[] args) {
		int soma = 0;
		
		int i = 5;			// inicializa��o
		
		while(i <= 75) {	// condi��o
			soma = soma + i;
			System.out.println(i + " - " + soma);
			i = i + 1;		// incremento
		}
		
	}
}
