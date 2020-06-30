import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from './login.service';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent 
{
	title = 'TimeStamp';
	isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );
	
	constructor(public loginService: LoginService, private router: Router, private breakpointObserver: BreakpointObserver) { }
	
	logout(): void
	{
		this.loginService.loggedIn = false;
		this.router.navigate(['/']);
	}
}
