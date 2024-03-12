var idade = 6;

console.log(`se vc tem ${idade} anos`)

if(idade <16){
    console.log('n pode votar')
}else if(idade <18 || idade>65){
    console.log('voto opcional')
}else{
    console.log('voto obrigatorio')
}