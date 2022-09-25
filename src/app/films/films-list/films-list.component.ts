import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FilmsListService } from '../services/films-list.service';

@Component({
  selector: 'app-films-list',
  templateUrl: './films-list.component.html',
  styleUrls: ['./films-list.component.css']
})
export class FilmsListComponent implements OnInit {

  dataSource: any;

  isSearch = true;
  searchText: string = '';

  constructor(
    private router: Router,
    private filmsListService: FilmsListService
  ) { }

  ngOnInit(): void {
    this.filmsListService.getFilmsList().subscribe((items) => {
      this.dataSource = items;
      console.log(this.dataSource);
    })
  }

  navLoader(id: any){
    this.router.navigate(['/detalhes/' + id]);
  }

  onSearchTextEntered(search: string){
    this.searchText = search;
    console.log(this.searchText);
  }

}
