import { NgModule, Injector } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        NgbModule.forRoot(),
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
    ],
    exports: [],
    declarations: [
        AppComponent

    ],
    providers: [],
    bootstrap: [AppComponent]
})

export class AppModule {
    constructor() {

    }
}