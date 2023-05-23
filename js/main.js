
var contadorBraco = 0
var resultanteBraco = document.querySelector('#resultadobraco')


document.querySelector('#somarbraco').addEventListener('click', aumentaValorBraco)
document.querySelector('#subtrairbraco').addEventListener('click',diminuiValorBraco)


function aumentaValorBraco(){
    contadorBraco +=1
    resultanteBraco.value = contadorBraco
    
  
    if(resultanteBraco.value >=20){

        resultanteBraco.value = 20
        contadorBraco = 20
        console.log(resultanteBraco.value)
        console.log(contadorBraco)
    }
} 


function diminuiValorBraco(){
    contadorBraco -=1
    resultanteBraco.value = contadorBraco
    
    if(resultanteBraco.value <=0){

        resultanteBraco.value = 0
        contadorBraco = 0
    } 
 

}   










