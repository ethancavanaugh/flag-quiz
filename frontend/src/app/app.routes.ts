import { Routes } from '@angular/router';
import { QuizComponent } from './quiz/quiz.component';
import { ResultComponent } from './result/result.component';
import { SettingsComponent } from './settings/settings.component';

export const routes: Routes = [
  { 
    path: '',
    component: SettingsComponent
  },
  { 
    path: 'quiz',
    component: QuizComponent
  },
  {
    path: 'result',
    component: ResultComponent
  }

];
