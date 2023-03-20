import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AppLayoutComponent } from '../../layout/app.layout.component';
import { HomeComponent } from './pages/home/home.component';

const routes: Routes = [
  {
      path: "",
      component: AppLayoutComponent,
      children: [
          {
              path: "",
              component: HomeComponent,
          }
      ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DashboardRoutingModule {}
