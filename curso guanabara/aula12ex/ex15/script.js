function verificar(){
    var data = new Date()
    var ano =  data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')

    if(fano.value.length == 0 || Number(fano.value) > ano){
        window.alert('[ERRO] Verifique os dados e tente novamente')
    }else{
        var fsex = document.getElementsByName('txtsex')
        var idade = ano - Number(fano.value)
        var genero =''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if(fsex[0].checked){
            genero = 'homem'
           
            if(idade >= 0 && idade < 21){
                img.setAttribute('src', 'crianca.jpg')
            }else if(idade >= 21 && idade < 60){
                img.setAttribute('src', 'homiJ.jpg')
            }else{
                img.setAttribute('src', 'vei.jpg')
            }

        }else if(fsex[1].checked){
            genero = 'mulher'

            if(idade >= 0 && idade < 21){
                img.setAttribute('src', 'crianca.jpg')
            }else if(idade >= 21 && idade < 60){
                img.setAttribute('src', 'muieJ.jpg')
            }else{
                img.setAttribute('src', 'veia.jpg')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = ` genero: ${genero}, idade calculada ${idade}`
        res.appendChild(img)
    }
}