import { Component } from '@angular/core'
import { Course } from '../interfaces/course'

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent {
  course: Course = {
    id: 1,
    title: 'First Course',
    creationDate: new Date(),
    duration: 100,
    description: 'First Test Course'
  }
}
