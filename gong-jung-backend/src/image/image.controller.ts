import {
  Controller,
  Post,
  Param,
  Get,
  UseInterceptors,
  UploadedFile,
  Body,
  Res,
} from '@nestjs/common';
import { ImageService } from './image.service';
import * as fs from 'fs';
import * as path from 'path';
import * as os from 'os';

import { FileInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { TextTable } from './entities/text_table.entity';
import { Response } from 'express';

@Controller('image')
export class ImageController {
  constructor(private readonly imageService: ImageService) {}

  @Post()
  @UseInterceptors(
    FileInterceptor('file', {
      storage: diskStorage({
        destination: './uploads/temp', // 임시 경로에 저장
        filename: (req, file, cb) => {
          const uniqueSuffix =
            Date.now() + '-' + Math.round(Math.random() * 1e9);
          cb(null, uniqueSuffix + '-' + file.originalname);
        },
      }),
    }),
  )
  async uploadImage(
    @UploadedFile() file: Express.Multer.File,
    @Body() textTableData: Partial<TextTable>,
  ) {
    try {
      if (!file) {
        throw new Error('No file uploaded');
      }

      // 임시 경로에 저장된 파일 경로
      const tempImagePath = file.path;

      // TextTable을 먼저 저장하여 ID를 얻음
      const textTable = await this.imageService.createTextTable(textTableData);
      // 새로운 경로 생성
      const newImagePath = `./uploads/${textTable.id}/${file.filename}`;

      // 디렉토리가 존재하지 않으면 생성
      const newDir = path.dirname(newImagePath);
      if (!fs.existsSync(newDir)) {
        fs.mkdirSync(newDir, { recursive: true });
      }

      // 파일 이동
      fs.renameSync(tempImagePath, newImagePath);

      // Image 엔티티 생성 및 저장
      const image = await this.imageService.createImage({
        path: newImagePath,
        textTableId: textTable.id,
      });

      return { image, textTable };
    } catch (error) {
      console.error('Error uploading image:', error);
      throw new Error('Failed to upload image');
    }
  }

  @Get('file/:filename')
  async getImageFile(
    @Param('filename') filename: string,
    @Res() res: Response,
  ) {
    const filePath = path.join(__dirname, '../../uploads', filename);
    if (fs.existsSync(filePath)) {
      console.log('filePath', filePath);
      res.sendFile(filePath);
    } else {
      throw new Error('File not found');
    }
  }

  @Get('text-table/:id')
  async getTextTableById(@Param('id') id: string) {
    const textTable = await this.imageService.findTextTableById(Number(id));
    if (textTable) {
      return textTable;
    } else {
      throw new Error('TextTable not found');
    }
  }

  @Get('text-tables')
  async getTextTables() {
    console.log('getTextTables');
    const networkInterfaces = os.networkInterfaces();
    const ipAddresses = [];

    for (const interfaceName in networkInterfaces) {
      const interfaces = networkInterfaces[interfaceName];
      for (const iface of interfaces) {
        console.log('iface', iface);
        if (iface.family === 'IPv4' && !iface.internal) {
          ipAddresses.push(iface.address);
        }
      }
    }

    console.log('ipAddresses', ipAddresses);
    console.log('-----------------------------');
    const hostIp = process.env.HOST_IP;
    console.log(`Host IP: ${hostIp}`);

    return await this.imageService.findAllTextTables();
  }
}
