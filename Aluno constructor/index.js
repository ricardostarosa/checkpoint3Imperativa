
const aluno =  function Aluno(nome , quantidadeFaltas, notas){

    this.nome = nome;
    this.numeroFaltas = quantidadeFaltas;
    this.notas = notas;
    
    
    this.faltas = function(){
       
       
      this.numeroFaltas += 1;
      
    };

    this.calcularMedia = function(notas){

          notas = this.notas;
          let media = 0;
          let somaNotas = 0;
          
            if(notas.length > 0){
          
            notas.forEach(
                (a) => somaNotas += a
              ) 
            }else{

                return `nenhuma nota inserida`
            }

            media = somaNotas / notas.length;
            
          
            
            // `A média do aluno ${this.nome} é: ${media}.`

            return media;
           
    }

}

    

module.exports = aluno;

