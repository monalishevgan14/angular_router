import { Component } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';

@Component({
  selector: 'app-profil',
  imports: [RouterLink],
  templateUrl: './profil.component.html',
  styleUrl: './profil.component.css'
})
export class ProfilComponent {

    username: string | null = ''; 
    constructor(private router: ActivatedRoute) {}
    ngOnInit(): void {
      this.username = this.router.snapshot.paramMap.get('name');
      console.log('Name from route param:', name);
    }

    users=[
      {id:1, name:'monali', age:24},
      {id:2, name:'sonali', age:25},
      {id:3, name:'konali', age:26} 
    ]

}
