package edu.curso;

import java.util.Scanner;

public class Conselheiro21 {

	public static void main(String[] args) {
		Scanner scan = new Scanner(System.in);
		System.out.println("Por favor digite a soma das suas cartas");
		int soma = scan.nextInt();
		if (soma <= 10) { 
			System.out.println("Sem dúvida compre mais uma carta");
		} else if (soma > 10 && soma <= 15) {
			System.out.println("Há um risco, mas aconselho a comprar mais uma carta");
		} else if (soma > 15 && soma <= 20) { 
			System.out.println("Aconselho a parar de jogar");
		} else if (soma == 21) { 
			System.out.println("Você já venceu, não precisa comprar mais nada");
		} else if (soma > 21) { 
			System.out.println("Que pena... Você perdeu");
		}
		scan.close();
	}

}
