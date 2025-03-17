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
  settingsForm = new FormGroup({
    continent: new FormControl('')
  })

  constructor(private quizService: QuizService, private router: Router){

  }

  submitSettings(): void {

    this.quizService.setSettings({
      continent: this.settingsForm.value.continent ?? ''
    })

    this.router.navigate(['/quiz']);
  }
}
