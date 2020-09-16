package edu.curso;

public class TemCerveja {
	public static void main(String args[]) { 
		// System.out.println("Inicio do Programa de cervejas");
		int cervejasNaGeladeira = 3;
		
		boolean haCervejaSuficiente = cervejasNaGeladeira > 5;
		
		if (haCervejaSuficiente == true) {
			System.out.println("Tem cerveja suficiente");
		} else { 
			System.out.println("Está faltando cerveja");
		}
		
		// System.out.println("Fim do Programa");
	}
}
