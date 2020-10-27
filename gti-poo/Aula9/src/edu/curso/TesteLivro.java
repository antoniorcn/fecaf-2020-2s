package edu.curso;

public class TesteLivro {
	public static void main(String[] args) {
		Livro livro1 = new Livro();
		Livro livro2 = new Livro();

		livro1.titulo = "O pequeno principe";
		livro1.autor = "Alexander Perry";
		livro1.paginas = 90;
		livro1.corCapa = "branca";
		livro1.editora = "Racco";
		
		livro2.titulo = "Programação de Jogos com Java";
		livro2.autor = "Jonathan Harbour";
		livro2.editora = "Cengage";
		livro2.paginas = 407;
		livro2.corCapa = "azul";
		
		System.out.println("Paginas do livro1: " + livro1.paginas);
		
		livro1.abrir();
		livro2.abrir();
		livro2.fechar();
		
		livro1.ler();
		livro2.ler();
		livro2.ler();
		
		livro2.abrir();
		livro2.ler();
	}
}


