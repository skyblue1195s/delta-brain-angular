import { Component, OnInit } from '@angular/core';
import { IUser } from '@interfaces/user.interface';
import { UserService } from '@services/user/user.service';
import { checkSex } from 'src/app/common/helper/untils';
import {isEmpty, orderBy} from 'lodash'
import { NzNotificationService } from 'ng-zorro-antd/notification';

@Component({
  selector: 'app-card-view',
  templateUrl: './card-view.component.html',
  styleUrls: ['./card-view.component.scss']
})
export class CardViewComponent implements OnInit {
  listOfUsers: IUser[] = []
  constructor(
    private _userService: UserService,
    private _notification: NzNotificationService
  ) {
    this._userService.getListUser()
  }

  ngOnInit(): void {
    this.getListUser()
  }

  getListUser() {
    this._userService.listUsers.subscribe(data => this.listOfUsers = orderBy(data, ['created_at'], ['desc']))
  }

  editUser(item: IUser) {
    this._userService.userDetail.next(item)
    this._userService.isOpen.next(true)
  }

  onRemove(id: string) {
    const index = this.listOfUsers.findIndex(x => x.id === id)
    if (index > -1) {
      this.listOfUsers.splice(index, 1)
      this._notification.success('Success', 'User removed!')
    }
  }

  checkSex(sex: boolean) {
    return checkSex(sex) || ''
  }
}
