export interface CreateCartDTO {
  mail: string;
  cart: Cart[];
}

interface Cart {
  id: number;
  quantity: number;
}
