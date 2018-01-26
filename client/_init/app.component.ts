import { Component, OnInit, OnDestroy, HostListener } from '@angular/core';
import { Router, NavigationStart, NavigationEnd } from '@angular/router';
import { Subscription } from "rxjs";
import { FormGroup, FormBuilder } from '@angular/forms';


@Component({
    selector: 'app',
    templateUrl: 'app.component.html'
})

export class AppComponent implements OnInit {
    form: FormGroup;

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

            this.result = 'Submitted...';
            console.log(this.result);
        }
    }
}