package edu.curso;

public class Livro {
	public String titulo;
	public String autor;
	public int paginas;
	public String corCapa;
	public String editora;
	public boolean aberto = false;
	
	public void abrir() { 
		System.out.println("Livro aberto");
		aberto = true;
	}
	
	public void fechar() { 
		System.out.println("Livro fechado");
		aberto = false;
	}
	
	public void ler() { 
		if (aberto) { 
			System.out.println("Lendo livro");
		} else { 
			System.out.println("É preciso abrir o livro antes de ler");
		}
	}
}
