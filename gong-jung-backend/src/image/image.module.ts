import { Module } from '@nestjs/common';
import { ImageService } from './image.service';
import { ImageController } from './image.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Image } from './entities/image.entity';
import { TextTable } from './entities/text_table.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Image, TextTable])],
  controllers: [ImageController],
  providers: [ImageService],
})
export class ImageModule {}
