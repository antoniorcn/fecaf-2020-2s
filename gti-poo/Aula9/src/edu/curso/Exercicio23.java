package edu.curso;

public class Exercicio23 {
	
	public static double cilindroVolume(float altura, float raio) { 
		double areaCircunferencia = Math.pow(raio, 2) * Math.PI;
		double volume = areaCircunferencia * altura;
		return volume;
	}
	
	public static void main(String[] args) {
		System.out.println("Calculo do volume do cilindro");
		double v = cilindroVolume(36, 4);
		System.out.println("Volume do cilindro = " + v);
	}

}
