import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, NgForm } from '@angular/forms';
import { first } from 'rxjs/operators';
import { Router,ActivatedRoute } from '@angular/router';
import { AuthService } from '../auth.service';


@Component({
templateUrl: './login.component.html',
styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
angForm: FormGroup
returnUrl: string;

constructor(private fb: FormBuilder,private dataService: AuthService,private router:Router,private route: ActivatedRoute,
    ) {
this.angForm = this.fb.group({
email: ['', [Validators.required,Validators.minLength(1),Validators.email]],
password: ['', Validators.required]
});

}

ngOnInit() {
}
postdata(angForm1)
{
this.dataService.login(
  angForm1.value.email, angForm1.value.password
);
    }
get email() { return this.angForm.get('email'); }
get password() { return this.angForm.get('password'); }
}