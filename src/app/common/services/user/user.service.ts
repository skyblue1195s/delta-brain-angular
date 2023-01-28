import { Injectable } from '@angular/core';
import { getRandomData } from '@common/helper/random';
import { getUUID } from '@common/helper/untils';
import { ListBirth, ListMails, ListName, ListUsername } from '@constants/constant';
import { IUser } from '@interfaces/user.interface';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  isOpen = new Subject<boolean>();
  listUsers = new BehaviorSubject<IUser[]>([])
  userDetail = new BehaviorSubject<IUser>({})
  constructor() {}

  getListUser() {
    const arrays: IUser[] = []
    new Array(40).fill(40).map(x =>  {
      arrays.push({
        id: getUUID(),
        username: getRandomData(ListUsername),
        fullname: getRandomData(ListName),
        email: getRandomData(ListMails),
        sex: !Math.round(Math.random()),
        address: '',
        created_at: '2023-1-28 20:20',
        birthday: getRandomData(ListBirth),
      })
    })
    this.listUsers.next(arrays)
  }
}
