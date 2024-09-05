import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsNumber, IsUrl, IsNotEmpty, IsPositive, IsISO8601, Length, Min, Max } from 'class-validator';

export class CreateRouteDto {
    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    @Length(3, 50)
    origen: string;

    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    @Length(3, 50)
    destino: string;

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
