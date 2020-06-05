
import { Component, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { track } from '../track';

@Component({
  selector: 'ngbd-modal-basic',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})

export class ModalComponent {
  public com:any = {};
  @Input() track:track;

  constructor(private activeModal: NgbActiveModal) {}
  
  AddComment(newCom:string):void{
    console.log(newCom);
    this.com.id = Math.floor((Math.random() * 100) + 1);;
    this.com.comment = newCom;
    this.track.comments.unshift(this.com);
   // this.com.comment = "";
  }
}
