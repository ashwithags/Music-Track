import { Component, OnInit } from '@angular/core';
import { GetTrackService } from '../get-track.service';
import { track } from '../track';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ModalComponent } from '../modal/modal.component';
import { Router } from '@angular/router'
import { from } from 'rxjs';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {
  trackList: track[];
  currentTrack:track;
  value:boolean = false;
  log:any = {};

  constructor(private getdata: GetTrackService, 
    private modalService: NgbModal, 
    private router:Router,
    private LoginDetails:LoginService ) { }

  ngOnInit() {
    this.getdata.getTrack().subscribe(
      data => this.trackList = data
    )
  }

  like(track: track): void {
    this.trackList.forEach(element => {
      if (element.trackId == track.trackId) {
        element.rating += 1;
      }
    });
  }

  commentOpenModal(track: track): void {
    const modalRef = this.modalService.open(ModalComponent);
    modalRef.componentInstance.track = track;
  }

  TrackPage(track:track):void{
    this.currentTrack = track;
    console.log("Home track: ", this.currentTrack)
    this.value = true;
    this.router.navigate(['/single-track']);
  }

  getData(){
    this.log = this.LoginDetails.getLoginData();
  }
}
