import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { FormService } from './formservice';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'dynamicform';

  formschema!: any[];
  isSubmit : boolean = false;
  public myForm: FormGroup = this.fb.group({});

  constructor(private fb: FormBuilder, private formservice : FormService) {}

  ngOnInit() {
    this.formschema = this.formservice.getData();
    this.formUtility(this.formschema);
  }

  formUtility(input : any)
  {
    if(Array.isArray(input))
    {
      console.log("case of array, hence create form");
      this.createForm(input);
    }
    else
    {
      console.log("case of object, hence add to the FormArray")
      this.addElement(input);
    }
  }

  createForm(schema: any[]){
    for (const field of schema) {

      // console.log("printing schema ", field['name'])

      const validators = [];

      if(field['validators'].find((field: string)  => field == "required"))
        validators.push(Validators.required);
      if(field['validators'].find((field: string)  => field == "email"))
        validators.push(Validators.email);
      
      const control = new FormControl(field.value, validators);

      if(field.type == "array")
        this.myForm.addControl(field.name,new FormArray([]));
      else 
        this.myForm.addControl(field.name,control)
    } 
  }

  onChange(field: any)
  {
    // console.log("calling onChange with field name = ", field.name)
    this.isSubmit = false;
    if(field.name == "h_add" && this.myForm.value['check_add']==true)
    {
      this.myForm.get('o_add')?.setValue( this.myForm.value['h_add']);
    }
  }

  addElement(ele_schema : any)
  {
    (<FormArray>this.myForm.get(ele_schema.name)).push(new FormControl(null));
  }

  onSubmit()
  {
    this.isSubmit = true;
    console.log("Submit pressed")
    console.log(this.myForm)
  }

  onCheckboxClick()
  {
    this.isSubmit = false;
    // console.log("chekbox clicked", this.myForm.get('check_add'))
    if(this.myForm.get('check_add')?.value == true )
      this.myForm.get('o_add')?.setValue( this.myForm.value['h_add']);
    else
      this.myForm.get('o_add')?.setValue("");
  }
  
}