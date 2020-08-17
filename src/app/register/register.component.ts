import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, NgForm } from '@angular/forms';
import { first } from 'rxjs/operators';
import { Router,ActivatedRoute } from '@angular/router';
import { AuthService } from '../auth.service';


@Component({
templateUrl: './register.component.html',
styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
angForm: FormGroup
returnUrl: string;

constructor(private fb: FormBuilder,private au: AuthService,private router:Router,private route: ActivatedRoute,
    ) {
this.angForm = this.fb.group({
email: ['', [Validators.required,Validators.minLength(1),Validators.email]],
password: ['', Validators.required],
name: ['', Validators.required],
number: ['', Validators.required],

});

}

ngOnInit() {
}

postdata(angForm1)
{
this.au.register(angForm1.value);
this.router.navigate["/"];
    }
get email() { return this.angForm.get('email'); }
get password() { return this.angForm.get('password'); }
}