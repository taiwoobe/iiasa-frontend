import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { Router } from '@angular/router';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  public email: string;
  public password: string;
  public error: string;
  loading = false;


  constructor(private auth: AuthenticationService, private router: Router) { }

  ngOnInit() {
  }

  submit() {
    this.loading = true;
    this.auth.login(this.email, this.password).pipe(first()).subscribe(() => {
      this.router.navigate(['/']);
      this.loading = false;
      }, error => {
        this.loading = false;
        this.error = error.error.error;
      }
    )
  }

}
