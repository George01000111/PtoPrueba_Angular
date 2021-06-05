import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute, Params } from '@angular/router';
import { FormControl,Validators, FormGroup, FormBuilder } from '@angular/forms';
import { LineacorreService } from './../../../core/services/lineacorre.service'
import { LineaService } from './../../../core/services/linea.service'
import { Linea } from './../../../core/models/linea.model'

@Component({
  selector: 'app-lineacorre-form',
  templateUrl: './lineacorre-form.component.html',
  styleUrls: ['./lineacorre-form.component.scss']
})
export class LineacorreFormComponent implements OnInit {


  form :  FormGroup;
  lineacorreId: number;
  lineas:Linea[] = [];

  constructor(
    private formBuilder: FormBuilder,
    private  lineacorreService: LineacorreService,
    private  lineaService: LineaService,
    private router: Router,
    private route: ActivatedRoute
  ) { 
    this.buildForm();

  }


  ngOnInit(): void {
  /*   this.idField.valueChanges
    .subscribe(value =>{
      console.log(value);
    });
    
    this.form.valueChanges
    .subscribe(value =>{
      console.log(value);
    })
 */
  this.route.params.subscribe((params: Params) =>{
      this.lineacorreId =params.id;
      if (this.lineacorreId){
         this.getLineaCorre();
      }
  });


  this.getLineas();

  }

  private buildForm(){
    this.form =  this.formBuilder.group({
      id : ['',Validators.required],
      codempresa : ['',Validators.required],
      nrofac : ['',Validators.required],
      nrobol :['',Validators.required],
      nrofacRef : ['',Validators.required],
      nrobolRef : ['',Validators.required],
      enviaElect : [false],
      lineaCodlinea : ['',Validators.required],
     
    });
  }





  get idField() {
    return this.form.get('id');
  } 

  get codempresaField() {
    return this.form.get('codempresa');
  } 

  get nrofacField() {
    return this.form.get('nrofac');
  } 

  get nrobolField() {
    return this.form.get('nrobol');
  } 

  get nrofacrefField() {
    return this.form.get('nrofacRef');
  } 

  get nrobolrefField() {
    return this.form.get('nrobolRef');
  } 

  get enviaelectField() {
    return this.form.get('enviaElect');
  } 

  get lineacodlineaField() {
    return this.form.get('lineaCodlinea');
  } 


  save(event){

    if (this.form.valid){

      if  (this.lineacorreId){
        this.updateLineaCorre();        
      }else{

  /*      const lineacorres = this.form.value;
       console.log(lineacorres);
 */
       this.createLineaCorre(); 

      }

     }else{
       this.form.markAllAsTouched();
     }
   }

   private createLineaCorre(){
     const data = this.form.value;
     this.lineacorreService.createLineacorre(data)
     .subscribe(rta=>{
      console.log(rta);
      this.router.navigate(['./lineacorre']);
     });
   }

   private updateLineaCorre(){
    const data = this.form.value;
    this.lineacorreService.updateLineacorre(this.lineacorreId,data)
    .subscribe(rta=>{
     console.log(rta);
     this.router.navigate(['./lineacorre']);
    });
  }



    private getLineaCorre(){
    this.lineacorreService.getLineacorre(this.lineacorreId)
    .subscribe(data=>{
      
       console.log(data);  
      this.form.patchValue(data);  
       /*  this.idField.setValue(data.id); 
        this.codempresaField.setValue(data.codempresa);
       this.enviaelectField.setValue(data.enviaElect);
        this.nrobolField.setValue(data.nrobol);
        this.nrofacField.setValue(data.nrofac);
        this.nrobolrefField.setValue(data.nrobolRef);
        this.nrofacrefField.setValue(data.nrofacRef); 
        this.lineacodlineaField.setValue(data.lineaCodlinea); */
    });
   } 


   private getLineas(){
      this.lineaService.getAllLinea()
      .subscribe((data)=>{
        this.lineas=data;
      });
   }


}
