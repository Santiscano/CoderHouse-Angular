import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-formz',
  templateUrl: './formz.component.html',
  styleUrls: ['./formz.component.css']
})
export class FormzComponent implements OnInit {
  formularioUsuario: FormGroup;

  constructor(
    private fb: FormBuilder
  ) { 
    this.formularioUsuario = fb.group({
      name : new FormControl('',[Validators.required]),
      surname : new FormControl('',[Validators.required]),
      email : new FormControl('',[Validators.pattern('^[a-z]+@[a-z]+\\.[a-z]{2,3}$'), Validators.required]),
      password : new FormControl('',[Validators.required, Validators.minLength(5), Validators.pattern('^.*[A-Z]+.*$')]),
    })
  }

  ngOnInit(): void {
  }
  
  agregarUsuario(){
    this.formularioUsuario.addControl('control1', new FormControl('', []));

    console.log(this.formularioUsuario);
  }
}