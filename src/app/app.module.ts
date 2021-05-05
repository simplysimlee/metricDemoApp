import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FeaturesModule } from './features/features.module';
import { HttpClientModule } from '@angular/common/http';
import { AngularFireModule } from '@angular/fire';
import { environment } from 'src/environments/environment';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFireMessagingModule } from '@angular/fire/messaging';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { AngularFireFunctionsModule } from '@angular/fire/functions';

const AppImport = [
  BrowserModule,
  BrowserAnimationsModule,
  FeaturesModule,
  HttpClientModule,
  AngularFireModule.initializeApp(environment.firebase),
  AngularFirestoreModule,
  AngularFireAuthModule,
  AngularFireStorageModule,
  AngularFireMessagingModule,
  AngularFireDatabaseModule,
  AngularFireFunctionsModule,
];
@NgModule({
  imports: [...AppImport],
  declarations: [AppComponent],
  bootstrap: [AppComponent],
  exports: [],
})
export class AppModule {}
