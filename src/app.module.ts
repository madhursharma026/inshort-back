import { join } from 'path';
import { Module } from '@nestjs/common';
import { ApolloDriver } from '@nestjs/apollo';
import { GraphQLModule } from '@nestjs/graphql';
import { TypeOrmModule } from '@nestjs/typeorm';
import { NewsModule } from './news/news.module';
import { News } from './news/entities/news.entity';

@Module({
  imports: [
    GraphQLModule.forRoot({
      driver: ApolloDriver,
      playground: true,
      sortSchema: true,
      autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
    }),
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: '5.39.222.209',
      port: 3306,
      username: 'mdr_Inshortdb',
      password: 't5uP4KLcBgt1rdvz',
      database: 'mdr_Inshortdb',
      entities: [News],
      synchronize: true,
    }),
    NewsModule,
  ],
})
export class AppModule {}
