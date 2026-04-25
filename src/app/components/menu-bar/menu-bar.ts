import { Component, OnDestroy, OnInit } from '@angular/core';
import { ViewportScroller } from '@angular/common';
import { NavigationEnd, Router, RouterLink } from '@angular/router';
import { Subscription, filter } from 'rxjs';

@Component({
  selector: 'app-menu-bar',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './menu-bar.html',
  styleUrls: ['./menu-bar.css'],
})
export class MenuBar implements OnInit, OnDestroy {
  isMobileMenuOpen = false;
  activeSection: 'home' | 'latest' | 'series' | 'movies' = 'home';
  private routerEventsSub?: Subscription;

  constructor(
    private router: Router,
    private viewportScroller: ViewportScroller,
  ) {}

  ngOnInit(): void {
    this.syncActiveSection();

    this.routerEventsSub = this.router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe(() => this.syncActiveSection());
  }

  ngOnDestroy(): void {
    this.routerEventsSub?.unsubscribe();
  }

  toggleMobileMenu(): void {
    this.isMobileMenuOpen = !this.isMobileMenuOpen;
  }

  setActiveSection(section: 'home' | 'latest' | 'series' | 'movies'): void {
    this.activeSection = section;
    this.closeMobileMenu();
  }

  closeMobileMenu(): void {
    this.isMobileMenuOpen = false;
  }

  goHomeTop(event: Event): void {
    event.preventDefault();
    this.setActiveSection('home');

    const currentPath = this.router.url.split('#')[0];

    if (currentPath !== '/') {
      this.router.navigate(['/'], { fragment: 'top' }).then(() => {
        setTimeout(() => this.viewportScroller.scrollToPosition([0, 0]), 0);
      });
      return;
    }

    this.viewportScroller.scrollToPosition([0, 0]);
  }

  private syncActiveSection(): void {
    const fragment = this.router.parseUrl(this.router.url).fragment;
    const validSections = new Set(['home', 'latest', 'series', 'movies']);

    if (!fragment || !validSections.has(fragment)) {
      this.activeSection = 'home';
      return;
    }

    this.activeSection = fragment as 'latest' | 'series' | 'movies';
  }
}
