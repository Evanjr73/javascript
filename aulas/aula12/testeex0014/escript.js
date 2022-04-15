function carregar(){
    let msg = window.document.getElementById('msg')
    let img = document.getElementById('img')
    
    let data = new Date()
    let hora = data.getHours()
    msg.innerHTML = 'agora são '+ hora+'horas'
    if (hora >= 0 && hora < 12){
        //bom dia
        img.src = "imagens/manhã2.png"
    }
    else if (hora >= 12 && hora < 18){
        img.src = 'imagens/tarde2.png'
        //boa tarde 
    }
    else{
        img.src = 'imagens/noite2.png'
        //boa noite
    }





}
