package edu.curso;

public class FooBar {

	public static void main(String[] args) {
		for (int numero = 0; numero <= 100; numero++) {
			if (numero % 3 == 0 && numero % 5 == 0) { 
				System.out.println("baz");
			} else if (numero % 3 == 0) { 
				System.out.println("foo");
			} else if (numero % 5 == 0) { 
				System.out.println("bar");
			} else { 
				System.out.println(numero);
			}
		}
	}
}
