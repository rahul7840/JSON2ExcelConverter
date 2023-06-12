import { Module } from '@nestjs/common';
import { ImpotController } from './impot.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { ImpotService } from './impot.service';

@Module({
  imports: [
    MongooseModule.forRoot(
      '',
    )
  ],
  controllers: [ImpotController],
  providers: [ImpotService]
})
export class ImpotModule {}


