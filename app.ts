/// <reference path='./typings/angular2/angular2.d.ts' />

import {Component, View, bootstrap} from 'angular2/angular2';

@Component(
	{
		selector: 'my-app'
	}
)
@View({
	template:"<H1>Hello {{name}}</H1>"
})

class MyAppController{
	name:string;
	constructor(){
		this.name = "Alice";
	}
}

bootstrap(MyAppController);

