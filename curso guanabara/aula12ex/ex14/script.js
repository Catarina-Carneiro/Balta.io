function carregar(){

    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
  
    msg.innerHTML = `Agora são ${hora} horas.`

    if(hora >= 0 && hora <= 12){
        //BOM DIA
        img.src = 'manhã.jpg'
        document.body.style.background ='#e2cd9f'
        console.log('manhã')

    } else if( hora >= 13 && hora <= 18){
        //BOA TARDE
        img.src = 'tarde.jpg'
        document.body.style.background ='#e7cd9f'
        console.log('tarde')

    } else{
        //BOA NOITE
        img.src = 'noite.jpg'
        document.body.style.background ='#e99d9f'
        console.log('noite')
    }
}