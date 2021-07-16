import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from "src/app/features/login/login.component";
import { UsersComponent } from "src/app/features/users/users.component";
import { ContactComponent } from "src/app/features/contact/contact.component";


const routes: Routes = [
  { path: 'login', component: LoginComponent },
  {path: 'users', component:UsersComponent},
  {path : 'contact',component:ContactComponent},
  {
    path: 'books', loadChildren: () => import('./features/books/books.module').then(m => m.BooksModule)
  },
  { path: '', redirectTo: '/login', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{useHash:true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
