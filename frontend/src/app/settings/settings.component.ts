import { Component } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { QuizService } from '../quiz.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-settings',
  imports: [FormsModule, ReactiveFormsModule],
  templateUrl: './settings.component.html',
  styleUrl: './settings.component.css'
})

export class SettingsComponent {
  readonly CONTINENT_DEFAULT = 'All Continents';
  readonly NUM_QUESTIONS_DEFAULT = '10';

  settingsForm = new FormGroup({
    continent: new FormControl(this.CONTINENT_DEFAULT),
    numQuestions: new FormControl(this.NUM_QUESTIONS_DEFAULT)
  })

  constructor(private quizService: QuizService, private router: Router){ }

  submitSettings(): void {
    if (this.settingsForm.value.continent == this.CONTINENT_DEFAULT) { 
      this.settingsForm.value.continent = ''; 
    }
    if (this.settingsForm.value.numQuestions == 'All') {
      this.settingsForm.value.numQuestions = '';
    }

    this.quizService.setSettings({
      continent: this.settingsForm.value.continent ?? '', 
      numQuestions: this.settingsForm.value.numQuestions ?? ''
    });

    this.router.navigate(['/quiz']);
  }
}
