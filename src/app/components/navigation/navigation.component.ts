import { Component, Input } from '@angular/core';
import { IconProp } from '@fortawesome/fontawesome-svg-core';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss'],
})
export class NavigationComponent {
  @Input() title!: string;
  @Input() labelNavigateBack!: string;
  @Input() iconTitle!: IconProp;
  @Input() iconNavigateBack!: IconProp;
}
