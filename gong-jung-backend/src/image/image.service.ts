import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Image } from './entities/image.entity';
import { TextTable } from './entities/text_table.entity';

@Injectable()
export class ImageService {
  constructor(
    @InjectRepository(Image)
    private imageRepository: Repository<Image>,
    @InjectRepository(TextTable)
    private textTableRepository: Repository<TextTable>,
  ) {}

  async createTextTable(textTableData: Partial<TextTable>): Promise<TextTable> {
    const textTable = this.textTableRepository.create(textTableData);
    return await this.textTableRepository.save(textTable);
  }

  async createImage(createImageDto: {
    path: string;
    textTableId: number;
  }): Promise<Image> {
    const image = this.imageRepository.create({
      path: createImageDto.path,
      textTable: { id: createImageDto.textTableId } as TextTable,
    });
    return await this.imageRepository.save(image);
  }

  async findTextTableById(id: number): Promise<TextTable | null> {
    return await this.textTableRepository.findOne({
      where: { id },
      relations: ['image'],
    });
  }

  async findAllTextTables(): Promise<TextTable[]> {
    return await this.textTableRepository.find({ relations: ['image'] });
  }
}
