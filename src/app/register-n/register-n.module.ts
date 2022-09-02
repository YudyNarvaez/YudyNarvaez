import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RegisterNPageRoutingModule } from './register-n-routing.module';

import { RegisterNPage } from './register-n.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RegisterNPageRoutingModule
  ],
  declarations: [RegisterNPage]
})
export class RegisterNPageModule {}
