import { Component, OnInit, HostListener } from '@angular/core';
import { Router, NavigationEnd, Event } from '@angular/router';
import {
  trigger,
  state,
  style,
  transition,
  animate
} from '@angular/animations';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  animations: [
    trigger('dropdownAnimation', [
      state('open', style({ opacity: 1, transform: 'translateY(0)', visibility: 'visible' })),
      state('closed', style({ opacity: 0, transform: 'translateY(-10px)', visibility: 'hidden' })),
      transition('closed <=> open', animate('300ms ease-in-out'))
    ])
  ]
})
export class HeaderComponent implements OnInit {
  currentPage: string = '';
  showNotifications: boolean = false;

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.router.events
      .pipe(filter((event: Event): event is NavigationEnd => event instanceof NavigationEnd))
      .subscribe((event: NavigationEnd) => {
        const segments = event.urlAfterRedirects.split('/').filter(Boolean);
        this.currentPage = this.getPageName(segments[0] || 'dashboard');
      });
  }

  getPageName(path: string): string {
    const mapping: { [key: string]: string } = {
      'dashboard': 'Dashboard',
      'doctors': 'Doctors',
      'patients': 'Patients',
      'consultations': 'Consultations',
      'rooms': 'Rooms',
      'nurses': 'Nurses',
      'receptionists': 'Receptionists',
      'appointments': 'Appointments',
    };
    return mapping[path] || 'Dashboard';
  }

  toggleNotifications(): void {
    this.showNotifications = !this.showNotifications;
  }

  @HostListener('document:click', ['$event'])
onClickOutside(event: MouseEvent): void {
  const target = event.target as HTMLElement;
  if (
    !target.closest('.icon-button') &&
    !target.closest('.notifications-dropdown')
  ) {
    this.showNotifications = false;
  }
}

  handleNotificationClick(notificationType: string): void {
    switch (notificationType) {
      case 'new-patient':
        this.router.navigate(['/patients/new']);
        break;
      case 'urgent-case':
        this.router.navigate(['/cases/urgent']);
        break;
      case 'appointment-reminder':
        this.router.navigate(['/appointments/reminders']);
        break;
      default:
        console.log('Unknown notification type');
    }
    this.showNotifications = false;
  }
}
