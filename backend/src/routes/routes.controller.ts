import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { RoutesService } from './routes.service';
import { CreateRouteDto } from './dto/create-route.dto';
import { UpdateRouteDto } from './dto/update-route.dto';
import { ApiOperation, ApiTags, ApiCreatedResponse, ApiBadRequestResponse, ApiResponse, ApiNotFoundResponse } from '@nestjs/swagger';


@ApiTags('routes')
@Controller('routes')
export class RoutesController {
  constructor(private readonly routesService: RoutesService) { }

  @Post()
  @ApiOperation({ summary: 'Crear una ruta' })
  @ApiCreatedResponse({ description: 'La ruta ha sido creado exitosamente.', type: CreateRouteDto }) // Respuesta exitosa
  @ApiBadRequestResponse({ description: 'Los datos proporcionados no son válidos.' }) // Respuesta de error
  create(@Body() createRouteDto: CreateRouteDto) {
    return this.routesService.create(createRouteDto);
  }

  @Get()
  @ApiOperation({ summary: 'Obtener todas las rutas' })
  @ApiResponse({ status: 200, description: 'Rutas encontradas', type: CreateRouteDto, isArray: true })
  findAll() {
    return this.routesService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Obtener una ruta por su ID' })
  @ApiResponse({ status: 200, description: 'Ruta encontrada', type: CreateRouteDto })
  @ApiNotFoundResponse({ description: 'Ruta no encontrada' })
  findOne(@Param('id') id: string) {
    return this.routesService.findOne(+id);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Actualizar ruta por su ID' })
  @ApiResponse({ status: 200, description: 'Ruta actualizada', type: CreateRouteDto })
  @ApiNotFoundResponse({ description: 'Ruta no encontrada' })
  @ApiBadRequestResponse({ description: 'Error en datos de actualización' })

  update(@Param('id') id: string, @Body() updateRouteDto: UpdateRouteDto) {
    return this.routesService.update(+id, updateRouteDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Elimina una ruta por su ID' })
  @ApiResponse({ status: 204, description: 'Ruta eliminado exitosamente' })
  @ApiNotFoundResponse({ description: 'Ruta no encontrado' })
  remove(@Param('id') id: string) {
    return this.routesService.remove(+id);
  }
}
