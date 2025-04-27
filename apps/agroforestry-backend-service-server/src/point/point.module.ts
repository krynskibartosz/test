import { Module } from "@nestjs/common";
import { PointModuleBase } from "./base/point.module.base";
import { PointService } from "./point.service";
import { PointController } from "./point.controller";
import { PointResolver } from "./point.resolver";

@Module({
  imports: [PointModuleBase],
  controllers: [PointController],
  providers: [PointService, PointResolver],
  exports: [PointService],
})
export class PointModule {}
