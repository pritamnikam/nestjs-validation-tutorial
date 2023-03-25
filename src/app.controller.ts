import { Controller, Get, Param, Body, Post, Query } from '@nestjs/common';
import { PostRouteDto } from './dto';

@Controller()
export class AppController {
  @Get('/user/:id')
  getParamRoute(@Param('id') id: number): string {
    console.log('id', id);
    console.log('typeof id', typeof id);

    return "getParamRoute()";
  }

  @Get('/user')
  getQueryRoute(@Query('id') id: number): string {
    console.log('id', id);
    console.log('typeof id', typeof id);

    return "getQueryRoute()";
  }

  @Post('/user')
  postRoute(@Body() dto: PostRouteDto): string {
    console.log('dto', dto);

    return 'postRoute()';
  }
}
