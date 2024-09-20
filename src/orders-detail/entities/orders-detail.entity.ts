import { Order } from 'src/orders/entities/order.entity';
import { Product } from 'src/products/entities/product.entity';
import {
    Column,
    Entity,
    JoinColumn,
    JoinTable,
    ManyToMany,
    OneToOne,
    PrimaryGeneratedColumn,
  } from 'typeorm';

  @Entity({
    name: 'orderDetails',
  })
  export class OrdersDetail {
    @PrimaryGeneratedColumn('uuid')
    id: string;
  
    @Column({
      type: 'decimal',
      precision: 10,
      scale: 2,
      nullable: false,
    })
    price: number;
  
    @OneToOne(() => Order, (order) => order.orderDetail)
    @JoinColumn({ name: 'order_id' })
    order: Order;
  
    @ManyToMany(() => Product, (product) => product.orderDetails)
    @JoinTable({ name: 'order_details_products' })
    products: Product[];
  }
  