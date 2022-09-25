import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FilmsDetailsService } from '../services/films-details.service';

@Component({
  selector: 'app-films-details',
  templateUrl: './films-details.component.html',
  styleUrls: ['./films-details.component.css']
})
export class FilmsDetailsComponent implements OnInit {

  id: any;
  dataImage: any;
  dataDetail: any;

  isNav = true;

  constructor(
    private filmDetailService: FilmsDetailsService,
    private route: ActivatedRoute,
    private router: Router
  ) { 
    this.route.url.subscribe(url => {
      this.id = url[1]['path'];
      this.getFilmDetail(this.id);
      this.getFilmImage(this.id);
    })
  }

  ngOnInit(): void {
  }

  getFilmImage(id: any){
    this.filmDetailService.getFilmImage(id).subscribe((res: any) => {
      this.dataImage = res;
    });
  }

  getFilmDetail(id: any){
    this.filmDetailService.getFilm(id).subscribe((res: any) => {
      this.dataDetail = res;
      console.log(this.dataDetail);
    },
    error=>{
      const errorStatus = error.status;
      console.log(errorStatus);
      if(errorStatus == 400 || errorStatus == 404 || errorStatus == 500){
        this.router.navigate(['/404']);
      }
    });
  }

}
