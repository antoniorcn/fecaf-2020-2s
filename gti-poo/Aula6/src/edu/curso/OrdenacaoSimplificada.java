package edu.curso;

import java.util.Scanner;

public class OrdenacaoSimplificada {
		public static void main(String args[]) { 
			Scanner scan = new Scanner(System.in);
			System.out.println("Program para ordena��o de n�meros");
			System.out.println("Digite um n�mero: ");
			int n1 = scan.nextInt();
			System.out.println("Digite outro n�mero: ");
			int n2 = scan.nextInt();
			System.out.println("Digite mais um n�mero: ");
			int n3 = scan.nextInt();
			
			if (n1 >= n2 && n2 >= n3) { 
				System.out.printf("%d - %d - %d %n", n3, n2, n1);
			} else if (n1 >= n3 && n3 >= n2) { 
				System.out.printf("%d - %d - %d %n", n2, n3, n1);
			} else if (n2 >= n1 && n1 >= n3) { 
				System.out.printf("%d - %d - %d %n", n3, n1, n2);
			} else if (n2 >= n3 && n3 >= n1) { 
				System.out.printf("%d - %d - %d %n", n1, n3, n2);
			} else if (n3 >= n1 && n1 >= n2) { 
				System.out.printf("%d - %d - %d %n", n2, n1, n3);
			} else { 
				System.out.printf("%d - %d - %d %n", n1, n2, n3);
			}
		}
}
