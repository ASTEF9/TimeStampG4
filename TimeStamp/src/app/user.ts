export class User
{
	public id: number;
	public username: string;
	public password: string;
	public firstName: string;
	public lastName: string;
	public description: string;
	
	constructor(u: string, p: string, f: string, l: string, d: string)
	{
		this.username = u;
		this.password = p;
		this.firstName = f;
		this.lastName = l;
		this.description = d;
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