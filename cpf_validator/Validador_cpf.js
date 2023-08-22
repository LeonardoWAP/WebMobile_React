console.log("teste")

function TestaCPF(strCPF) {
    var Soma;
    var Resto;
    Soma = 0;
  if (strCPF == "00000000000") return false;

  for (i=1; i<=9; i++) Soma = Soma + parseInt(strCPF.substring(i-1, i)) * (11 - i);
  Resto = (Soma * 10) % 11;

    if ((Resto == 10) || (Resto == 11))  Resto = 0;
    if (Resto != parseInt(strCPF.substring(9, 10)) ) return false;

  Soma = 0;
    for (i = 1; i <= 10; i++) Soma = Soma + parseInt(strCPF.substring(i-1, i)) * (12 - i);
    Resto = (Soma * 10) % 11;

    if ((Resto == 10) || (Resto == 11))  Resto = 0;
    if (Resto != parseInt(strCPF.substring(10, 11) ) ) return false;
    return true;
}

function function_tal(){
    var input = document.querySelector("#CPF");
    var texto = input.value;

    let valid_cpf = TestaCPF(texto)
    

    if (valid_cpf){
        
        const botao = document.getElementById("button");
        botao.style.color = "green";

        const formulario = document.getElementById("forms");
        formulario.style.backgroundColor= "green";

        document.querySelector('#valid_or_not').innerHTML =  "Valido !";

        

    }else{
        
        const botao = document.getElementById("button");
        botao.style.color = "red";

        const formulario = document.getElementById("forms");
        formulario.style.backgroundColor= "red";

        document.querySelector('#valid_or_not').innerHTML =  "Invalido !";
        
    }

    

}




