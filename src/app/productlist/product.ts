export class Product {
  constructor(
    public pro_id: number,
    public pro_name: string,
    public pro_price: number,
    public pro_desc: string,
    public pro_qty: number,
    public pro_mfg: string,
    public pro_img: string
  ) {}
}

export interface Product_interface {
  pro_id: number;
  pro_name: string;
  pro_price: number;
  pro_desc: string;
  pro_qty: number;
  pro_mfg: string;
  pro_img: string;
}
