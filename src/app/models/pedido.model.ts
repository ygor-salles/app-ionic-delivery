/* eslint-disable @typescript-eslint/naming-convention */

interface ProductOrder {
  amount: number;
  meet_options: string;
  order: number | null;
  product: number;
  product_name: string;
  total_item: number;
}

export class Pedido {
  clientName: string;
  phone: number;
  cep: number;
  addressStreet: string;
  addressNumber: number;
  addressNeighborhood: string;
  addressCity: string;
  costFreigth: number;
  status: string;
  payment: string;
  withdraw: string;
  referencePoint: string;
  changeOfMoney: number;
  total: number;
  products: ProductOrder[];
}
