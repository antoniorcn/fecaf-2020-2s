package edu.curso;

import java.util.Scanner;

public class TesteFuncao {
	
	public static void cabecalho(String nomePrograma, String autor) {
		System.out.println("*******************************");
		System.out.println("** Programa: " + nomePrograma + " **");
		System.out.println("** Autor : " + autor + " **");
		System.out.println("*******************************");
	}
	
	public static int dobro(int numero) { 
		int d = numero * 2;
		return d;
	}
	
	public static void main(String[] args) { 
		System.out.println("Inicio do Programa");
		// Scanner scan = new Scanner(System.in);
		// String nome = scan.nextLine();
		// String autor = scan.nextLine();
		String nome = "Teste Função";
		String autor = "Antonio";
		cabecalho(nome, autor);
		
		int x = dobro(6);
		
		System.out.println("X: " + x);
		System.out.println("Fim do Programa");
	}

}
