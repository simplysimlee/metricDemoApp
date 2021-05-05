import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FeaturesRoutingModule } from './features-routing.module';
import { HomeComponent } from './home/home.component';
import { SharedModule } from '@shared/shared.module';
import { ShowOverlayComponent } from './show-overlay/show-overlay.component';
import { MetricScoreComponent } from './show-overlay/metric-score/metric-score.component';
import { NumFilterPipe } from '@shared/pipes/num-filter.pipe';

const featuresDepndMod = [
  FeaturesRoutingModule,
  SharedModule
]

@NgModule({
  declarations: [
    HomeComponent,
    ShowOverlayComponent,
    MetricScoreComponent

  ],
  imports: [
    CommonModule,
    ...featuresDepndMod
  ],
  exports:[HomeComponent],
  providers: [NumFilterPipe]
})
export class FeaturesModule { }
