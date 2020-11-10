package edu.curso;

public class Funcionario {
	float salario;
	
	public void adicionarBeneficios(float salario, float ... beneficios) { 
		this.salario = salario;
		for (int i = 0; i < beneficios.length; i++) {
			this.salario += beneficios[i];
		}
	}

}
