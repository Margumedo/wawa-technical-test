import { Module } from '@nestjs/common';
import { RoutesModule } from './routes/routes.module';
import { PrismaService } from './prisma/prisma.service';


@Module({
  imports: [RoutesModule],
  controllers: [],
  providers: [PrismaService],
})
export class AppModule { }
