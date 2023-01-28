import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListUsersComponent } from './list-users/list-users.component';
import { UsersRoutingModule } from './users-routing.module';
import { ListViewComponent } from '@components/list-view/list-view.component';
import { CardViewComponent } from '@components/card-view/card-view.component';
import { UserPopupComponent } from '@components/user-popup/user-popup.component';
import { PopConfirmComponent } from '@components/pop-confirm/pop-confirm.component';

import { DragDropModule } from '@angular/cdk/drag-drop';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzPopconfirmModule } from 'ng-zorro-antd/popconfirm';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzDrawerModule } from 'ng-zorro-antd/drawer';
import { NzCheckboxModule } from 'ng-zorro-antd/checkbox';
import { NzCardModule } from 'ng-zorro-antd/card';
import {NzAvatarModule} from 'ng-zorro-antd/avatar'
import {NzSwitchModule} from 'ng-zorro-antd/switch'
import {NzDatePickerModule} from 'ng-zorro-antd/date-picker'
import {NzRadioModule} from 'ng-zorro-antd/radio'
import {NzPaginationModule} from 'ng-zorro-antd/pagination'


@NgModule({
  declarations: [
    ListUsersComponent,
    ListViewComponent,
    CardViewComponent,
    UserPopupComponent,
    PopConfirmComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    NzDatePickerModule,
    NzAvatarModule,
    UsersRoutingModule,
    NzTableModule,
    NzFormModule,
    NzInputModule,
    NzDrawerModule,
    NzButtonModule,
    NzIconModule,
    NzPopconfirmModule,
    NzCheckboxModule,
    NzCardModule,
    NzSwitchModule,
    DragDropModule,
    NzRadioModule,
    NzPaginationModule
  ]
})
export class UsersModule { }
