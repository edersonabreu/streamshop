import { ModuleWithProviders, NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { FilmsListComponent } from './films/films-list/films-list.component';
import { FilmsDetailsComponent } from './films/films-details/films-details.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ContactComponent } from "./contact/contact.component";

const routes: Routes = [
    { path: '', component: FilmsListComponent },
    { path: 'detalhes/:id', component: FilmsDetailsComponent },
    { path: 'contact', component: ContactComponent },
    { path: '**', component: NotFoundComponent }
];

@NgModule({
    declarations: [],
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule {}