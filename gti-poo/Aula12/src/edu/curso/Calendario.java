package edu.curso;

public class Calendario {


	public long converteGregorianoParaJuliana(
			int ano, int mes, int dia) { 
		long data_juliana = (1461 * (ano + 4800 + (mes - 14)/12) ) / 4 + 
				(36 * (mes - 2- 12 * ( (mes - 14)/ 12))) / 12 -
				(3 * ((ano + 4900 + (mes - 14)/ 12)/100))/4 + dia - 32075;
		return data_juliana;
	}
	
	public static void main(String[] args) {
		System.out.println("Programa conversor de data Gregoriano para Juliano");
		
		Calendario cal = new Calendario();
		long jul = cal.converteGregorianoParaJuliana(2020, 11, 22);
		
		System.out.println("Data Juliana para 22/11/2020 é : " + jul);
		
	}

}
