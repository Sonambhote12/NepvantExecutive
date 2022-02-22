import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { NbCardModule, NbIconModule, NbLayoutModule, NbMenuModule } from '@nebular/theme';
import { NbEvaIconsModule } from '@nebular/eva-icons';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';



@NgModule({
  declarations: [HeaderComponent, FooterComponent],
  imports: [
    CommonModule,
    NbLayoutModule,
    NbEvaIconsModule,
    NbIconModule,   
    NbMenuModule,
    NbCardModule,
    NgbModule
  ],
  exports:[
    HeaderComponent,
    FooterComponent
  ]
})
export class IncludeModule { }
