package edu.curso;

public class Vetor {
	public static void main(String[] args) {
		System.out.println("*******************************");
		System.out.println("** Programa: Teste de Vetor  **");
		System.out.println("** Autor : Antonio Rodrigues **");
		System.out.println("*******************************");
		
		System.out.println("Inicio do programa");
		int[] vetor = new int[10];
		
		for (int i = 0; i < 10; i++) { 
			vetor[i] = i + 10;
		}
		
		// vetor[5] = 500;
		
		// Mostrar os dados de um vetor na tela
		for (int i = 0; i < 10; i++) { 
			System.out.println(vetor[i]);
		}
		
		
		// Somar valores de um vetor
		int soma = 0;
		for (int i = 0; i < 10; i++) { 
			soma = soma + vetor[i];
		}
		System.out.println("Total: " + soma);
		
		// Descobrir qual é o maior numero do vetor
		int maior = vetor[0];
		for (int i = 0; i < 10; i++) { 
			if (vetor[i] > maior) {
				maior = vetor[i];
			}
		}
		System.out.println("Maior: " + maior);
		
		
		// Descobrir qual é o menor número do vetor
		int menor = vetor[0];
		for (int i = 0; i < 10; i++) { 
			if (vetor[i] < menor) {
				menor = vetor[i];
			}
		}
		System.out.println("Menor: " + menor);
		System.out.println("Fim do programa");
	}
}
