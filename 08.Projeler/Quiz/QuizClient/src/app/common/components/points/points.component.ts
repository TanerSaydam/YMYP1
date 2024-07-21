import { Component, input } from '@angular/core';
import { ParticipantModel } from '../../../ui/models/participant.model';

@Component({
  selector: 'app-points',
  standalone: true,
  imports: [],
  templateUrl: './points.component.html',
  styleUrl: './points.component.css'
})
export class PointsComponent {
  participants = input<ParticipantModel[]>([]); 
}
