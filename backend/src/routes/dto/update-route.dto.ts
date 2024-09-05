// import { PartialType } from '@nestjs/mapped-types';
// import { CreateRouteDto } from './create-route.dto';

import { CreateRouteDto } from "./create-route.dto";

// export class UpdateRouteDto extends PartialType(CreateRouteDto) {}

export type UpdateRouteDto = Partial<CreateRouteDto>