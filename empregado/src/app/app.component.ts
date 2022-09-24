import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Empregado } from './empregado';
import { EmpregadoService } from './empregado.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  
  public empregado!: Empregado[];
  public editarEmpregado!: Empregado;

  constructor(private empregadoService:EmpregadoService){}
 
  ngOnInit() {
    this.getEmpregados();
  }

  public getEmpregados(): void {
    this.empregadoService.getEmpregados().subscribe(
      (response: Empregado[]) => {
          this.empregado = response;
      },
      (error:HttpErrorResponse) => {
        alert(error.message);
      }
    )
  }


  public delEmpregados(): void {
    this.empregadoService.getEmpregados().subscribe(
      (response: Empregado[]) => {
          this.empregado = response;
      },
      (error:HttpErrorResponse) => {
        alert(error.message);
      }
    )
  }

  public onAddEmpregados(addForm: NgForm){
    document.getElementById('add-employee-form')?.click();
    this.empregadoService.addEmpregados(addForm.value).subscribe(
      (response:Empregado) => {
        console.log(response);
        this.getEmpregados();
      },(error: HttpErrorResponse) => {
        alert(error.message)
      }
    );
  }

  public onUpdEmpregados(empregado: Empregado){
    this.empregadoService.updateEmpregados(empregado).subscribe(
      (response:Empregado) => {
        console.log(response);
        this.getEmpregados();
      },(error: HttpErrorResponse) => {
        alert(error.message)
      }
    );
  }

  public addEmpregado(){
    const button = document.createElement('button');
    const container = document.getElementById('main-container');

    button.type = 'button';
    button.style.display = 'none';
    
    button.setAttribute('data-toggle','modal');
    button.setAttribute('data-target','#addEmpregadoModal');
    
    container?.appendChild(button);
    button.click();
  }

  public onOpenModal(empregado: Empregado, mode: string): void{
    const button = document.createElement('button');
    const container = document.getElementById('main-container');


    button.type = 'button';
    button.style.display = 'none';
    button.setAttribute('data-toggle','modal');

    if(mode === 'edit'){
      this.editarEmpregado = empregado;
      button.setAttribute('data-target','#updateEmpregadoModal');
    }
    if(mode === 'delete'){
      button.setAttribute('data-target','#deleteEmployeeModal');
    }
    container?.appendChild(button);
    button.click();
  }
}
