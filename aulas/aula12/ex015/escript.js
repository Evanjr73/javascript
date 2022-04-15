function verificar() {
    var data =  new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.getElementById('res')
    if (fano.length == 0 || Number(fano) > ano){
        window.document.alert('[ERRO] Verefiue oa dados e tente novamente ')
    }  
    

    
}