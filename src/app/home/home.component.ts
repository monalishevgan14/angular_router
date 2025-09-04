import { Component } from '@angular/core';
import { Router, RouterLink,  } from '@angular/router';


@Component({
  selector: 'app-home',
  imports: [RouterLink],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {


  constructor(private router:Router){}
  goToProfile(){
    // alert("ok");return
    this.router.navigate(['/profile', 'sonali']);
    // this.router.navigate(['/contact']);
  }

}
