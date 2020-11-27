import { Injectable } from '@nestjs/common';
import fs from 'fs';

@Injectable()
export class DatajsonService {
  //protected repo: Repository<>;

  public async GetMenu(): Promise<string> {
    //  return await thisfind(options);
    function readFile(path) {
      return new Promise<string>((resolve, reject) => {
        fs.readFile(path, {encoding:'utf-8'},function (err, data) {
          if (err) {
            reject(err);
            return ;
          }
          resolve(JSON.parse( data));
        })
      })
    }

      const users=readFile('../dfg-backend/src/app/datajson/app_data.json');
    return await users;
  }
}

    // const users = fs.readFile('../dfg-backend/src/app/datajson/app_data.json','utf-8',
    //   function (err, data) {
    //     console.log(data); // Check for errors

    //     if (err) throw err; // Converting to JSON
    //     const users = JSON.parse(data);
    //     console.log(users); 
    //     // Print  users
    //     return data;
    //   } );