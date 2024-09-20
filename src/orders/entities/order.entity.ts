import {
    Column,
    Entity,
    JoinColumn,
    ManyToOne,
    OneToOne,
    PrimaryGeneratedColumn,
  } from 'typeorm';

import { User } from 'src/users/entities/user.entity';
import { OrdersDetail } from 'src/orders-detail/entities/orders-detail.entity';
  
  @Entity({
    name: 'orders',
  })
  export class Order {
    @PrimaryGeneratedColumn('uuid')
    id: string;
  
  
    @ManyToOne(() => User, (user) => user.orders)
    @JoinColumn({ name: 'user_id' }) 
    user: User;
  
    @Column()
    date: Date;
  
    @OneToOne(() => OrdersDetail, (orderDetail) => orderDetail.order)
    @JoinColumn({ name: 'order_id' })
    orderDetail: OrdersDetail;
  }
  