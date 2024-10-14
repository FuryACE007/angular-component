import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ClientService } from 'src/app/services/client.service';
 
@Component({
  selector: 'app-client-registration',
  templateUrl: './client-registration.component.html',
  styleUrls: ['./client-registration.component.css']
})
export class ClientRegistrationComponent{
  @Output()
  showForm = new EventEmitter<boolean>();

 
  registrationForm: FormGroup;
  registrationStatus:string = '';
 
  constructor(private fb:FormBuilder,private clientService: ClientService){
    this.registrationForm = this.fb.group({
      name:['',Validators.required],
      email:['',[Validators.required,Validators.email]],
      country:['',[Validators.required]],
      identificationType:[''],
      identificationValue:['',[Validators.required]],
      password:['',[Validators.required,Validators.minLength(6)]]
    });
  }
  callInvestmentPrefForm(){
    this.showForm.emit(true);
  }
 
  onCountryChange(){
    const country=this.registrationForm.get('country')?.value;
 
    if(country==='US'){
      this.registrationForm.get('identificationType')?.setValue('ssn');
      this.registrationForm.get('identificationValue')?.setValidators([Validators.required, Validators.pattern(/^\d{3}-\d{2}-\d{4}$/)]);
    } else if (country==='India'){
      this.registrationForm.get('identificationType')?.setValue('PAN');
      this.registrationForm.get('identificationValue')?.setValidators([Validators.required, Validators.pattern(/^[A-Z]{5}[0-9]{4}[A-Z]{1}$/)]);
    }else{
      this.registrationForm.get('identificationType')?.setValue('');
      this.registrationForm.get('identificationValue')?.clearValidators();
    }
 
    this.registrationForm.get('identificationValue')?.updateValueAndValidity();
  }
 
  onSubmit(){
    if(this.registrationForm.invalid){
      return;
    }
    const {name,email,country,identificationType,identificationValue,password} = this.registrationForm.value;
    if(this.clientService.isEmailRegistered(email)){
      this.registrationStatus='Email already registered!';
      return;
    }
    if(this.clientService.isIdentificationValueRegistered(identificationValue)){
      this.registrationStatus='Identification value already registered!';
      return;
    }
    const newID = `h00${Object.keys(this.clientService).length+1}`;
    this.clientService.registerClient({
      email,
      id:newID,
      name,
      country,
      identification:{type:identificationType, value:identificationValue},
      password
    });
    this.registrationStatus = 'Client successfully registered!';
  }
 
}