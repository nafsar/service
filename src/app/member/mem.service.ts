import { Injectable } from '@angular/core';

import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class MemService {
    url: string;
    constructor(private http: Http) {
        this.url = 'https://nafsar.github.io/demo/students.json';
    }

    getValues() {

        return this.http.get(this.url).map(res => res.json());
    }


}
