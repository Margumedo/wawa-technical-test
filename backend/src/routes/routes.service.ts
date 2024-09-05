import { HttpException, HttpStatus, Injectable, InternalServerErrorException, NotFoundException } from '@nestjs/common';
import { CreateRouteDto } from './dto/create-route.dto';
import { UpdateRouteDto } from './dto/update-route.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { Prisma } from '@prisma/client';

@Injectable()
export class RoutesService {

  constructor(private prismaService: PrismaService) { }

  async create(createRouteDto: CreateRouteDto) {
    try {
      return await this.prismaService.route.create({ data: createRouteDto });

    } catch (error) {
      throw new HttpException('Error al crear una ruta', HttpStatus.BAD_REQUEST)
      // throw new InternalServerErrorException();
    }
  }

  async findAll() {
    return await this.prismaService.route.findMany()

  }

  async findOne(id: number) {

    const productFound = await this.prismaService.route.findUnique({ where: { id: id } })

    if (!productFound) {
      throw new NotFoundException(`Route with id ${id} not found`)
    }
    return productFound;
  }

  async update(id: number, updateRouteDto: UpdateRouteDto) {

    const updateProduct = await this.prismaService.route.update({
      where:
        { id: id },
      data: updateRouteDto
    })

    if (!updateProduct) {
      throw new NotFoundException(`Route with id ${id} not found`,)
    }

    return updateProduct;
  }

  async remove(id: number) {
    const deleteProductFound = await this.prismaService.route.delete({ where: { id: id } })

    if (!deleteProductFound) {
      throw new NotFoundException(`Route with id ${id} not found`)
    }
    return deleteProductFound;
  }
}
