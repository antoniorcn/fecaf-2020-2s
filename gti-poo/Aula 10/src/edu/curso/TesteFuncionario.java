package edu.curso;

public class TesteFuncionario {
	
	public static void main(String[] args) {
		
		Funcionario joao = new Funcionario();
		Funcionario maria = new Funcionario();
		
		joao.adicionarBeneficios(1000, 100, 200);
		maria.adicionarBeneficios(1100, 150, 230, 100, 30);
		
		System.out.println("Contracheque do João: " + joao.salario);
		System.out.println("Contracheque da Maria: " + maria.salario);
	}

}
