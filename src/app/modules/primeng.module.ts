import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { MenubarModule } from 'primeng/menubar';
import { AvatarModule } from 'primeng/avatar';
import { CarouselModule } from 'primeng/carousel';
import { RatingModule } from 'primeng/rating';
import { TableModule } from 'primeng/table';
import { ChipModule } from 'primeng/chip';
import { KnobModule } from 'primeng/knob';
import { TagModule } from 'primeng/tag';
import { MessagesModule } from 'primeng/messages';


@NgModule({
    imports: [
      CommonModule,
      ButtonModule,
      MenubarModule,
      AvatarModule,
      RatingModule,
      TableModule,
      ChipModule,
      KnobModule,
      TagModule,
      MessagesModule

    ],
    exports:[
      ButtonModule,
      MenubarModule,
      AvatarModule,
      CarouselModule,
      RatingModule,
      TableModule,
      ChipModule,
      KnobModule,
      TagModule,
      MessagesModule

    ]
})
export class PrimeModule{}

