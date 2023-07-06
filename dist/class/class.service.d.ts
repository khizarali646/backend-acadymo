import { ClassDocument } from "../schemas/class.schema";
import { Model } from "mongoose";
import { ClassDto } from "./class.dto";
import { AssignDocument } from "../schemas/assignTeacherToClass.schema";
import { AssignStudentDocument } from "../schemas/assignStudentToClass.schema";
export declare class ClassService {
    private ClassModel;
    private AssignModel;
    private AssignStudentModel;
    constructor(ClassModel: Model<ClassDocument>, AssignModel: Model<AssignDocument>, AssignStudentModel: Model<AssignStudentDocument>);
    create(classDto: ClassDto): Promise<ClassDocument>;
    findOne(id: string): Promise<ClassDocument>;
    findAll(): Promise<ClassDocument[]>;
    update(id: string, UpdateClassDto: ClassDto): Promise<ClassDocument>;
    remove(id: string): Promise<ClassDocument>;
    assignClass(classId: string, teacherId: string): Promise<AssignDocument>;
    assignClasses(classId: string, teacherId: string): Promise<AssignDocument>;
    getAssignedClassesForTeacher(teacherId: string): Promise<AssignDocument[]>;
    delete(teacherId: string): Promise<AssignDocument>;
    assignStudentsToClass(classId: string, studentId: string): Promise<AssignStudentDocument>;
    getAssignedClassesForStudent(studentId: string): Promise<AssignStudentDocument[]>;
    getStudentsOfClass(classId: string): Promise<AssignStudentDocument[]>;
}
