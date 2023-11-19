import { CreateSeriesInput } from './series.input.dto';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateSeriesInput extends PartialType(CreateSeriesInput) {
  @Field(() => Number)
  id: number;
}
