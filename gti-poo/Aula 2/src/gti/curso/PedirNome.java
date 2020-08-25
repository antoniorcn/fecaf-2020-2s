package gti.curso;

import java.util.Scanner;

public class PedirNome {

	public static void main(String[] args) {
		Scanner scan = new Scanner(System.in);
		
		System.out.println("Pede o seu nome e te dá boas vindas");
		System.out.println("Por favor digite seu nome: ");
		
		String nome;
		nome = scan.nextLine();
		
		System.out.println("Seja bem vindo " + nome);
		
		scan.close();
	}

}
