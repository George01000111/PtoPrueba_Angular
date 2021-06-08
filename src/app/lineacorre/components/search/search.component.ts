import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { LineacorreService } from './../../../core/services/lineacorre.service'

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  searchFiel = new FormControl();

  constructor(
    private  lineacorreService: LineacorreService

  ) { }

  ngOnInit(): void {
    this.searchFiel.valueChanges
    .subscribe( value =>{
      this.getLineaCorre(value);
    });
  }

  private getLineaCorre(lineacorreId: number){
    this.lineacorreService.getLineacorre(lineacorreId)
    .subscribe(data=>{
       console.log(data);  
    });
   } 

}
