package edu.curso;

import java.util.Scanner;

public class PositivoNegativo {
	
	public static void main(String[] args) { 
		Scanner entrada = new Scanner(System.in);
		System.out.println("Programa para mostrar se o numero � Positivo");
		
		System.out.println("Por favor digite um n�mero: ");
		int numero = entrada.nextInt();
		
		if (numero > 0) { 
			System.out.println("O n�mero � positivo");
		} else {  
			if (numero == 0) { 
				System.out.println("O n�mero � zero");
			} else { 
				System.out.println("O n�mero � negativo");
			}
		}
		
		System.out.println("Fim do programa");
		
	}
}
