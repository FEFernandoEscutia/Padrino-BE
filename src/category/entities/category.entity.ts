import { Product } from 'src/products/entities/product.entity';
import {
    Column,
    Entity,
    ManyToOne,
    OneToMany,
    PrimaryGeneratedColumn,
  } from 'typeorm';
  

  
  @Entity({
    name: 'categories',
  })
  export class Category {
    @PrimaryGeneratedColumn('uuid')
    id: string;
  
    @Column({
      length: 50,
      nullable: false,
    })
    name: string;
  
    @OneToMany(() => Product, (product) => product.category)
    products: Product[];
  }
  