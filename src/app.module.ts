import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { UserModule } from './user/user.module';
import { AuthModule } from './auth/auth.module';
import { OrganizationModule } from './organization/organization.module';
import { CampusModule } from './campus/campus.module';
import { AdminModule } from './admin/admin.module';
import { TeacherModule } from './teacher/teacher.module';
import { StudentModule } from './student/student.module';
import { ClassModule } from './class/class.module';
import { ParentModule } from './parent/parent.module';
import { SubjectModule } from './subjects/subject.module';
import { UpcomingEventModule } from './upcoming-events/upcoming-event.module';
import { NotificationModule } from './notifications/notification.module';
import { AttendanceModule } from './attendance/attendance.module';
import { TimetableModule } from './timetable/timetable.module';
import { SectionModule } from './section/section.module';
import { TaskModule } from './task/task.module';
import { AssignToModule } from './assign-to-class/assign-to.module';
import { MulterModule } from './multer/multer.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    MongooseModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: (configService: ConfigService) => ({
        uri: configService.get('MONGO_URL'),
      }),
      inject: [ConfigService],
    }),
    UserModule,
    AuthModule,
    OrganizationModule,
    CampusModule,
    AdminModule,
    TeacherModule,
    StudentModule,
    ClassModule,
    ParentModule,
    SubjectModule,
    UpcomingEventModule,
    NotificationModule,
    AttendanceModule,
    TimetableModule,
    SectionModule,
    TaskModule,
    AssignToModule,
    MulterModule,
  ],
  controllers: [AppController],
  providers: [],
})
export class AppModule {}
