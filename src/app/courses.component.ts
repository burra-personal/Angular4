import {Component} from '@angular/core';
@Component({
    selector: 'courses',
    template: `
    {{text | summary}}
    `
})
export class CoursesComponent {
 text = `
 Anil Kumar Burra is java developer also works on different front end frameworks.
 `;
}