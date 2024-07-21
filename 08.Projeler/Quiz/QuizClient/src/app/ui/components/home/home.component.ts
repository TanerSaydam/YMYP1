import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ParticipantModel } from '../../models/participant.model';
import { HttpService } from '../../../common/services/http.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export default class HomeComponent {
  model = signal<ParticipantModel>(new ParticipantModel());

  constructor(
    private http: HttpService,
    private router: Router
  ){}

  join(){
    this.model().roomNumber = +this.model().roomNumber;
    this.http.post("QuizParticipants/Join", this.model(),(res)=> {
      this.router.navigateByUrl(`/quiz/${this.model().roomNumber}/${this.model().email}/${this.model().userName}`);
    })
  }
}
