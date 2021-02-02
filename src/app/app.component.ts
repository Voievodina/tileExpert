import { Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  host: {
    '(document:click)': 'clearSearch($event)',
  },
})

export class AppComponent {
  isSearching=false;

  onSearch(){
    this.isSearching=true;
  }
 

  clearSearch(event){
    let searchBlock:HTMLElement=document.getElementById("lookFor");
    let searchIcon:HTMLElement=document.getElementById("searchIcon");
    if (!searchBlock.contains(event.target)&&!searchIcon.contains(event.target))
      this.isSearching=false; 
  }

}
