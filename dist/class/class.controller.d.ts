import { ClassDto } from "./class.dto";
import { ClassService } from "./class.service";
import { ClassDocument } from "../schemas/class.schema";
import { AssignDocument } from "../schemas/assignTeacherToClass.schema";
import { AssignStudentDocument } from "../schemas/assignStudentToClass.schema";
export declare class ClassController {
    private readonly classService;
    constructor(classService: ClassService);
    create(createClassDto: ClassDto): Promise<ClassDocument>;
    findAll(): Promise<ClassDocument[]>;
    findOne(id: string): Promise<ClassDocument>;
    update(id: string, updateClassDto: ClassDto): Promise<ClassDocument>;
    remove(id: string): Promise<ClassDocument>;
    assignClass(classId: string, teacherId: string): Promise<{
        teacherAssignClass: AssignDocument;
    }>;
    assignClasses(classIds: string[], teacherId: string): Promise<{
        AssignedClasses: any[];
    }>;
    getAssignedClassesForTeacher(teacherId: string): Promise<AssignDocument[]>;
    delete(teacherId: string): Promise<AssignDocument>;
    assignStudentsToClass(classIds: string[], studentId: string): Promise<{
        StudentClasses: any[];
    }>;
    getAssignedClassesForStudent(studentId: string): Promise<AssignStudentDocument[]>;
    getAssignedStudentsForClass(classId: string): Promise<AssignStudentDocument[]>;
}
