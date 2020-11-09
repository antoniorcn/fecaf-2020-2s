package edu.curso;
public class Dinossauro {
	private float energia;
    private float velocidade;
    private float temperatura;
    private int humor;   
    public void pular() { 	
    	if (this.energia > 1) { 
	    	this.energia = this.energia - 1;
	    	this.humor = this.humor + 2;
	    	System.out.printf("Skeep está pulando com felicidade, "
	    			+ "seu humor esta em %d%% %n", this.humor);
    	} else { 
    		System.out.println("O Skeep não tem energia suficiente para pular");
    	}
    }
    public void correr() { 
    	if (this.energia > 1) { 
	    	this.energia = this.energia - 1;
	    	this.humor = this.humor + 3;
	    	System.out.printf("Skeep ficou mais alegre seu humor "
	    			+ "esta em %d%% %n", this.humor);
    	} else { 
    		System.out.println("O Skeep não tem energia para correr");
    	}
    	
    }
    
    public void comer() {
    	this.energia = this.energia + 5;
    	System.out.printf("Skeep esta com %5.2f energia%n", 
				this.energia);
    }
    
    public void brincar() {
    	if (this.energia > 1) { 
	    	this.energia = this.energia - 2;
	    	this.humor = this.humor + 8;
	    	System.out.printf("Skeep está brincando alegremente, "
	    			+ "seu humor esta em %d%% %n", this.humor);
    	} else { 
    		System.out.println("O Skeep não tem energia suficiente para brincar");
    	}
    }
    
    public void tomarSol() {
    	if (this.energia > 1) { 
    		this.energia = this.energia - 1;
    		this.velocidade = this.velocidade + 1;
    		System.out.printf("Skeep esta com %5.2f velocidade%n", 
    				this.velocidade);
    	} else { 
    		System.out.println("Skeep não possui energia "
    				+ "para gerar velocidade");
    	}
    	
    }
    
    public void ficarNaSombra() {
    	if (this.humor > 1) { 
    		this.humor = this.humor - 1;
    		this.energia = this.energia + 5;
    		System.out.printf("Skeep esta com %5.2f energia%n", 
    				this.energia);
    	} else { 
    		System.out.println("Skeep está muito "
    				+ "deprimido para ficar na sombra");
    	}
    }
    
    public void informar() { 
        System.out.println("-------------------------------");
    	System.out.println("Dinossauro Skeep");
    	System.out.printf("Energia: \t\t%5.2f%n", this.energia);
    	System.out.printf("Velocidade: \t\t%5.2f%n", this.velocidade);
    	System.out.printf("Temperatura: \t\t%5.2f%n", this.temperatura);
    	System.out.printf("Humor: \t\t\t   %d%%%n%n", this.humor);
    }
}
