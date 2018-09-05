// Esta funcao checa se um
// array esta organizado ou nao.
function isSorted(arr) { //criou a função isSorted(arr) verifica se a lista esta ordenada de forma crescente ou nao
    for (var i = 1; i < arr.length; i++) { //vai comparar, para a variavel i=1 i,"enquanto i for menor que o comprimento da minha lista, adicione 1," i menor que o tamanho da posição, encrementa mais 1, começando pelo index 1, ele vai adicionando 1 ao valor de ir, se for menor que o comprimento da lista ele continuara adicionando.
        if (arr[i - 1] > arr[i]) return false //se o elemento for menor que 1, se tiver ordenada, nao siga o processo
    }

    return true //se for veradeiro retorne novamente com a função, ou seja, vai enviar dizendo que está desorganizado.
}

exports = module.exports = {
	isSorted
}