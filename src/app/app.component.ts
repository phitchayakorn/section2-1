import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'section2-1';
  num = '';
  select = 'isPrime';
  bool = false;
  valuechange() {
    let num = parseInt(this.num) > 0 ? parseInt(this.num) : 1;

    if (this.select === 'isPrime') {
      if (num === 1) {
        this.bool = false;
      } else {
        this.bool = true;
        for (let i = 2; i < num; i++) {
          if (num % i == 0) {
            this.bool = false;
            break;
          }
        }
      }
    } else {
      if (num === 0 || num === 1) {
        this.bool = true;
      } else {
        let num1 = 0,
          num2 = 1,
          num3 = num1 + num2;

        while (num3 <= num) {
          if (num3 === num) {
            this.bool = true;
            break;
          }
          num1 = num2;
          num2 = num3;
          num3 = num1 + num2;
          this.bool = false;
        }
      }
    }
  }
}
