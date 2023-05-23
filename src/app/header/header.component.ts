import { Component } from '@angular/core'
import { User } from '../interfaces/user'

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  user: User = {
    id: 1,
    firstName: 'Shashank',
    lastName: 'Chikattimala'
  }
}
