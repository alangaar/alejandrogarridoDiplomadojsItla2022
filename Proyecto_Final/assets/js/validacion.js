/*function soloNumeross(evt){
    if(window.event){
        keynum = evt.keyCode;
    }
    else{
        keynum = evt.which;
    }

    if(keynum < 47 && keynum > 58 || keynum == 8 || keynum == 13){
        return true;
    }
    else{
        alert("Usted intenta ingresar un caracter invalido, recuerde solo ingresar numeros");
    }
}*/


function soloNumeros() {
    return event.charCode >= 48 && event.charCode <= 57

}