package gti.curso;
import java.util.Scanner;
public class DadosAlunoCompleto {
	public static void main(String args[]) { 
		Scanner input = new Scanner(System.in);
		System.out.println("Programa de Matriculas");
		System.out.println("Digite o nome do aluno: ");
		String nome = input.nextLine();
		System.out.println("Digite o RA do aluno: ");
		String ra = input.nextLine();
		System.out.println("Digite a idade do aluno: ");
		int idade = input.nextInt();
		System.out.println("Digite a altura do aluno: "); 
		float altura = input.nextFloat();
		
		System.out.println("Seja bem vindo " + nome + 
				", seu RA é " + ra + 
				" a nossa faculdade, você está matriculado " + 
				"com sucesso e ficará na SALA A onde estão " +
				"os alunos com " + altura + " de altura");
	}
}
