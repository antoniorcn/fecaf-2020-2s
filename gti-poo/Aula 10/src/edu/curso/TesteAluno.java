package edu.curso;

public class TesteAluno {
	
	public static void main(String[] args) {
		Aluno a1 = new Aluno();
		Aluno a2 = new Aluno();
		Aluno a3 = new Aluno();
		
		a1.idade = 17;
		a1.nome = "Joao Silva";
		
		a2.idade = 19;
		a2.nome = "Maria Rosa";
		
		a3.idade = 18;
		
		a1.fazAniversario();
		
	}

}
