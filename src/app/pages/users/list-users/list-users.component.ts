import { Component, OnInit } from '@angular/core';
import { UserService } from '@services/user/user.service';

@Component({
  selector: 'app-list-users',
  templateUrl: './list-users.component.html',
  styleUrls: ['./list-users.component.scss']
})
export class ListUsersComponent implements OnInit {
  isListView = false
  constructor(
    private _userService: UserService
  ) { }

  ngOnInit(): void {
  }

  openUserForm() {
    this._userService.isOpen.next(true)
  }

}
