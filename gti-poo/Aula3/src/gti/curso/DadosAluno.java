package gti.curso;
import java.util.Scanner;
public class DadosAluno {
	public static void main(String[] args) {
		Scanner entrada = new Scanner(System.in);
		System.out.println("Programa para pedir dados do aluno");
		System.out.println("Digite seu RA:");
		String ra = entrada.nextLine();
		System.out.println("Olá aluno, seu RA é: " + ra);
	}

}
