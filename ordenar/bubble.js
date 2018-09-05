const { isSorted } = require('./_helpers')

// Esta funcao recebe uma lista
// e organiza essa lista usando
// o "Bubble Sort".
function bubbleSort(arr) { //[5, 4, 2, 7] /// || [6, 2, 9, 1] || [2, 6, 9, 1] || [2, 6, 9, 1] || [2 , 6, 1, 9]
	while(!isSorted(arr)) { //enquanto chama a função isSorted(arr) que checa se está ordenada de forma crescente ou nao, se tiver ordenada retorna verdadeiro se nao retorna falso. Equanto retorne falso a ação será verdadeira. para que a expressão seja verdadeira se adiciona a ! para inverter . ! => pega uma expressão que entrega true ou false e inverte a expressão.
		for (let i = 1; i < arr.length; i++) { // 1 ///  || 1 T || 2 F || 3 T || 4 F || 5
			if (arr[i - 1] > arr[i]) { //vai comparar elemento por elemento da lista, checa se o numero anterior ao numero atual é maior ou menor. // 5 > 4 ? TRUE /// || 6 > 2 ? TRUE || 6 > 9 ? FALSE || 9 > 1 ? TRUE || 2 > 6? FALSE || 
				const aux = arr[i] //salvo o valor do elemento numa constante, porque depois ele pega o elemento novo e coloca no lugar do antigo e coloca no a constante no lugar novo, sucessivamente. //4 /// || 2 || 1 ||
				arr[i] = arr[i - 1] // arr[1] = 5 / [5, 5, 2, 7] /// || arr[1] = 6 / [6, 6, 9, 1] || arr[4] = 9 / [2, 6, 9, 9]
				arr[i - 1] = aux // arr[0] = 4 / [4, 5, 2, 7] /// || arr[0] = 2 / [2, 6, 9, 1] || arr[3] = 1 / [2, 6, 1, 9] || 
			}
	    }
	}
	return arr
}


exports = module.exports = bubbleSort

// diferença ente let, const e var... o var vale para o escopo/programação toda (dentro da função), let só existe no escopo dela mas pode variar, const nao muda e só existe no escopo dela

//hoisting => pesquisar sobre


