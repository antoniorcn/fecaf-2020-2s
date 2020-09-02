package gti.curso;
import java.util.Scanner;
public class PedirDados {
	public static void main(String args[]) {
		Scanner input = new Scanner(System.in);
		System.out.println("Programa pede informações do aluno");
		
		System.out.println("Digite o seu nome: ");
		String nome;
		nome = input.nextLine();
		System.out.println("Fim do programa");
	}
}