import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PostsComponent } from '../posts/posts.component'
import { LoginComponent } from '../login/login.component';
import { RegisterComponent } from '../register/register.component'
import { ProfileComponent } from '../profile/profile.component';
import { MyPostComponent } from '../my-post/my-post.component';
import { GuardGuard } from '../guard.guard'


const routes: Routes = [
  { path: '', redirectTo: 'logIn', pathMatch: 'full' },
  { path: 'logIn', component: LoginComponent },
  { path: 'signUp', component: RegisterComponent },
  { path: 'posts', component: PostsComponent, canActivate: [GuardGuard] },
  { path: 'profile', component: ProfileComponent },
  { path: 'myPost', component: MyPostComponent},
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
