package edu.curso;

import java.util.Scanner;

public class PositivoNegativo {
	
	public static void main(String[] args) { 
		Scanner entrada = new Scanner(System.in);
		System.out.println("Programa para mostrar se o numero é Positivo");
		
		System.out.println("Por favor digite um número: ");
		int numero = entrada.nextInt();
		
		if (numero > 0) { 
			System.out.println("O número é positivo");
		} else {  
			if (numero == 0) { 
				System.out.println("O número é zero");
			} else { 
				System.out.println("O número é negativo");
			}
		}
		
		System.out.println("Fim do programa");
		
	}
}
