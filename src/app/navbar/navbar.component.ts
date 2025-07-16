import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
 navbar={
  item1:"Home",
  item2:"Restaurant",
  item3:"About Us",
  item4:"Content Us",
  item5:"Sign in",
  src:"https://png.pngtree.com/png-vector/20220613/ourmid/pngtree-template-for-restaurant-catering-or-gastro-service-menu-logo-vector-png-image_31518578.png",
  alt:"network down"
 }

}
