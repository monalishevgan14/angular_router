import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-users',
  imports: [],
  templateUrl: './users.component.html',
  styleUrl: './users.component.css'
})
export class UsersComponent {
  name: string | null = ''; 
  id: string | null = '';
  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      // let id = params.get('id');
      // console.log('User id from route param:', id);
      console.log(params)

      this.id = params.get('id');
      this.name = params.get('name');
    });
  }
}
