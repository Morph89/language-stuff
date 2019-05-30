import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  name = 'Angular';

  cards: any[] = [
    { active: false, turned: false },
    { active: false, turned: false },
    { active: false, turned: false },
    { active: false, turned: false },
    { active: false, turned: false },
    { active: false, turned: false },
    { active: false, turned: false },
    { active: false, turned: false },
    { active: false, turned: false },
    { active: false, turned: false },
    { active: false, turned: false },
    { active: false, turned: false }
  ];

  getCardClass(card: any) {
    if(card.turned === true) {
      let val = 'turned';
      return card.active ? val + ' active' : val;
    }
  }

  onCardClick(card: any) {
    console.log('Click on card');
    card.turned = true;
    
    setTimeout(() => {
      card.active = true;
    }, 500);
  }
}
