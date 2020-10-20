package edu.curso;

public class Ordenacao {
	public static void main(String[] args) {
		TesteFuncao.cabecalho("Antonio Rodrigues", "Ordenação");
		
		int v[] = {12, 34, 9, 2, 26};
		System.out.println("Vetor Original");
		for (int i = 0; i < 5; i++) { 
			System.out.println(v[i]);
		}
		for (int j = 0; j < 5; j++) { 
			for (int i = 0; i < 5 - 1; i++) { 
				if (v[i] > v[i+1]) { 
					int temp = v[i+1];
					v[i+1] = v[i];
					v[i] = temp;
				}
			}
		}
		System.out.println("Vetor Ordenado");
		for (int i = 0; i < 5; i++) { 
			System.out.println(v[i]);
		}
	}
}
