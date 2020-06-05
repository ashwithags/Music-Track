import { Component, OnInit, Input } from '@angular/core';
import { track } from '../track';
import { GetTrackService } from '../get-track.service';
import { element } from 'protractor';

@Component({
  selector: 'app-main-track-page',
  templateUrl: './main-track-page.component.html',
  styleUrls: ['./main-track-page.component.css']
})
export class MainTrackPageComponent implements OnInit {
  urlParams: any;
  myParam: any;
  res: string;
  trackList: track[];
  currentTrack: track;
  com: any = {};

  constructor(private getdata: GetTrackService) { }

  ngOnInit() {
    this.getdata.getTrack().subscribe(
      data => {
        this.trackList = data;
        this.urlParams = window.location.pathname;
        this.res = this.urlParams.substr(14);
        console.log(this.res);
        let h = this.res;
        let a = +h;
        console.log(this.currentTrack);
        this.trackList.forEach(element => {
          if (element.trackId == a) {
            this.currentTrack = element;
          }
        });
        this.currentTrack.comments.forEach(element => {
          if (element.like == undefined) {
            element.like = 0;
            element.ShowLikeIcon = false;
          }
          else{
            element.ShowLikeIcon = true;
          }
          element.showReply=false;
        });
      }
    );

  }

  like(track: track): void {
    this.trackList.forEach(element => {
      if (element.trackId == track.trackId) {
        element.rating += 1;
      }
    });
  }

  AddComment(newCom: string): void {
    this.com = {};
    this.com.id = Math.floor((Math.random() * 100) + 1);;
    this.com.comment = newCom;
    this.com.like = 0;
    this.currentTrack.comments.unshift(this.com);
  }

  likeComment(tc): void {
    this.currentTrack.comments.forEach(element => {
      if (element.id == tc.id) {
        element.like += 1;
        element.ShowLikeIcon = true;
      }
    })
  }

  replyonComment(tc): void {
    this.currentTrack.comments.forEach(element => {
      if (element.id == tc.id) {
        element.showReply = true;
      }
    })
  }

  ReplyComment(tc): void {
    this.currentTrack.comments.forEach(element => {
      if (element.id == tc.id) {
        element.like += 1;
      }
    })
  }
  
  CancelComment(tc): void {
    this.currentTrack.comments.forEach(element => {
      if (element.id == tc.id) {
        element.showReply = false;
      }
    })
  }

}
