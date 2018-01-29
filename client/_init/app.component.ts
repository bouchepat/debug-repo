import { Component, OnInit, OnDestroy, HostListener } from '@angular/core';
import { Router, NavigationStart, NavigationEnd } from '@angular/router';
import { Subscription } from "rxjs";
import { FormGroup, FormBuilder, NgForm } from '@angular/forms';


@Component({
    selector: 'app',
    templateUrl: 'app.component.html'
})

export class AppComponent implements OnInit {
    form: FormGroup;
    testInput: string;

    result: string;

    constructor(private _formBuilder: FormBuilder) {

    }

    ngOnInit(): void {

        this.form = this._formBuilder.group({
            username: ['']
        });
    }

    onSubmit() {
        if (this.form.valid) {
            console.log('username', this.form.get('username').value);

            this.result = 'Form Submitted...';
            console.log(this.result);
        }
    }

    onSubmit1(form1) {
        if (form1.valid) {
            console.log('testInput', this.testInput);

            this.result = 'Form 1 Submitted...';
            console.log(this.result);
        }
    }
}