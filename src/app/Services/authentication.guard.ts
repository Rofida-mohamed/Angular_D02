import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AccountsService } from './accounts.service';

export const authenticationGuard: CanActivateFn = (route, state) => {
  let service = inject(AccountsService);

  if(service.islogin()){
    return service.islogin();
  }else{
    let router = inject(Router);
    router.navigate(['/login']);
    return false;
  }

  
};
