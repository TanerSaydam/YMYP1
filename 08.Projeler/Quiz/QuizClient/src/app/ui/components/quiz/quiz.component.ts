import { Component, signal } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { SignalrService } from '../../../common/services/signalr.service';

@Component({
  selector: 'app-quiz',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './quiz.component.html',
  styleUrl: './quiz.component.css'
})
export default class QuizComponent {
  roomNumber = signal<number>(0);
  email = signal<string>("");

  constructor(
    private activated: ActivatedRoute,
    private signalr: SignalrService
  ){
    this.activated.params.subscribe(res=> {
      this.roomNumber.set(res["roomNumber"]);
      this.email.set(res["email"]);
      this.signalr.startConnection().then(()=> {
        this.signalr.hubConnection!.invoke("JoinQuizRoomByParticipant",this.roomNumber().toString(), this.email());
      });
    })
  }
}
