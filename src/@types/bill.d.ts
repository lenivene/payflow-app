export type BillType = {
  id: string;
  title: string;
  price: number;
  date: string;
}

export type BillsType = Array<BillType>;