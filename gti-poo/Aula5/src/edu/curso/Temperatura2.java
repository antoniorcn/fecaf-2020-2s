package edu.curso;
import java.util.Scanner;
public class Temperatura2 {
	public static void main(String args[]) { 
		System.out.println("Programa de dicas de temperatura");
		Scanner input = new Scanner(System.in);
		System.out.println("Digite a temperatura: ");
		int temperatura = input.nextInt();

		if (temperatura > 30) { 
			System.out.println("Está muito calor");
		} else { 
			if (temperatura > 25) {
				System.out.println("Está calor");
			} else { 
				if (temperatura > 15) { 
					System.out.println("Está agradável");
				} else { 
					if (temperatura > 0) {
						System.out.println("Está frio");
					} else { 
						System.out.println("Está muito frio");
					}
				}
			}
			System.out.println("Fim do programa");
		}
	}
}