import { Module } from '@nestjs/common';
import { UserModule } from './users/users.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './users/users.entity';
import { ArticleModule } from './article/article.module';
import { AuthModule } from './auth/auth.module';
import { Article } from './article/article.entity';

@Module({
  imports: [
    UserModule,
    ArticleModule,
    AuthModule,
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'plf,.123',
      database: 'blog',
      entities: [User, Article],
      synchronize: true,
      autoLoadEntities: true,
      logging: true
    })
  ],
  controllers: [],
  providers: []
})
export class AppModule {}
