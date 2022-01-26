import { Body, Controller, Get, Param, Req } from '@nestjs/common';
import { Request } from 'express';
import { AppService } from './app.service';

@Controller('cats')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('hello/:id')
  getHello(
    @Req() req: Request,
    @Body() body,
    @Param() param: { id: string },
  ): string {
    console.log(req);
    console.log(param);
    console.log(body);
    return this.appService.getHello();
  }
}
