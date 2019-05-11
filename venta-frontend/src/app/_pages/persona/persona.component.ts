
import { PersonaDialogoComponent } from './persona-dialogo/persona-dialogo.component';
import { Component, OnInit, ViewChild } from '@angular/core';
import { PersonaService } from './../../_service/persona.service';
import { MatTableDataSource, MatSort, MatPaginator, MatDialog, MatSnackBar } from '@angular/material';
import { Persona } from './../../_model/persona';


@Component({
  selector: 'app-persona',
  templateUrl: './persona.component.html',
  styleUrls: ['./persona.component.css']
})
export class PersonaComponent implements OnInit {
  displayedColumns=['idPersona','nombres','apellidos','acciones'];
  dataSource:MatTableDataSource<Persona>;
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) pag:MatPaginator;
  constructor(private personaService:PersonaService, private dialog: MatDialog, private snackBar: MatSnackBar) { }

  ngOnInit() {

    this.personaService.personasCambio.subscribe(data => {
      this.dataSource = new MatTableDataSource(data);
      this.dataSource.paginator = this.pag;
      this.dataSource.sort = this.sort;
    });

    this.personaService.mensajeCambio.subscribe(data => {
      this.snackBar.open(data, 'Aviso', { duration: 2000 });
    });


    this.personaService.listar().subscribe(data=>{
      this.dataSource=new MatTableDataSource(data);
      this.dataSource.sort=this.sort;
      this.dataSource.paginator=this.pag;
    });
  }
  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
  openDialog(persona?: Persona){
    let per= persona != null ? persona : new Persona();
    this.dialog.open(PersonaDialogoComponent, {width:'250px', data:per})
  }
  
  
  
  eliminar(persona: Persona) {
    this.personaService.eliminar(persona.idPersona).subscribe(() => {
      this.personaService.listar().subscribe(personas => {
        this.personaService.personasCambio.next(personas);
        this.personaService.mensajeCambio.next("Se elimino");
      });
    });
  }
}
