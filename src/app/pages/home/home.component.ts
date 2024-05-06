import { Component, OnInit , ElementRef, ViewChild } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { User } from '../../models/user';
import { UsersService } from '../../services/users.service';
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HttpClientModule, CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {
  allUsers: User[] = [];
  users: User[] = [];
  currentPage: number = 1;
  limit: number = 10; // Items per page
  msg: string= ""
  class:string=""
  alrt_class:string=""
  @ViewChild('myButton') myButton!: ElementRef;
 
  constructor(private usersService: UsersService) { }

  ngOnInit(): void {
    this.usersService.getAllUsers().subscribe({
      next: (data) => {
        this.allUsers = data;
        this.updatePage(1); // Initialize the view with the first page
        this.alrt_class="hidden"
        
      },
      error: (error) => {
        console.error('Error fetching users:', error);
        this.msg=error.error.error
        this.class="hidden"
        this.myButton.nativeElement.click();
      }
    });
  }

  updatePage(page: number): void {
    this.currentPage = page;
    const startIndex = (page - 1) * this.limit;
    const endIndex = startIndex + this.limit;
    this.users = this.allUsers.slice(startIndex, endIndex);
  }

  nextPage(): void {
    if (this.currentPage * this.limit < this.allUsers.length) {
      this.updatePage(this.currentPage + 1);
    }
  }

  previousPage(): void {
    if (this.currentPage > 1) {
      this.updatePage(this.currentPage - 1);
    }
  }
}


  
