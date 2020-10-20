package edu.curso;

public class Triangulo {
	public static void main(String[] args) {
		for (int lin=0; lin<5;lin++) { 
			for (int col=0; col<(5 - lin); col++) { 
				System.out.print(" ");
			}
			for (int col=0; col<=lin; col++) { 
				System.out.print("*");
			}
			System.out.println();
		}
	}
}

/*

    *
   **
  ***
 ****
*****

*/