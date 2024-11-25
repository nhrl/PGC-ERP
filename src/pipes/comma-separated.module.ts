import { NgModule } from '@angular/core';
import { CommaSeparatedPipe } from './comma-separated.pipe';

@NgModule({
  declarations: [CommaSeparatedPipe],
  exports: [CommaSeparatedPipe]
})
export class CommaSeparatedModule {}