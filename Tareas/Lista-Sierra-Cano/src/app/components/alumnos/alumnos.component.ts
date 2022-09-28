import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-alumnos',
  templateUrl: './alumnos.component.html',
  styleUrls: ['./alumnos.component.css']
})
export class AlumnosComponent implements OnInit {

  

  listaAlumnos: Array<string> = [
    'santiago', 'estefany', 'steven', 'kelly', 'maria', 'guillermo'
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
