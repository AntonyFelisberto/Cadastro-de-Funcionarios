import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Empregado } from './empregado';
import { EmpregadoService } from './empregado.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  
  public empregado!: Empregado[];

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

  public onOpenModal(empregado: Empregado, mode: string): void{
    const button = document.createElement('button');
    const container = document.createElement('');


    button.type = 'button';
    button.style.display = 'none';
    button.setAttribute('data-toggle','modal');
    if(mode === 'add'){
      button.setAttribute('data-target','#addEmpregadoModal');
    }
    if(mode === 'edit'){
      button.setAttribute('data-target','#updateEmpregadoModal');
    }
    if(mode === 'delete'){
      button.setAttribute('data-target','#addEmpregadoModal');
    }
  }
}
