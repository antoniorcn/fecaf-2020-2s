package edu.curso;

public class Exercicio16ComFor {
	public static void main(String[] args) {
		int soma = 0;
		
		for (int i = 5; i <= 75; i = i + 1) {
			soma = soma + i;
			System.out.println(i + " - " + soma);
		}	
	}
}
