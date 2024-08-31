import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { MenubarModule } from 'primeng/menubar';
import { AvatarModule } from 'primeng/avatar';
import { CarouselModule } from 'primeng/carousel';

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
      AvatarModule,
      CarouselModule
    ]
})
export class PrimeModule{}

