import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { RemoteServiceProvider } from '..//../providers/remote-service/remote-service';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  providers: [RemoteServiceProvider]
})

export class HomePage {
  
  movies: Array<any>;

  constructor(public navCtrl: NavController , private movieService: RemoteServiceProvider) {

  }

  searchMovieDB(event,key) {
    if(event.target.value.length > 2) {
      this.movieService.searchMovies(event.target.value).subscribe(
          data => {
              this.movies = data.results; 
              console.log(data);
          },
          err => {
              console.log(err);
          },
          () => console.log('Movie Search Complete')
      );
   }
  }

  itemTapped(event, movie) {
    console.log(movie);
    alert(movie.title)  ;
    //this.navController.push(MovieInfo, {
      //  movie: movie
   // });
  }

}


