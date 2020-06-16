import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { environment } from '../environments/environment';


// Modules
import { AlertModule } from "ngx-bootstrap/alert";
import { NgxLoadingModule } from 'ngx-loading';
import { AngularFireModule } from "@angular/fire";
import { AngularFireStorageModule } from "@angular/fire/storage";
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFireDatabaseModule } from "@angular/fire/database";


// Guards
import { AuthGuard } from './guards/auth.guard';
import { IsOwnerGuard } from "./guards/is-owner.guard";

// Services
import { AlertService } from './services/alert.service';
import { AuthService } from './services/auth.service';
import { ChatroomService } from "./services/chatroom.service";
import { LoadingService } from './servies/loading.service';
import { OpentokService } from "./services/opentok.service";
import { PusherService } from "./services/pusher.service";

//component
import { AppComponent } from './app.component';
import { LoginComponent } from './pages/login/login.component';
import { SignupComponent } from './pages/signup/signup.component';
import { ChatComponent } from './pages/chat/chat.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ChatInputComponent } from './pages/chat/components/chat-input/chat-input.component';
import { ChatroomListComponent } from './pages/chat/components/chatroom-list/chatroom-list.component';
import { ChatroomTitleBarComponent } from './pages/chat/components/chatroom-title-bar/chatroom-title-bar.component';
import { ChatMessageComponent } from './pages/chat/components/chat-message/chat-message.component';
import { ChatroomWindowComponent } from './pages/chat/components/chatroom-window/chatroom-window.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { EditProfileComponent } from './pages/edit-profile/edit-profile.component';
import { PublisherComponent } from "./pages/chat/components/publisher/publisher.component";
import { SubscriberComponent } from "./pages/chat/components/subscriber/subscriber.component";
import { Sala1Component } from './pages/salas/sala1/sala1.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    ChatComponent,
    NavbarComponent,
    ChatInputComponent,
    ChatroomListComponent,
    ChatroomTitleBarComponent,
    ChatMessageComponent,
    ChatroomWindowComponent,
    ProfileComponent,
    EditProfileComponent,
    PublisherComponent,
    SubscriberComponent,
    Sala1Component,
    

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AlertModule.forRoot(),
    NgxLoadingModule,
    ReactiveFormsModule,
    FormsModule,
    AngularFireStorageModule,
    AngularFireDatabaseModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    AngularFirestoreModule,

  ],
  providers: [
    AlertService,
    LoadingService,
    AuthService,
    ChatroomService,
    OpentokService,
    AuthGuard,
    IsOwnerGuard
    
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
