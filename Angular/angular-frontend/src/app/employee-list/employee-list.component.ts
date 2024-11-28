import { Component, OnInit } from '@angular/core';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-employee-list',
  standalone: false,
  
  templateUrl: './employee-list.component.html',
  styleUrl: './employee-list.component.css'
})
export class EmployeeListComponent implements OnInit {
  employees: Employee[] | undefined;

  constructor(private employeeService: EmployeeService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.getEmployees();
  }

  updateEmployee(id: number){
    this.router.navigate(['update-employee', id])
  }

  deleteEmployee(id: number){
    this.employeeService.deleteEmployee(id).subscribe({
      next: (data) => {
        this.getEmployees()
        console.log(data)
      },
      error(err) {
        console.log(err)
      },
    })
  }

  private getEmployees() {
    this.employeeService.getEmployeesList().subscribe(data => {
      this.employees = data;
    })
  }
}
