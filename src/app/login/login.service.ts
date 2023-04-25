import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private storageUsersField:string = 'tm.users';
  private storageLoggedUserField:string = 'tm.loggeduser';

  constructor() { }

  readLoggedUserFromStorage(){
    const loggedUsername = localStorage.getItem(this.storageLoggedUserField);
    return loggedUsername;
  }

  writeLoggedUserToStorage(un:string) {
    localStorage.setItem(this.storageLoggedUserField,un);
  }

  removeLoggedUserFromStorage() {
    localStorage.removeItem(this.storageLoggedUserField);
  }

  readUsersArrayFromStorage():string[] {
    const usersJSON = localStorage.getItem(this.storageUsersField);
    let usersArray = [];
    if (usersJSON) {
      usersArray = JSON.parse(usersJSON); 
    }
    return usersArray;
  }

  writeUsersArrayToStorage(users:string[]) {
    localStorage.setItem(this.storageUsersField,JSON.stringify(users));
  }

  checkUsernameForLogin(un:string):boolean {
    let usersArray = this.readUsersArrayFromStorage();
    if (usersArray.includes(un)) {
      return true;
    }
    return false;
  }

  registrationUsername(un:string):boolean {
    let usersArray = this.readUsersArrayFromStorage();
    if (usersArray.includes(un)) {
      return false;
    }else{
      usersArray.push(un);
      this.writeUsersArrayToStorage(usersArray);
    }
    return true;
  }


}
