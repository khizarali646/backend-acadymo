import { ClassDocument } from "../schemas/class.schema";
import { Model } from "mongoose";
import { ClassDto } from "./class.dto";
export declare class ClassService {
    private ClassModel;
    constructor(ClassModel: Model<ClassDocument>);
    create(classDto: ClassDto): Promise<ClassDocument>;
    findOne(id: string): Promise<ClassDocument>;
    findAll(): Promise<ClassDocument[]>;
    update(id: string, UpdateClassDto: ClassDto): Promise<ClassDocument>;
    remove(id: string): Promise<ClassDocument>;
}
