import { Component, OnInit } from '@angular/core';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-employee',
  standalone: false,
  
  templateUrl: './create-employee.component.html',
  styleUrl: './create-employee.component.css'
})
export class CreateEmployeeComponent implements OnInit {
  employee: Employee = new Employee();

  constructor(private employeeService: EmployeeService,
    private router: Router
  ) {}

  ngOnInit(): void {
    
  }

  goToEmployeeList(){
    this.router.navigate(['/employees'])
  }

  onSubmit() {
    this.employeeService.createEmployee(this.employee).subscribe({
      next: (data) => {
        console.log(data)
        this.goToEmployeeList()
      },
      error: (error) => {
        console.error('Erro ao buscar o funcionário:', error);
      },
      complete: () => {
        console.log('Requisição concluída.');
      },
    });
  }
}
