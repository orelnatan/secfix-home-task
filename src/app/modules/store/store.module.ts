import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { TODO_FEATURE_KEY, reducer } from './todo/todo.reducer';
import { TodoEffects } from './todo/todo.effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    StoreModule.forRoot(reducer),
    EffectsModule.forRoot(),
    StoreModule.forFeature(TODO_FEATURE_KEY, reducer),
    EffectsModule.forFeature([TodoEffects]),
    StoreDevtoolsModule.instrument({
      maxAge: 25, 
  }),
  ]
})
export class TodoStoreModule { }
