/* eslint-disable @typescript-eslint/no-namespace */
import { MediaImageTypeEnum } from 'src/common/enum/common.enum';
import { Field, InputType, OmitType } from '@nestjs/graphql';
import { IsEnum, IsMimeType, IsNotEmpty, IsOptional, IsString, IsUUID } from 'class-validator';

export namespace MediaImageInputDto {
  @InputType()
  export class CreateMediaImageInput {
    @Field(() => String)
    @IsNotEmpty()
    @IsString()
    MediaImageBase64: string;

    @Field(() => String)
    @IsNotEmpty()
    @IsMimeType()
    MediaImageMime: ImageMimeType;

    @Field(() => String)
    @IsNotEmpty()
    @IsEnum(MediaImageTypeEnum)
    MediaImageType: MediaImageTypeEnum;
  }

  @InputType()
  export class UpdateMediaImageInput {
    @Field(() => String)
    @IsOptional()
    @IsString()
    MediaImageUrl: string;

    @Field(() => String)
    @IsOptional()
    @IsEnum(MediaImageTypeEnum)
    MediaImageType: MediaImageTypeEnum;
  }

  @InputType()
  export class ChangeThumbnailImageInput extends OmitType(CreateMediaImageInput, ['MediaImageType']) {
    @Field(() => String)
    @IsNotEmpty()
    @IsUUID()
    MediaImageId: string;
  }
}
