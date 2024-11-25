import { Component, OnInit } from '@angular/core';
import { Employee } from '../employee';

@Component({
  selector: 'app-employee-list',
  standalone: false,
  
  templateUrl: './employee-list.component.html',
  styleUrl: './employee-list.component.css'
})
export class EmployeeListComponent implements OnInit {
  employees: Employee[] | undefined;

  constructor() {}

  ngOnInit(): void {
    this.employees = [
      {
        "id": 1,
        "firstName": "Brnuo",
        "lastName": "Busarello",
        "emailId": "bruno@email"
    },
    {
        "id": 2,
        "firstName": "Teste",
        "lastName": "1",
        "emailId": "teste@gmail.com"
    },
    {
        "id": 3,
        "firstName": "Admin",
        "lastName": "V1",
        "emailId": "admin@admin.com"
    }
    ]
  }
}
