import * as graphql from "@nestjs/graphql";
import { PointResolverBase } from "./base/point.resolver.base";
import { Point } from "./base/Point";
import { PointService } from "./point.service";

@graphql.Resolver(() => Point)
export class PointResolver extends PointResolverBase {
  constructor(protected readonly service: PointService) {
    super(service);
  }
}
