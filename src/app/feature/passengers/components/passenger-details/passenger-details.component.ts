import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PassengerService } from '../../services/passenger.service';
import { PassengerData } from '../../../../shared/models/titanic-data.model';

@Component({
  selector: 'app-passenger-details',
  templateUrl: './passenger-details.component.html',
  styleUrl: './passenger-details.component.scss',
  standalone: false,
})
export class PassengerDetailsComponent implements OnInit {
  public passenger: PassengerData | undefined;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private passengerService: PassengerService,
  ) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id')!);
    this.passenger = this.passengerService.getPassenger(id);
  }

  goBack(): void {
    this.router.navigate(['/']);
  }
}
