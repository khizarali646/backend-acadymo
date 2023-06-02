import { AssignToService } from './assign-to.service';
import { AssignDocument } from '../schemas/assignTeacherToClass.schema';
export declare class AssignToController {
    private readonly assignService;
    constructor(assignService: AssignToService);
    assignClass(classId: string, teacherId: string): Promise<{
        teacherAssignClass: AssignDocument;
    }>;
    assignClasses(classIds: string[], teacherId: string, sectionNames: string[]): Promise<{
        teacherAssignments: any[];
    }>;
    getAssignedClassesForTeacher(teacherId: string): Promise<AssignDocument[]>;
    delete(teacherId: string): Promise<AssignDocument>;
}
