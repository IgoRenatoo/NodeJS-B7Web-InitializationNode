type Item = {
  produto: string,
  valor: number
};

const product: Item[] = [
  {produto: 'Amora', valor: 10},
  {produto: 'Abacaxi', valor: 20},
  {produto: 'Banana', valor: 30}
];

export const displayItem = {
  getAll: () => {
    return product;
  }
};