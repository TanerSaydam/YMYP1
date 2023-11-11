import { Component } from '@angular/core';
import { PopupService } from 'src/app/services/popup.service';
import { TranslateModule } from '@ngx-translate/core';
import { NgIf, NgStyle } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';

@Component({
    selector: 'app-layouts',
    templateUrl: './layouts.component.html',
    styleUrls: ['./layouts.component.css'],
    standalone: true,
    imports: [NavbarComponent, RouterOutlet, NgIf, NgStyle, TranslateModule, FooterComponent]
})
export class LayoutsComponent {
 
  constructor(
    public popup: PopupService
  ) {}  
}
