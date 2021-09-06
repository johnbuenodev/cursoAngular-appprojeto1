import { Component, DoCheck, OnInit } from '@angular/core';
import { TaskList } from '../../model/task-list';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements/*OnInit*/ DoCheck {

  /*
  public taskList: Array<TaskList> = [
    {task: "primeira task", checked: false},
    {task: "segunda task", checked: true},
    {task: "terceira task", checked:false} 
  ]; */

  //Verifica se tem os dados no banco localStorage caso não tenha ele traz convertido JSON.parse um array vazio
  public taskList: Array<TaskList> = JSON.parse(localStorage.getItem("list") || '[]');

  constructor() { }

  //ordenando a lista pelos checkados / troca posição mandando pra baixo
  ngDoCheck(): void {
    this.setLocalStorage();
  }

  public setLocalStorage(){
    if(this.taskList){
     this.taskList.sort( (first, last) => Number(first.checked) - Number(last.checked));
     localStorage.setItem("list", JSON.stringify(this.taskList));
    }
  }

  //ngOnInit(): void {
  //}

  public setemitItemTask(event: string){
    //console.log(event);
    this.taskList.push({task:event,checked:false});
  }

  public deleteItemTaskList(event: number){
    this.taskList.splice(event,1);

  }

  public deleteAllList(){
    const confirm = window.confirm("Você deseja realmente DELETAR tudo?");
    if(confirm){
    this.taskList = [];
    }
  }

  public validationInput(event: String, index:number){

    //verifica se está vazio o campo
    if(!event.length){
      const confirm = window.confirm("Task está vazia, desejá deletar?");
      //a confirmação para deletar
      if(confirm){
        this.deleteItemTaskList(index);
      }
    }
     



  }

}
