var agora = new Date()
var hora = agora.getHours()

console.log(`agora são ${hora} então `)

if(hora < 5){
    console.log('boa madrugada')
}else if(hora < 13){
    console.log('bom dia')
}else if (hora < 19){
    console.log('boa tarde')
}else{
    console.log('boa noite')
}