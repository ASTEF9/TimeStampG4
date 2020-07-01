import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { LoginService } from '../login.service';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';

@Component({
  selector: 'app-display-user',
  templateUrl: './display-user.component.html',
  styleUrls: ['./display-user.component.css']
})
export class DisplayUserComponent implements OnInit {

	user: User;
	userId: number;
	errorMsg;

	constructor(public loginService: LoginService, private route: ActivatedRoute, private router: Router){}

	ngOnInit(): void 
	{      
		this.route.paramMap.subscribe((params: ParamMap) => 
		{
			this.userId = Number(params.get('id'));
		});
		this.loginService.getValidUsers().subscribe
		(
			(data) => this.init(data),
			(error) => this.errorMsg = error,//error/failure
			() => console.log('the sequence completed!')//complete
		)
	}
	
	//Find the User
	init(users: User[]): void
	{
		for(var x = 0; x < users.length; x++)
			if(this.userId == users[x].id)
				this.user = users[x];	
	}

}
