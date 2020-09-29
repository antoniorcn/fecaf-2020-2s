package edu.curso;

public class ExemploLacoFor {

	public static void main(String[] args) { 
		
		System.out.println("Inicio do programa");
		//  Inicialização    condição      incremento
		for (int i = 1;      i <= 5;      i = i + 1) {  
			System.out.println("HiHappy - Toys");
			if (i == 3) { 
				break;
			}
			System.out.println("Numero 1" + 105 + " ---- " + i + " final");
		}
		
		System.out.println("Fim do programa");
		
	}
}
