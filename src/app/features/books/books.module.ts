import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserBooksComponent } from './user-books/user-books.component';
import { RouterModule } from "@angular/router";



@NgModule({
  declarations: [UserBooksComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([{ path:'',component: UserBooksComponent}])
  ]
})
export class BooksModule { }
