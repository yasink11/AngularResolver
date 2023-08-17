import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserComponent } from './components/user/user.component';
import { RouteResolver } from './resolvers/route.resolver';

const routes: Routes = [
  {
    path: 'users',
    component: UserComponent,
    resolve: {
      userResolver: RouteResolver
    },
  },
  {
    path: '**',
    redirectTo: '/',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
