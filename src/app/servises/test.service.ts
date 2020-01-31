import { Injectable } from '@angular/core';
import { TestClassService } from './test.abs.service';


@Injectable()
export class TestClass implements TestClassService {
    constructor(){
        console.log('test service class loaded ')
    }
    public checkUser(user): boolean {
        console.log(user)
        let userExist: boolean;
        if(!!user){
            userExist = true;
        }else{
            userExist = false
        }
        return userExist
    }

}