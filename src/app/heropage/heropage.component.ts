import { Component } from '@angular/core';
import AOS from 'aos';


@Component({
  selector: 'app-heropage',
  standalone: true,
  imports: [],
  templateUrl: './heropage.component.html',
  styleUrl: './heropage.component.css'
})
export class HeropageComponent {
  ngOnInit(){
    AOS.init()
  }
}

