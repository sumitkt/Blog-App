import { Article } from "./article";

export const ARTICLES: Article[]= [
    {
        id:1,
        title :'My-first-article',
        content:'',
        description:"This is my first article! It's great. P;ease read it. :)",
        key:'my-first-article',
        date:new Date(),
        imageUrl: 'http://angular.io/assets/images/logos/angular/angular.png'

    },
    {
        id:2,
        title :'My-Second-article',
        content:'',
        description:"This is my Second article! It's great. P;ease read it. :)",
        key:'my-first-article',
        date:new Date(),
        imageUrl: 'https://images.unsplash.com/photo-1479090793912-eb9929f4fdb2?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bW9vbnxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60'

    }
]