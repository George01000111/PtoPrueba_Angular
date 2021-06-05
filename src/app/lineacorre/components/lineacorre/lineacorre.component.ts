import { Component, OnInit } from '@angular/core';
import { Lineacorre } from './../../../core/models/lineacorre.model'
import { LineacorreService } from './../../../core/services/lineacorre.service'

@Component({
  selector: 'app-lineacorre',
  templateUrl: './lineacorre.component.html',
  styleUrls: ['./lineacorre.component.scss']
})
export class LineacorreComponent implements OnInit {

  lineacorretivos: Lineacorre[] = [];
  displayedColumns: string[] = ['id','codempresa','nrofac', 'actions'];

  constructor(
    private lineacorreService :LineacorreService

  ) { }

  ngOnInit(): void {
    this.getLineacorrelativos();
  }


  private getLineacorrelativos(){
    this.lineacorreService.getAllLineacorre()
    .subscribe(lineacorretivos =>{
      this.lineacorretivos=lineacorretivos;
    });
  }


}
