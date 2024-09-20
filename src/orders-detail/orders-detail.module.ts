import { Module } from '@nestjs/common';
import { OrdersDetailService } from './orders-detail.service';
import { OrdersDetailController } from './orders-detail.controller';

@Module({
  controllers: [OrdersDetailController],
  providers: [OrdersDetailService],
})
export class OrdersDetailModule {}
