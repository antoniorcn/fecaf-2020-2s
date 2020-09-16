package edu.curso;

public class OperadoresRelacionais {

	public static void main(String args[]) { 
		int a = (10 + 4) / 2;       // 7
		int b = (25 / 3) + 2;      // 10
		float c = (34.5f + 14.9f) / 20.0f;     // 2.47
		int d = b % a;        // 3
		boolean e = a > b;        // false
		boolean f = c <= a;      // true
		boolean g = a == a;     // true
		
		System.out.println(a);
		System.out.println(b);
		System.out.println(c);
		System.out.println(d);
		System.out.println(e);
		System.out.println(f);
		System.out.println(g);
	}
}
