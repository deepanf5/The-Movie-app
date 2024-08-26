import { Component, OnInit } from '@angular/core';
import { PrimeModule } from '../../modules/primeng.module';
import { RouterModule } from '@angular/router';


@Component({
  selector: 'app-nav-bar',
  standalone: true,
  imports: [PrimeModule,RouterModule],
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.css'
})
export class NavBarComponent  implements OnInit{

  
  ngOnInit(): void {

  }
  }