import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact-edit',
  templateUrl: './contact-edit.component.html',
  styleUrls: ['./contact-edit.component.less']
})
export class ContactEditComponent implements OnInit {
 
  contact = new Contact();
  constructor() { }

  ngOnInit(): void{
  }


}
