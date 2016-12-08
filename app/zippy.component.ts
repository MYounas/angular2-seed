import {Component,Input} from 'angular2/core';

@Component({
    selector:'zippy',
    template:`
        <div class="zippy">
            <div class="zippy-title" (click)="onClick()">
                <b>{{title}}</b>
                <i class="pull-right glyphicon" [ngClass]="{
                    'glyphicon-chevron-down':!up,
                    'glyphicon-chevron-up':up
                }">
                </i>
            </div>
            <div *ngIf="up" class="zippy-content">
                <ng-content></ng-content>
            </div>
        <div>
    `,
    styles:[`
        .zippy-title:hover{
            cursor:pointer;
            background:#F5F5F5;
        }
        .zippy-title,.zippy-content{
            border:1px solid #F5F5F5;
            border-radius:2px; 
            padding:20px;
        }
    `]
})

export class ZippyComponent{

    @Input() title=""
    up=false

    onClick(){
        this.up=!this.up
    }

}