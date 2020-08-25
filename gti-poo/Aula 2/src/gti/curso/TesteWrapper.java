package gti.curso;

public class TesteWrapper {
	public static void main(String[] args) {
		short idade1 = 32;
		String idade2 = "27";
		// String somaIdades = idade1 + idade2;
		
		short shortIdade2 = Short.parseShort(idade2);
		
		int somaIdades = idade1 + shortIdade2;
		
		System.out.println(somaIdades);
	}
}
