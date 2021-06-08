import { Component, OnInit } from '@angular/core';
import { Lineacorre } from './../../../core/models/lineacorre.model'
import { LineacorreService } from './../../../core/services/lineacorre.service'
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-lineacorre',
  templateUrl: './lineacorre.component.html',
  styleUrls: ['./lineacorre.component.scss']
})
export class LineacorreComponent implements OnInit {

  lineacorretivos: Lineacorre[] = [];
  displayedColumns: string[] = ['id','codempresa','nrofac','linea', 'actions'];
  searchFiel = new FormControl();

  constructor(
    private lineacorreService :LineacorreService

  ) { }

  ngOnInit(): void {

    this.getLineacorrelativos();


    if  (this.searchFiel.value!=''){
    
      this.searchFiel.valueChanges
   .subscribe( value =>{
     this.getLineaCorre(value);
   });  
    }

  



  }


  private getLineacorrelativos(){
    this.lineacorreService.getAllLineacorre()
    .subscribe(lineacorretivos =>{
      console.log(lineacorretivos); 
      this.lineacorretivos=lineacorretivos;
    });
  }

  deleteLineacorrel(id:number){
    this.lineacorreService.deleteLineacorre(id)
    .subscribe(rta =>{
      console.log(rta);
      this.getLineacorrelativos();
    })
  }
  
  private getLineaCorre(lineacorreId: string){

  
      this.lineacorreService.busqLineacorre(lineacorreId)
      .subscribe(data=>{
         console.log(data);  
         this.lineacorretivos=data;
      });
     



   } 



}
