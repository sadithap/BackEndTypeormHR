import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';
import { RegionsService } from './regions.service';
import { FileInterceptor } from '@nestjs/platform-express';

@Controller('regions')
export class RegionsController {
  constructor(private Services: RegionsService) {}

  @Get()
  public async getAll() {
    return this.Services.findAll();
  }
  @Get(':ids')
  public async getOne(@Param('ids') ids: number) {
    return this.Services.findOne(ids);
  }
  @Post()
  public async Create(@Body('name') name: string) {
    return this.Services.Insert(name);
  }
  @Put(':id')
  @UseInterceptors(FileInterceptor('file'))
  public async Update(
    @UploadedFile() file,
    @Body('name') name: string,
    @Param('id') id: number,
  ) {
    return this.Services.update(file, name, id);
  }
  @Put('i/:id')
  public async Update1(@Body('name') name: string, @Param('id') id: number) {
    return this.Services.update1(id, name);
  }
  @Delete(':id')
  public async Delete(@Param('id') id: number) {
    return this.Services.Delete(id);
  }
  @Post('upload')
  @UseInterceptors(FileInterceptor('file'))
  public async Upload(@UploadedFile() file, @Body('name') name: string) {
    return this.Services.Upload(file, name);
  }
}
