import { ProductoDialogoComponent } from './producto-dialogo/producto-dialogo.component';
import { Component, OnInit, ViewChild } from '@angular/core';
import { ProductoService } from 'src/app/_service/producto.service';
import { MatTableDataSource, MatSort, MatPaginator, MatDialog, MatSnackBar } from '@angular/material';
import { Producto } from 'src/app/_model/producto';

@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.css']
})
export class ProductoComponent implements OnInit {
  displayedColumns=['idProducto','nombre','marca','acciones'];
  dataSource:MatTableDataSource<Producto>;
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) pag:MatPaginator;
  constructor(private productoService:ProductoService, private dialog: MatDialog, private snackBar:MatSnackBar) { }

  ngOnInit() {

    this.productoService.productosCambio.subscribe(data => {
      this.dataSource = new MatTableDataSource(data);
      this.dataSource.paginator = this.pag;
      this.dataSource.sort = this.sort;
    });

    this.productoService.mensajeCambio.subscribe(data => {
      this.snackBar.open(data, 'Aviso', { duration: 2000 });
    });

    this.productoService.listar().subscribe(data=>{
      this.dataSource=new MatTableDataSource(data);
      this.dataSource.sort=this.sort;
      this.dataSource.paginator=this.pag;
    });
  }
  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  openDialog(producto?: Producto){
    let pro= producto != null ? producto : new Producto();
    this.dialog.open(ProductoDialogoComponent, {width:'250px', data:pro})
  }
  eliminar(producto: Producto) {
    this.productoService.eliminar(producto.idProducto).subscribe(() => {
      this.productoService.listar().subscribe(productos => {
        this.productoService.productosCambio.next(productos);
        this.productoService.mensajeCambio.next("Se elimino");
      });
    });
  }
}
