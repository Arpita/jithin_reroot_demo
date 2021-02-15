import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms'
@Component({
  selector: 'app-apartment',
  templateUrl: './apartment.component.html',
  styleUrls: ['./apartment.component.css']
})
export class ApartmentComponent implements OnInit {
  apartmentForm: FormGroup

  constructor() {
    this.apartmentForm = this.createFormGroup()
   }

  ngOnInit(): void {
  }
  createFormGroup() {
    return new FormGroup({     
        comblexName: new FormControl(),
        noOfBlocks: new FormControl(),
        noOfTowers: new FormControl(),     
        noOfFloors: new FormControl(),
        noOfUnits: new FormControl(),
    })
  }
  onSubmit(){}
  revert(){}
}
