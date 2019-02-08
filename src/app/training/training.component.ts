import {Component, OnInit} from '@angular/core';
import {Subscription} from 'rxjs';
import {TrainingService} from '../services/training.service';

@Component({
  selector: 'app-training',
  templateUrl: './training.component.html',
  styleUrls: ['./training.component.scss']
})
export class TrainingComponent implements OnInit {
  onGoingTraining = false;
  exerciseSubscription: Subscription;

  constructor(private trainingService: TrainingService) {
  }

  ngOnInit() {
    this.exerciseSubscription = this.trainingService.exercisedChanged.subscribe(exercice => {
      if (exercice) {
        this.onGoingTraining = true;
      } else {
        this.onGoingTraining = false;
      }
    });
  }

}
