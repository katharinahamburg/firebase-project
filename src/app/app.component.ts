import { Component } from '@angular/core';
import { Firestore, collection, collectionData, doc, setDoc } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  todos$: Observable<any>;
  todos: Array<any>;
  todotext = '';
  
  
 

  constructor(private firestore: Firestore) {
    const coll = collection(firestore, 'todos');
    this.todos$ = collectionData(coll);

    this.todos$.subscribe((newTodos) =>{
      console.log('Neue Todos sind:', newTodos);
      this.todos = newTodos;
    });
  }

  addTodo() {
   const coll = collection(this.firestore, 'todos');
   console.log('Todotext is', this.todotext);
   setDoc(doc(coll), {name: this.todotext});
   this.todotext = '';
  }

}



