import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class CreateNewsInput {
  @Field()
  title: string;

  @Field()
  description: string;

  @Field()
  urlToImage: string;

  @Field()
  readMoreContent: string;

  @Field()
  url: string;

  @Field()
  author: string;

  @Field(() => Date, { nullable: true })
  publishedAt?: Date;
}
