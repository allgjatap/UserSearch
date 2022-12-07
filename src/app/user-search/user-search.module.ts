import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { UserSearchComponent } from "./user-search.component";
import { UserSearchRoutingModule } from "./user-serarch-routing.module";


@NgModule({
    declarations: [
      UserSearchComponent
    ],
    imports: [
        UserSearchRoutingModule,
        CommonModule,
        FormsModule, 
        HttpClientModule
    ],
    exports: [
        UserSearchComponent
    ]
  })
  export class UserSearchModule { }