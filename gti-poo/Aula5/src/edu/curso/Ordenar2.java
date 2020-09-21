package edu.curso;
import java.util.Scanner;
public class Ordenar2 {
	public static void main(String args[]) { 
		Scanner input = new Scanner(System.in);
		
		System.out.println("Programa para ordenar 2 numeros");	
		System.out.println("Digite um número: ");
		int a = input.nextInt();
		System.out.println("Digite outro número: ");
		int b = input.nextInt();
		if (a > b) { 
			System.out.println(b);
			System.out.println(a);
		} else { 
			System.out.println(a);
			System.out.println(b);
		}
	}

}
