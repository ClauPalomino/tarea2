import { ProductoService } from 'src/app/_service/producto.service';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { Component, OnInit, Inject } from '@angular/core';
import { Producto } from 'src/app/_model/producto';

@Component({
  selector: 'app-producto-dialogo',
  templateUrl: './producto-dialogo.component.html',
  styleUrls: ['./producto-dialogo.component.css']
})
export class ProductoDialogoComponent implements OnInit {
  producto:Producto;
  constructor(private dialogRef:MatDialogRef<ProductoDialogoComponent>,@Inject(MAT_DIALOG_DATA) private data: Producto,private productoService:ProductoService) { }

  ngOnInit() {
    this.producto=new Producto();
    this.producto.nombre=this.data.nombre;
    this.producto.marca=this.data.marca;
  }
 cancelar()
 {
  this.dialogRef.close();
 }
 operar()
 {
   if(this.producto !=null && this.producto.idProducto>0)
   {
     this.productoService.modificar(this.producto).subscribe(data=>
      {
        this.productoService.listar().subscribe(productos=>
          {
            this.productoService.productosCambio.next(productos);
            this.productoService.mensajeCambio.next("Se modifico");
            });
      });
   }
   else
   {
     this.productoService.registrar(this.producto).subscribe(data=>
      {
        this.productoService.listar().subscribe(productos=>{
          this.productoService.productosCambio.next(productos);
          this.productoService.mensajeCambio.next("Se registro");
        });
      });
   }
   this.dialogRef.close();
 }
}
