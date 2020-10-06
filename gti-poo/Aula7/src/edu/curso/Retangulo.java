package edu.curso;

public class Retangulo {
	public static void main(String[] args) {
		int altura = 5;     // Linhas
		int largura = 10;   // Colunas
		for (int linha = 1; linha <= 5; linha = linha + 1) {
			System.out.println();
			for (int coluna = 1; coluna <= 10; coluna = coluna + 1) {
				System.out.print("*");
			}
		}
	}
}
