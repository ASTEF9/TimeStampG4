export class User
{
	public id: number;
	public username: string;
	public password: string;
	
	constructor(u: string, p: string)
	{
		this.username = u;
		this.password = p;
	}
	/*
	constructor(i: number, u: string, p: string)
	{
		this.id = i;
		this.username = u;
		this.password = p;
	}
	*/
}