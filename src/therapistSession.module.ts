import { Module } from '@nestjs/common';
import { TherapistSessionController } from './therapistSession.controller';
import { TherapistSessionService } from './therapistSession.service';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
    imports: [
        TypeOrmModule.forRoot({
          type: 'mysql',
          host: 'localhost', // Update with your MySQL server host
          port: 3306, // Update with your MySQL server port
          username: 'your_username', // Update with your MySQL username
          password: 'your_password', // Update with your MySQL password
          database: 'your_database', // Update with your MySQL database name
          entities: [__dirname + '/**/*.entity{.ts,.js}'],
          synchronize: true, // Automatically creates database tables (for demo purposes only)
        }),
        TherapistSessionModule,
    ]
 //controller: [TherapistSessionController],
  //providers: [TherapistSessionService],
})
export class TherapistSessionModule {}
export class AppModule {}
