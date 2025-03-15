import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { QuizService } from '../quiz.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-settings',
  imports: [FormsModule],
  templateUrl: './settings.component.html',
  styleUrl: './settings.component.css'
})
export class SettingsComponent {
  continent: string = "";

  constructor(private quizService: QuizService, private router: Router){}

  goToQuiz(): void {
    if (this.continent != ""){
      this.quizService.setSettings({
        continent: this.continent
      });
    }

    this.router.navigate(['/quiz']);
  }
}
