const listaAlunos = require('../lista alunos');

let curso = {

    nome: "programação-imperativa",
    notaAprovacao: 6,
    maximoFalta: 3,
    listaAlunos: listaAlunos,
    incluirAluno: function(aluno){

        if(aluno) {
            
            this.listaAlunos.push(aluno);
            return true;

        }else{

            return `insira um aluno.`;
            
        } 
    },
    
    checarAprovacao: function(aluno){

            if(!(aluno.length > 0)){

                if(aluno.calcularMedia() < this.notaAprovacao || aluno.numeroFaltas > this.maximoFalta){

                    return false;
                
                }else{
    
                    if(aluno.calcularMedia() >= this.notaAprovacao && aluno.numeroFaltas < this.maximoFalta){
          
                            return true;
                    
                    }else if(aluno.numeroFaltas === this.maximoFalta){
          
                          if((aluno.calcularMedia()) > (this.notaAprovacao + this.notaAprovacao/10)){
          
                              return true;
          
                          }else{
    
                            return false;
                          } 
          
                    }else{
          
                          return false;
                    } 
    
                }

            }else{

                     let lista = this.listaAlunos.map(

                        aluno => {

                            if(aluno.calcularMedia() < this.notaAprovacao || aluno.numeroFaltas > this.maximoFalta){

                                return false
                            
                            }else{
                
                                if(aluno.calcularMedia() >= this.notaAprovacao && aluno.numeroFaltas < this.maximoFalta){

                                    return true
                                        
                                
                                }else if(aluno.numeroFaltas === this.maximoFalta){
                      
                                      if((aluno.calcularMedia()) > (this.notaAprovacao + this.notaAprovacao/10)){
                      
                                        return true
                      
                                      }else{
                
                                        return false
                                      } 
                      
                                }else{
                      
                                    return false
                                } 
                                    
                            }
                            
                        }
                    )

                    return lista
            }

            
           
    },

    
}


// ==== Executar código na pasta: curso =======

// primeira execução - descomentar e comentar.




//------------------ início código -------------

// curso.incluirAluno(listaAlunos[2]);

console.log(curso.listaAlunos);

//------------------ fim código -------------



// ============ Divisão =============

// segunda execução - descomentar e comentar.



//------------------ início código -------------
 
console.log(curso.checarAprovacao(listaAlunos[2]));

console.log(curso.checarAprovacao(listaAlunos));

//------------------ fim código -------------





