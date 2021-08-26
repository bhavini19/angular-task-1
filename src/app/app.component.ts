import { Component ,OnInit} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'hwtask';
  
  ngOnInit():void{ }
  
  array= ['First Child', 'Second Child','Third Child','Fourth Child'];
}