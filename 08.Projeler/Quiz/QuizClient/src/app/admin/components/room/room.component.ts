import { Component, signal } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpService } from '../../../common/services/http.service';
import { ParticipantModel } from '../../../ui/models/participant.model';

@Component({
  selector: 'app-room',
  standalone: true,
  imports: [],
  templateUrl: './room.component.html',
  styleUrl: './room.component.css'
})
export class RoomComponent {
  roomNumber = signal<number>(0);
  participants = signal<ParticipantModel[]>([]);

  constructor(
    private activated: ActivatedRoute,
    private http: HttpService
  ){
    this.activated.params.subscribe(res=> {
      this.roomNumber.set(res["roomNumber"]);      
      this.getParticipants();
    });
  }

  getParticipants(){
    this.http.get<ParticipantModel[]>(`Quizzes/GetParticipantsByRoomNumber?roomNumber=${this.roomNumber()}`,(res)=> {
      this.participants.set(res);
    });
  }

}
