import { ClassDto } from './class.dto';
import { ClassService } from './class.service';
import { ClassDocument } from '../schemas/class.schema';
export declare class ClassController {
    private readonly classService;
    constructor(classService: ClassService);
    create(createClassDto: ClassDto): Promise<ClassDocument>;
    findAll(): Promise<ClassDocument[]>;
    findOne(id: string): Promise<ClassDocument>;
    update(id: string, updateClassDto: ClassDto): Promise<ClassDocument>;
    remove(id: string): Promise<ClassDocument>;
}
