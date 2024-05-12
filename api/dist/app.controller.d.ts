/// <reference types="multer" />
import { AppService } from './app.service';
export declare class AppController {
    private readonly appService;
    constructor(appService: AppService);
    getHello(): string;
    uploadFile(file: Express.Multer.File): Express.Multer.File;
    seeUploadedFile(image: any, res: any): any;
}
