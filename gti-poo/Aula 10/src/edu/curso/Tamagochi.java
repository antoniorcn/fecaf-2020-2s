package edu.curso;

import java.util.Scanner;

public class Tamagochi {

	public static void main(String[] args) {
		Scanner scan = new Scanner(System.in);
		Dinossauro skeep = new Dinossauro();
		Dinossauro rex = new Dinossauro();
		skeep.comer();
		skeep.comer();
		rex.comer();
		
		boolean jogar = true;
		while(jogar) {
			System.out.println("\nO que deseja que o Skeep faça agora?");
			System.out.println("(P)ular\t\t(C)orrer\tCo(M)er");
			System.out.println("(B)rincar\tTomar (S)ol\tFicar na S(O)mbra");
			System.out.println("(I)nformação  e(X)it - Para Sair");
			String texto = scan.nextLine().toUpperCase();
			char opcao = texto.charAt(0);
			if (opcao == 'P') { 
				skeep.pular();
			} else if (opcao == 'C') { 
				skeep.correr();
			} else if (opcao == 'M') { 
				skeep.comer();
			} else if (opcao == 'B') { 
				skeep.brincar();
			} else if (opcao == 'S') { 
				skeep.tomarSol();
			} else if (opcao == 'O') { 
				skeep.ficarNaSombra();
			} else if (opcao == 'I') { 
				skeep.informar();
			} else if (opcao == 'X') { 
				jogar = false;
			}
		}
		
		System.out.println("Fim do jogo do Tamagochi");
	}
}
