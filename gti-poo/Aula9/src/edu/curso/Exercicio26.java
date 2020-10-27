package edu.curso;
import java.util.Random;

public class Exercicio26 {
	
	public static void main(String[] args) {
		Random rnd = new Random();
		int[] vetor = new int[100];

		for(int i = 0; i < 100; i++) { 
			vetor[i] = rnd.nextInt(40) + 10;
		}
		
		int menor = vetor[0];
		for(int i = 0; i < 100; i++) { 
			System.out.println( vetor[i] );
			if (vetor[i] < menor) { 
				menor = vetor[i];
			}
		}
		System.out.println("Menor valor: " + menor);
	}
}

/*
 * Fa�a um programa que preencha um vetor com os 
 * n�meros de 10 at� 50 e depois fa�a uma rotina 
 * que mostre qual � o menor n�mero contido neste vetor.
 */