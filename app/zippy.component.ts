import {Component,Input} from 'angular2/core';

@Component({
    selector:'zippy',
    template:`
        <div class="panel panel-default">
            <div class="panel-body" (click)="onClick()">
                <b>{{title}}</b>
                <span class="pull-right glyphicon" [ngClass]="{
                    'glyphicon-chevron-down':!up,
                    'glyphicon-chevron-up':up
                }">
                </span>
            </div>
            <div class="panel-body">
                <ng-content *ngIf="up"></ng-content>
            </div>
        <div>
    `,
    styles:[`
        .myStyle:hover{
            cursor:pointer;
            color:#F5F5F5;
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