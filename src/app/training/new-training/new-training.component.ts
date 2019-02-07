import {Component, OnInit, EventEmitter, Output} from '@angular/core';
import {TrainingService} from '../../services/training.service';
import {Exercise} from '../../models/exercise.model';

@Component({
  selector: 'app-new-training',
  templateUrl: './new-training.component.html',
  styleUrls: ['./new-training.component.scss']
})
export class NewTrainingComponent implements OnInit {
  @Output() trainingStart = new EventEmitter<void>();
  exercises: Exercise[] = [];

  constructor(private trainingService: TrainingService) {
  }

  ngOnInit() {
    this.exercises = this.trainingService.getAvailableExercises();
  }

  onStartTraining() {
    this.trainingStart.emit();
  }

}
