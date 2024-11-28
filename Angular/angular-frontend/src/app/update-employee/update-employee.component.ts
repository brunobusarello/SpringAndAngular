import { Component, OnInit } from '@angular/core';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-update-employee',
  standalone: false,

  templateUrl: './update-employee.component.html',
  styleUrl: './update-employee.component.css'
})
export class UpdateEmployeeComponent implements OnInit {
  employee: Employee = new Employee()
  id!: number;

  constructor(private employeeService: EmployeeService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];

    this.employeeService.getEmployee(this.id).subscribe({
      next: (data) => {
        this.employee = data;
      },
      error: (error) => {
        console.error('Erro ao buscar o funcionário:', error);
        this.goToEmployeeList();
      },
      complete: () => {
        console.log('Requisição concluída.');
      },
    });
  }

  goToEmployeeList(){
    this.router.navigate(['employees'])
  }

  onSubmit() {
    this.employeeService.updateEmployee(this.id, this.employee).subscribe({
      next: (data) => {
        console.log(data)
        this.goToEmployeeList()
      }
    })
  }
}
