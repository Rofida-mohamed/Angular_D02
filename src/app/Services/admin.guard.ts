import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AccountsService } from './accounts.service';

export const adminGuard: CanActivateFn = (route, state) => {
  let service = inject(AccountsService);

  if(service.isadmin()){
    return service.isadmin();
  }else{
    let router = inject(Router);
    router.navigate(['/home']);
    return false;
  }
};
