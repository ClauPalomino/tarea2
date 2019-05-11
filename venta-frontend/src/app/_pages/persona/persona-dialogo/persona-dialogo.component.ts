import { PersonaService } from './../../../_service/persona.service';
import { Persona } from 'src/app/_model/persona';
import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-persona-dialogo',
  templateUrl: './persona-dialogo.component.html',
  styleUrls: ['./persona-dialogo.component.css']
})
export class PersonaDialogoComponent implements OnInit {
  persona: Persona;
  constructor(private dialogRef:MatDialogRef<PersonaDialogoComponent>,@Inject(MAT_DIALOG_DATA) private data: Persona, private personaService:PersonaService) { }

  ngOnInit() {
    this.persona=new Persona();
    this.persona.idPersona=this.data.idPersona;
    this.persona.nombres=this.data.nombres;
    this.persona.apellidos=this.data.apellidos;
  }
  cancelar()
    {
      this.dialogRef.close();
    }
  
    

  operar() {
    if (this.persona != null && this.persona.idPersona > 0) {
      this.personaService.modificar(this.persona).subscribe(data => {
        this.personaService.listar().subscribe(personas => {
          this.personaService.personasCambio.next(personas);
          this.personaService.mensajeCambio.next("Se modifico");
        });
      });
    } else {
      this.personaService.registrar(this.persona).subscribe(data => {
        this.personaService.listar().subscribe(personas => {
          this.personaService.personasCambio.next(personas);
          this.personaService.mensajeCambio.next("Se registro");
        });
      });
    }
    this.dialogRef.close();
  }

  

}
