import { Component, OnInit } from '@angular/core';
import {AppService} from 'src/app/app.service';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})
export class AppComponent  implements OnInit {
	
 
   constructor(private appService : AppService) {

   }

	a:any;
    books = [

		{
			title: "Love is beautiful.",
			author: "Masuma",
			img:"https://m.media-amazon.com/images/I/81t-IstQ+ZL._SY466_.jpg"
		},
		{
			title:"Pete the Cat: Pete at the Beach.",
			author:"James Dean ",
			img:"https://m.media-amazon.com/images/I/81hCIfZcnfL._SY466_.jpg",
			description: " this books for kids to read this book to increase their knowledge with fun. "
		},
		{
			title:"Clifford's Good Deeds.",
			author:" Norman Bridwell",
			img:"https://m.media-amazon.com/images/I/71RsFVNONuL._SY466_.jpg",
			description: " this books for kids to read this book to increase their knowledge with fun. "
		},
		
		{
           title:"I Love You More - Children's Padded Board Book.",
		   author:"Little Hippo Books",
		   img:"https://m.media-amazon.com/images/I/91Xv1gxxijL._SY466_.jpg",
		   description: " this books for kids to read this book to increase their knowledge with fun. "
		},

		
		{
			title:"If Animals Kissed Good Night Board book.",
			author:"Ann Whitford Paul",
			img:"https://m.media-amazon.com/images/I/81nzxODnaJL._SY466_.jpg",

		    description: " this books for kids to read this book to increase their knowledge with fun. "
		}

	];

	addBook(data:any) {
		//this.books.push(data);
		this.appService.addElement(this.books, data);
	}

	deleteBook(data:any) {
		let n = this.books.indexOf(data);
		this.books.slice(n, 1);
		this.appService.deleteElement(this.books );
	}
	


ngOnInit(){
	//this.addBook();
	this.a = 10;
	this.getEmployees();
}

employees:any;

getEmployees() {
	this.appService.getEmployees().subscribe(res => {
		console.log(res.data);
        this.employees = res.data;
	});
}


}

