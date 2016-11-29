import {Component} from 'angular2/core';
import {CoursesComponent} from './courses.component';
import {AuthorsComponent} from './authors.component';
import {FavoriteComponent} from './favorite.component';
import {HeartComponent} from './heart.component';
import {VoterComponent} from './voter.component';

@Component({
    selector: 'my-app',
    template: `
    <!--<h1>Hello Angular2</h1>
    <courses></courses>
    <authors></authors>
    <i class="glyphicon glyphicon-star"></i>
    <favorite [is-favorite]="post.isFavorite" (change)="onFavoriteChange($event)"></favorite>
    <heart [n]="tweet.n" [hit]="tweet.hit"></heart>-->
    <voter [n]="vot.n"></voter>
    `,
    // directives:[CoursesComponent,AuthorsComponent]
    // directives:[FavoriteComponent]
    // directives:[HeartComponent]
    directives:[VoterComponent]
})
export class AppComponent { 
    post={
        title:"Title",
        isFavorite:true
    }

    tweet={
        n:10,
        hit:false,
    }

    vot={
        n:10,
    }

    onFavoriteChange($event){
        console.log($event);
    }

}