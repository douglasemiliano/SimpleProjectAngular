import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';



@Component({
  selector: 'app-pagina',
  templateUrl: './pagina.component.html',
  styleUrls: ['./pagina.component.scss']
})
export class PaginaComponent implements OnInit {

  resultado = 0;
  anterior = 0;
  show = true;
  form!: FormGroup
  label: any;
  labelIMG = "Esconder";
  matriz = [{ "id": 1, "content": "Olá, sou o filtro numero 1!"},
            { "id": 2, "content": "Helo, sou o filtro numero 2!"},
            { "id": 3, "content": "Capiche, sou o filtro numero 3!"},
            { "id": 4, "content": "Hi, sou o filtro numero 4!"},
            { "id": 5, "content": "Meu nome é Douglas, sou o filtro numero 5!"},
            { "id": 6, "content": "Ciência da Computação, sou o filtro numero 6!"},
            { "id": 7, "content": "Não entendi muito bem essa ultima parte, sou o filtro numero 7!"},
            { "id": 8, "content": "Tudo bem? sou o filtro numero 8!"},
            { "id": 9, "content": "Tchau, sou o filtro numero 9!"},
            { "id": 10,"content": "Foi bom participar, sou o filtro numero 10!"}];

  constructor(private fb: FormBuilder) {
   }

  ngOnInit(): void {
    this.createForm();
  }

  createForm(){
    this.form = this.fb.group({
      filter: new FormControl('', [Validators.required, Validators.minLength(1), Validators.maxLength(2), Validators.nullValidator]),
    });

  }

  calcularFibonacci(): void {
    if(this.resultado == 0){
      this.resultado = 1;
    } else if (this.resultado == 1){
      this.anterior = this.resultado;
      this.resultado = this.resultado + this.anterior;
    }else {
      this.resultado = this.resultado + this.anterior;
      this.anterior = this.resultado - this.anterior;
      }
    }

    resetar(): void{
      this.anterior = 0;
      this.resultado = 0;
    }

  esconder(): void{
    if (this.show){
      this.show = false;
      this.labelIMG = "Mostrar";
    }else {
      this.show = true;
      this.labelIMG = "Esconder";
    }
  }

  onSubmit(){
    if (this.form.value.filter > 10){
      this.label = "Digite um número de 0 a 10"
    } else {
      this.label =  this.matriz[this.form.value.filter -1].content;
    }
    this.form.reset();
  }
}
