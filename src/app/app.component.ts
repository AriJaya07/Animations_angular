import { Component, HostBinding } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition,
} from '@angular/animations';
import { ChildrenOutletContexts, RouterOutlet } from '@angular/router'

import { slideInAnimation } from './animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
    // animation triggers go here
    slideInAnimation
  ]
})
export class AppComponent {
  @HostBinding('@.disabled')
  public animationsDisabled = false;

  constructor(private contexts: ChildrenOutletContexts) { }

  getRouteAnimationData() {
    return this.contexts.getContext('primary')?.route?.snapshot?.data?.['animation'];
  }

  toggleAnimations() {
    this.animationsDisabled = !this.animationsDisabled;
  }
}
