import { ActivatedRouteSnapshot, ResolveFn, RouterStateSnapshot } from '@angular/router';
import { UsersListService } from '../service/users-list.service';
import { inject } from '@angular/core';
import { Observable, catchError, of } from 'rxjs';

export const RouteResolver: ResolveFn<any> = (
  route:ActivatedRouteSnapshot, 
  state:RouterStateSnapshot,
  srv : UsersListService = inject(UsersListService)
  ):Observable<{}> =>
  srv.getUsers().pipe(
    catchError((err)=>{
      return of('No data' + err);
    })
  );
