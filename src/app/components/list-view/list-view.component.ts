import { Component, OnInit, ViewChild } from '@angular/core';
import {CdkDragDrop, moveItemInArray} from '@angular/cdk/drag-drop';
import { IUser } from '@interfaces/user.interface';
import { UserService } from '@services/user/user.service';
import { checkSex } from 'src/app/common/helper/untils';
import { get, isEmpty, orderBy } from 'lodash';
import { NzNotificationService } from 'ng-zorro-antd/notification';

@Component({
  selector: 'app-list-view',
  templateUrl: './list-view.component.html',
  styleUrls: ['./list-view.component.scss']
})
export class ListViewComponent implements OnInit {
  listOfUsers: IUser[] = []
  @ViewChild('userData')
  userData = {data: []};
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

  checkSex(sex: boolean) {
    return checkSex(sex) || ''
  }

  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.userData.data, event.previousIndex, event.currentIndex);
  }

  onRemove(id: string) {
    const index = this.userData.data.findIndex(x => get(x, 'id') === id)
    if (index > -1) {
      this.userData.data.splice(index, 1)
      this._notification.success('Success', 'User removed!')
    }
  }

  editUser(item: IUser) {
    this._userService.userDetail.next(item)
    this._userService.isOpen.next(true)
  }
}
