import { Component, computed, OnDestroy, signal } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpService } from '../../../common/services/http.service';
import { ParticipantModel } from '../../../ui/models/participant.model';
import { SignalrService } from '../../../common/services/signalr.service';

@Component({
  selector: 'app-room',
  standalone: true,
  imports: [],
  templateUrl: './room.component.html',
  styleUrl: './room.component.css'
})
export class RoomComponent implements OnDestroy {
  roomNumber = signal<number>(0);
  participants = signal<ParticipantModel[]>([]);
  count = computed(()=> this.participants().length);

  constructor(
    private activated: ActivatedRoute,
    private http: HttpService,
    private signalr: SignalrService
  ){     
    this.activated.params.subscribe(res=> {
      this.roomNumber.set(res["roomNumber"]);  
      this.signalr.startConnection().then(()=> {
        this.signalr.hubConnection!.invoke("JoinQuizRoomAsync",this.roomNumber().toString());


        this.signalr.hubConnection!.on("JoinQuizRoom",(res)=> {          
          this.participants.update(prev => [...prev, res]);
        });

        this.signalr.hubConnection!.on("LeaveQuizRoom",(res)=> {
          const index = this.participants().findIndex(p=> p.email === res);
          if(index >= 0){
            this.participants.set(this.participants().filter(p=> p.email !== res));
          } 
        });
      });
      this.getParticipants();
    });
  }

  ngOnDestroy(): void {
    this.signalr.hubConnection!.invoke("leaveQuizRoomAsync",this.roomNumber().toString());
  }

  getParticipants(){
    this.http.get<ParticipantModel[]>(`Quizzes/GetParticipantsByRoomNumber?roomNumber=${this.roomNumber()}`,(res)=> {
      this.participants.set(res);
    });
  }

}
