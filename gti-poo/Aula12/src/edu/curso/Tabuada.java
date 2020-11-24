package edu.curso;

import java.util.Scanner;

public class Tabuada {
	public static void main(String[] args) {
		Scanner scan = new Scanner(System.in);
		System.out.println("Digite um numero para calcular a tabuada: ");
		int numero = scan.nextInt();
		
		for (int i = 0; i <= 10; i++) { 
			int resposta = numero * i;
			System.out.println(numero + " X " + i + " = " + resposta);
		}
		scan.close();
	}
}
