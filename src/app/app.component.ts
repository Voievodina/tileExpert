import { Component} from '@angular/core';
import { trigger, style, animate, transition } from '@angular/animations';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  host: {
    '(document:click)': 'clearSearch($event)',
  },
  animations: [
    trigger(
      'openAnimation', [
        transition(':enter', [
          style({ 
          left:"93%",
           width:"0%",
          }), 
          animate('0.5s ease', style({ 
            left:"0",
            width:'90%',
          }))
        ]),
        transition(':leave', [          
          style({width:"90%", 
          left:"0",
            }),    
          animate('0.5s ease',
           style({
             width:"0%",
              left:"93%"
            }))
      ])
      ]
    )
  ],
})

export class AppComponent {
  isSearching:boolean=false;
  isChoosig:boolean=false;
  
  
  clearSearch(event){
    let searchBlock:HTMLElement=document.getElementById("lookFor");
    let searchIcon:HTMLElement=document.getElementById("searchIcon");
    if(!searchBlock.contains(event.target)&&!searchIcon.contains(event.target)){
      this.isChoosig=false;
      this.isSearching=false;
    }
       
  }
  onSearch(){
    this.isSearching=true;
  }

  onOptions(){
    this.isChoosig=true;
  }

}
