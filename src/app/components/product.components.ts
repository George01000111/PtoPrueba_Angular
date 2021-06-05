
import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';


@Component({
    selector: 'app-product',
    templateUrl: './product.component.html'
})

export class ProductComponent implements OnInit {

nameField = new FormControl('soy un control');

constructor(){}

ngOnInit(): void{

}

}