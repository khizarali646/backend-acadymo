import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { UserModule } from './user/user.module';
import { AuthModule } from './auth/auth.module';
import { OrganizationModule } from './organization/organization.module';
import { CampusModule } from './campus/campus.module';
import { AdminModule } from './admin/admin.module';
import { ClassModule } from './class/class.module';
import { SubjectModule } from './subjects/subject.module';
import { UpcomingEventModule } from './upcoming-events/upcoming-event.module';
import { NotificationModule } from './notifications/notification.module';
import { AttendanceModule } from './attendance/attendance.module';
import { TimetableModule } from './timetable/timetable.module';
import { SectionModule } from './section/section.module';
import { TaskModule } from './task/task.module';
import { SearchModule } from './top-search/search.module';
import { TeacherAssignTaskToStudentModule } from './teacher-assign-task-to-student/teacher-assign-task-to-student.module';
import { S3UploadModule } from './s3-upload/s3-upload.module';
import { StudentModule } from './search/student/student.module';
import { StudentSearchModule } from './student-search/student-search.module';

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
    ClassModule,
    SubjectModule,
    UpcomingEventModule,
    NotificationModule,
    AttendanceModule,
    TimetableModule,
    SectionModule,
    TaskModule,
    SearchModule,
    TeacherAssignTaskToStudentModule,
    S3UploadModule,
    StudentModule,
    StudentSearchModule,
  ],
  controllers: [AppController],
  providers: [],
})
export class AppModule {}
