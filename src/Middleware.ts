// import { 
//     Module, 
//     NestModule, 
//     MiddlewareConsumer 
//   } from '@nestjs/common';
//   import { 
//     LoggerMiddleware 
//   } from './common/middlewares/logger.middleware';
//   import { CatsModule } from './cats/cats.module';
  
//   @Module({
//     imports: [CatsModule],
//   })
//   export class ApplicationModule implements NestModule {
//     configure(consumer: MiddlewareConsumer) {
//       consumer
//         .apply(LoggerMiddleware)
//         .forRoutes('cats');
//     }
//   }