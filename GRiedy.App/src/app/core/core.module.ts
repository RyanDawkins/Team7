import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { TopNavComponent } from "./top-nav/top-nav.component";

import { SharedModule } from "../shared/shared.module";

@NgModule({
  imports: [CommonModule, RouterModule, SharedModule],
  declarations: [TopNavComponent],
  exports: [TopNavComponent]
})
export class CoreModule {}
