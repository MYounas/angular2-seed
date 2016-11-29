import { Component,Input,Output } from 'angular2/core';

@Component({
    selector: 'voter',
    template: `
        <div style="width:20px">
            <i [class.highlighted]="upVote&&!normal" class="glyphicon glyphicon-menu-up" [class.hitted]="!upVote||normal" (click)="upClick()"></i>
            <span>{{ n }}</span>
            <i [class.highlighted]="downVote&&!normal" class="glyphicon glyphicon-menu-down" [class.hitted]="!downVote||normal" (click)="downClick()"></i>
        </div>
    `,
    styles: [`

        .hitted{
            cursor:pointer;
        }

        .highlighted{
            color:orange;
        }

    `]
})

export class VoterComponent {

    @Input() n = 0; 
    normal = true;
    upVote = false;
    downVote = false;

    upClick() {
        if (!this.upVote || this.normal) {
            this.normal=(this.downVote)?true:false;
            this.downVote = false;
            this.n++;
            this.upVote = true;
        }
    }

    downClick() {
        if (!this.downVote || this.normal) {
            this.normal=(this.upVote)?true:false;
            this.upVote = false;
            this.n--;
            this.downVote = true;
        }
    }

}
