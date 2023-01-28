import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { getUUID } from '@common/helper/untils';
import { UserService } from '@services/user/user.service';
import { isEmpty, isNull } from 'lodash';

@Component({
  selector: 'app-user-popup',
  templateUrl: './user-popup.component.html',
  styleUrls: ['./user-popup.component.scss'],
})
export class UserPopupComponent implements OnInit {
  visible = false;
  validateForm: FormGroup;
  loading = false;
  isEdit = false;
  title = 'Thêm tài khoản';

  constructor(private _fb: FormBuilder, private _userService: UserService) {
    this.validateForm = this._fb.group({
      username: [
        null,
        [
          Validators.pattern('^[a-z0-9]+$'),
          Validators.maxLength(8),
          Validators.required,
        ],
      ],
      email: [null, [Validators.email, Validators.required]],
      fullname: [null, [Validators.required]],
      address: [null, [Validators.required]],
      sex: [true],
      birthday: [null, [Validators.required]],
      id: [null],
    });
  }
  ngOnInit(): void {
    this.handlerFormStatus();
  }

  handlerFormStatus() {
    this._userService.isOpen.subscribe((data) => (this.visible = data));
    this._userService.userDetail.subscribe((user) => {
      if (isEmpty(user)) {
        this.title = 'Thêm tài khoản';
        this.isEdit = false;
      } else {
        this.validateForm.patchValue(user);
        this.title = 'Chỉnh sửa tài khoản';
        this.isEdit = true;
      }
    });
  }

  closeForm() {
    this._userService.isOpen.next(false);
    this._userService.userDetail.next({});
  }

  submitForm(e: any): void {
    if (!this.validateForm.invalid) {
      this.loading = true;
      const body = this.validateForm.value;

      const users = this._userService.listUsers.getValue();
      if (this.isEdit) {
        const index = users.findIndex((x) => x.id === body.id);
        if (index > -1) {
          users[index] = body;
          this._userService.listUsers.next(users);
        }
      } else {
        body.id = getUUID();
        body.created_at = new Date().toString();
        const newUsers = [...users, body];
        this._userService.listUsers.next(newUsers);
      }
      this.loading = false;
      this._userService.isOpen.next(false);
      this._userService.userDetail.next({});
      this.validateForm.reset();
    } else {
      Object.values(this.validateForm.controls).forEach(control => {
        if (control.invalid) {
          control.markAsDirty();
          control.updateValueAndValidity({ onlySelf: true });
        }
      });
    }
  }
}
