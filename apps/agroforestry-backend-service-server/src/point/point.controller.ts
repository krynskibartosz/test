import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { PointService } from "./point.service";
import { PointControllerBase } from "./base/point.controller.base";

@swagger.ApiTags("points")
@common.Controller("points")
export class PointController extends PointControllerBase {
  constructor(protected readonly service: PointService) {
    super(service);
  }
}
