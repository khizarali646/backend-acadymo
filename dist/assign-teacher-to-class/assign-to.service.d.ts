import { Model } from "mongoose";
import { AssignDocument } from "../schemas/assignTeacherToClass.schema";
export declare class AssignToService {
    readonly AssignModel: Model<AssignDocument>;
    constructor(AssignModel: Model<AssignDocument>);
    assignClass(classId: string, teacherId: string): Promise<AssignDocument>;
    asignClassess(classId: string, teacherId: string): Promise<AssignDocument>;
    getAssignedClassesForTeacher(teacherId: string): Promise<AssignDocument[]>;
    delete(teacherId: string): Promise<AssignDocument>;
}
