import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { PointServiceBase } from "./base/point.service.base";

@Injectable()
export class PointService extends PointServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
