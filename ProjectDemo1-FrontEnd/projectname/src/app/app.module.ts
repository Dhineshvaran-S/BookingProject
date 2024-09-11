import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table'; // Import MatTableModule
import { MatToolbarModule } from '@angular/material/toolbar';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { ModalModule } from 'ngx-bootstrap/modal';
import { AddRoomComponent } from './add-room/add-room.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
//import { BsModalModule } from 'ngx-bootstrap/modal'; 
import { BookedRoomsComponent } from './booked-rooms/booked-rooms.component';
import { EdituserComponent } from './edituser/edituser.component';
import { FeedbackComponent } from './feedback/feedback.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { PaymentComponent } from './payment/payment.component';
import { RegisterComponent } from './register/register.component';
import { RoomCardComponent } from './room-card/room-card.component';
import { RoomListComponent } from './room-list/room-list.component';
import { RoomStatusComponent } from './room-status/room-status.component';
import { StaffListComponent } from './staff-list/staff-list.component';
import { StaffModalComponent } from './staff-modal/staff-modal.component';
import { UserDashboardComponent } from './user-dashboard/user-dashboard.component';
import { UserRoomsComponent } from './user-rooms/user-rooms.component';
import { UsersComponent } from './users/users.component';
import { DatepickerComponent } from './datepicker/datepicker.component';

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
    AdminDashboardComponent,
  
    FeedbackComponent,
    LogoutComponent,
    UsersComponent,
    EdituserComponent,
    RoomCardComponent,
    RoomListComponent,
    AddRoomComponent,
    StaffListComponent,
    StaffModalComponent,
    UserDashboardComponent,
    UserRoomsComponent,
    BookedRoomsComponent,
    RoomStatusComponent,
    PaymentComponent,
    DatepickerComponent,
  ],
  imports:
   [
    BrowserModule,
    FormsModule,
    BrowserModule,
    HttpClientModule,
    // BsModalModule.forRoot() ,
    
    AppRoutingModule,
    RouterModule,
    MatSidenavModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatListModule,
    ReactiveFormsModule,
    NgbModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatSnackBarModule,
    MatTableModule, // Add MatTableModule here
    MatSortModule, // Add MatSortModule here (optional)
    ModalModule.forRoot(),
    BsDatepickerModule.forRoot(),
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
