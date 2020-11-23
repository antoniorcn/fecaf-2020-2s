package edu.curso;
import java.util.Scanner;
public class NumeroAusente {
	public static void main(String[] args) {
		int numerosOficiais[] = {0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10};
		Scanner scan = new Scanner(System.in);
		System.out.println("Digite os numeros separados por espaço");
		String linha = scan.nextLine();
		String textos[] = linha.split(",");
		for (int i = 0; i < textos.length; i++) { 
			int numero = Integer.parseInt(textos[i]); 
			for (int j = 0; j < numerosOficiais.length; j++) { 
				if (numerosOficiais[j] == numero) { 
					numerosOficiais[j] = -1;
				}
			}
		}
		System.out.print("Saida Ausente [");
		for (int numero : numerosOficiais) { 
			if (numero != -1) { 
				System.out.print(numero + ", ");
			}
		}
		System.out.println("]");
		scan.close();
	}
}
