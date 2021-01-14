import { Injectable } from '@nestjs/common';
import { rejects } from 'assert';
import * as fs from 'fs';
import * as path from 'path';
// CLIENT_BUILD_PATH=/var/www/build

@Injectable()
export class ClientService {
    public async getApp(){
        const basePath = path.join(__dirname, '../../', '/build/index.html');
        return new Promise((resolve, rejects)=>{
            fs.readFile(basePath, 'utf8', (err:NodeJS.ErrnoException, data:string)=>{
                if(err) rejects(err);
                else resolve(data);
            })
        })
    }   
}
