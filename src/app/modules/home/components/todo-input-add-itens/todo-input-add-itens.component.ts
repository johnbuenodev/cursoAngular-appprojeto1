import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { TaskList } from '../../model/task-list';

@Component({
  selector: 'app-todo-input-add-itens',
  templateUrl: './todo-input-add-itens.component.html',
  styleUrls: ['./todo-input-add-itens.component.scss']
})
export class TodoInputAddItensComponent implements OnInit {


  @Output() public emitItemTask  = new EventEmitter(); 

  public addItemTask: string = "";


  constructor() { }

  ngOnInit(): void {
  }

  public inserirItemTask(){
    //console.log(this.addItemTask);
    
    //remove espaços antes e depois da informação
    this.addItemTask = this.addItemTask.trim();
    
    if(this.addItemTask){
      this.emitItemTask.emit(this.addItemTask);
      this.addItemTask = "";
    } else{
      alert("Informe a tarefa.");
    }

  }

}
