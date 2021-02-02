import { Component} from '@angular/core';
import { trigger, style, animate, transition } from '@angular/animations';

@Component({
    selector: 'search',
    templateUrl: './search.component.html',
    styleUrls: ['./search.component.css'],
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
export class SearchComponent{
  isChoosig:boolean=false;

  onOptions(){
    this.isChoosig=true;
  }

  
}
  