import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Person } from './person/person';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';

@Injectable()
export class PersonService {

  private API_URL: string = 'http://localhost:3000';
  
  constructor(private http: Http) { }

  save(person: Person): Observable<Response>{
    if(person._id){
      return this.http.put(this.API_URL+'/person',person);
    } else{
      return this.http.post(this.API_URL+'/person',person);
    }
  }

  getPersons(): Observable<Person[]>{
    return this.http.get(this.API_URL+'/person').map((res) => res.json() as Person[]);
  }

  deletePerson(id: number): Observable<Response>{
    return this.http.delete(this.API_URL+'/person/'+id);
  }

}
