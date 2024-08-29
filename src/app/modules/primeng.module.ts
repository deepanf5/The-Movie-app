import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { MenubarModule } from 'primeng/menubar';
import { AvatarModule } from 'primeng/avatar';

@NgModule({
    imports: [
      CommonModule,
      ButtonModule,
      MenubarModule,
      AvatarModule
    ],
    exports:[
      ButtonModule,
      MenubarModule,
      AvatarModule
    ]
})
export class PrimeModule{}

