import {Component, NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {EnfantComponent} from './enfant.component';

@Component({
  selector: 'my-app',
  
  template: `
      <div>
        <app-enfant> 
        
          <div #ref>
            Un élément
          </div>

        </app-enfant>
      </div>
  `
})

export class AppComponent {

  
}

@NgModule({
  imports: [ BrowserModule ],
  declarations: [ AppComponent, EnfantComponent ],
  bootstrap: [ AppComponent ] 
})
export class AppModule {}