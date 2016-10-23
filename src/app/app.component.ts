import { Component } from '@angular/core';
import { Person } from './person/person';
import { PersonService } from './person.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  private person: Person;
  private persons: Person[];

  constructor(private personService: PersonService){
    this.person = new Person(null, null, null,null);
  }

  save(form){
    this.personService.save(this.person).subscribe(
      (resp) => {
        console.log('success ');
        this.findPersons(),
        form.reset();
      },

      (err) =>  console.log(err));
  }

  findPersons(){
    this.personService.getPersons().subscribe(
      (res) => { this.persons = res },
      (err) => console.log('error'+err)
    )
  }

  delete(id: number){
    this.personService.deletePerson(id).subscribe(
      (res) => this.findPersons(),
      (err) => console.log('err'+ err)
    )
  }

  startEdit(person: Person){
    this.person = person;
  }
}
