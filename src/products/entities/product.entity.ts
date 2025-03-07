import { Category } from 'src/category/entities/category.entity';
import { OrdersDetail } from 'src/orders-detail/entities/orders-detail.entity';
import {
    Column,
    Entity,
    JoinColumn,
    JoinTable,
    ManyToMany,
    ManyToOne,
    PrimaryGeneratedColumn,
  } from 'typeorm';
  import { v4 as uuid } from 'uuid';

  
  @Entity({
    name: 'products',
  })
  export class Product {
    @PrimaryGeneratedColumn('uuid')
    id: string = uuid();
  
    @Column({
      length: 50,
      nullable: false,
      unique:true
    })
    name: string;
  
    @Column({
      nullable: false,
    })
    description: string;
  
    @Column({
      type: 'decimal',
      precision: 10,
      scale: 2,
      nullable: false,
    })
    price: number;
  
    @Column({
      nullable: false,
    })
    stock: number;
  
    @Column({
      nullable: true,
      default: 'https://agrimart.in/index.php/home/vendor_profile/get_slider/',
    })
    imgUrl: string;
  
    @ManyToOne(() => Category, (category) => category.products, {
      nullable: false,
      eager: true, 
    })
    @JoinColumn({ name: 'category_id' }) 
    category: Category
  
    @ManyToMany(() => OrdersDetail, (orderDetail) => orderDetail.products,{
      eager: true, 
    })
    @JoinTable({name:"order_details_products"})
    orderDetails: OrdersDetail[];
  }
  