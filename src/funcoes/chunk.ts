/**
 * Cria um array de grupos de elementos divididos em tamanho máximo igual ao parâmetro
 * "tamanho". O último elemento deste novo array deverá conter o restante dos itens,
 * caso a divisão não seja perfeitamente correta.
 * 
 * > Importante: O parâmetro "valores" não deve ter sua estrutura alterada.
 * 
 * ex.: chunk([1, 2, 3, 4, 5], 2) === [[1, 2], [3, 4], [5]]
 * 
 * @param valores array de números que deverão ser quebrados em grupos.
 * @param tamanho numero que representa o tamanho máximo de cada grupo.
 * @returns 
 */
export const chunk = (valores: number[], tamanho: number): number[][] => {
  let quantidadeVetores = Math.ceil(valores.length / tamanho);
  const chunkArray = [];

  for (let i = 1; i <= quantidadeVetores; i++) {
    const start = (i - 1) * tamanho;
    const end = i * tamanho; 
    const vetor = valores.slice(start, end);
    chunkArray.push(vetor);
  }

  return chunkArray;
};