package edu.curso;
import java.util.Scanner;
public class Temperatura2 {
	public static void main(String args[]) { 
		System.out.println("Programa de dicas de temperatura");
		Scanner input = new Scanner(System.in);
		System.out.println("Digite a temperatura: ");
		int temperatura = input.nextInt();

		if (temperatura > 30) { 
			System.out.println("Est� muito calor");
		} else { 
			if (temperatura > 25) {
				System.out.println("Est� calor");
			} else { 
				if (temperatura > 15) { 
					System.out.println("Est� agrad�vel");
				} else { 
					if (temperatura > 0) {
						System.out.println("Est� frio");
					} else { 
						System.out.println("Est� muito frio");
					}
				}
			}
			System.out.println("Fim do programa");
		}
	}
}