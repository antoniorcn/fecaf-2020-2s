package edu.curso;

import java.util.Scanner;

public class Conselheiro21 {

	public static void main(String[] args) {
		Scanner scan = new Scanner(System.in);
		System.out.println("Por favor digite a soma das suas cartas");
		int soma = scan.nextInt();
		if (soma <= 10) { 
			System.out.println("Sem d�vida compre mais uma carta");
		} else if (soma > 10 && soma <= 15) {
			System.out.println("H� um risco, mas aconselho a comprar mais uma carta");
		} else if (soma > 15 && soma <= 20) { 
			System.out.println("Aconselho a parar de jogar");
		} else if (soma == 21) { 
			System.out.println("Voc� j� venceu, n�o precisa comprar mais nada");
		} else if (soma > 21) { 
			System.out.println("Que pena... Voc� perdeu");
		}
		scan.close();
	}

}
