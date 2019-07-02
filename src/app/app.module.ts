import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { Module1Module } from './modules/module1/module1.module';
import { Module2Module } from './modules/module2/module2.module';
import { Module3Module } from './modules/module3/module3.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    Module1Module,
    Module2Module,
    Module3Module,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
