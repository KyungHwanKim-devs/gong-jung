import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  OneToOne,
  JoinColumn,
} from 'typeorm';
import { Image } from './image.entity';

@Entity('text_table')
export class TextTable {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ nullable: true })
  orgCode: string;

  @Column({ nullable: true })
  unitCode: string;

  @Column({ nullable: true })
  docYear: string;

  @Column({ nullable: true })
  volNo: string;

  @Column({ nullable: true })
  detOrgCode: string;

  @Column({ nullable: true })
  detYear: string;

  @Column({ nullable: true })
  labelNo: string;

  @Column({ nullable: true })
  oldOrgName: string;

  @Column({ nullable: true })
  docDesc: string;

  @Column({ nullable: true })
  detDesc: string;

  @Column({ nullable: true })
  docNo: string;

  @Column({ nullable: true })
  detNo: string;

  @Column({ nullable: true })
  detailStatus: string;

  @Column({ nullable: true })
  sendDate: string;

  @Column({ nullable: true })
  oldOrgDocNo: string;

  @Column({ nullable: true })
  oldDocTerm: string;

  @Column({ nullable: true })
  docName: string;

  @Column({ nullable: true })
  userName: string;

  @Column({ nullable: true })
  detDecision: string;

  @Column({ nullable: true })
  startPage: string;

  @Column({ nullable: true })
  endPage: string;

  @Column({ nullable: true })
  detPage: string;

  @Column({ nullable: true })
  detSpecFlag1: string;

  @Column({ nullable: true })
  detSpecFlag2: string;

  @Column({ nullable: true })
  detSpecFlag3: string;

  @Column({ nullable: true })
  detSpecFlag4: string;

  @Column({ nullable: true })
  detSpecFlag5: string;

  @Column({ nullable: true })
  openFlag: string;

  @Column({ nullable: true })
  openGradeFlag1: string;

  @Column({ nullable: true })
  openGradeFlag2: string;

  @Column({ nullable: true })
  openGradeFlag3: string;

  @Column({ nullable: true })
  openGradeFlag4: string;

  @Column({ nullable: true })
  openGradeFlag5: string;

  @Column({ nullable: true })
  openGradeFlag6: string;

  @Column({ nullable: true })
  openGradeFlag7: string;

  @Column({ nullable: true })
  openGradeFlag8: string;

  @Column({ nullable: true })
  openGrade: string;

  @Column({ nullable: true })
  imagePath: string;

  @Column({ nullable: true })
  inputTime: string;

  @Column({ nullable: true })
  updateTime: string;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @OneToOne(() => Image)
  @JoinColumn()
  image: Image;
}
