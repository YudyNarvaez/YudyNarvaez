import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RegisterCPageRoutingModule } from './register-c-routing.module';

import { RegisterCPage } from './register-c.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RegisterCPageRoutingModule
  ],
  declarations: [RegisterCPage]
})
export class RegisterCPageModule {}
