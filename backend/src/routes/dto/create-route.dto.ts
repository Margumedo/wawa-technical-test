import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsNumber, IsUrl, IsNotEmpty, IsPositive, IsISO8601, Length, Min, Max, IsOptional } from 'class-validator';

export class CreateRouteDto {
    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    @Length(3, 150)
    origen: string;

    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    @Length(3, 150)
    destino: string;

    @ApiProperty({ required: false })
    @IsOptional()
    @IsNumber()
    origenLatitud?: number;

    @ApiProperty({ required: false })
    @IsOptional()
    @IsNumber()
    origenLongitud?: number;

    @ApiProperty({ required: false })
    @IsOptional()
    @IsNumber()
    destinoLatitud?: number;

    @ApiProperty({ required: false })
    @IsOptional()
    @IsNumber()
    destinoLongitud?: number;

    @ApiProperty()
    @IsNumber()
    @IsPositive()
    precio: number;

    @ApiProperty()
    @IsISO8601()
    @IsNotEmpty()
    horaSalida: string;

    @ApiProperty()
    @IsISO8601()
    @IsNotEmpty()
    horaLlegada: string;

    @ApiProperty()
    @IsNumber()
    @IsPositive()
    @Min(10)
    @Max(60)
    capacidadAutobus: number;

    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    url: string;
}
