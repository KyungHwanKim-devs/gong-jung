import { Entity, Column, PrimaryGeneratedColumn, OneToOne } from 'typeorm';
import { TextTable } from './text_table.entity';

@Entity()
export class Image {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  path: string;

  @OneToOne(() => TextTable, (textTable) => textTable.image)
  textTable: TextTable;
}
