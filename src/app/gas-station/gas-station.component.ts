import { Component, OnInit } from '@angular/core';
import { PrimeIcons } from 'primeng/api';

@Component({
  selector: 'app-gas-station',
  templateUrl: './gas-station.component.html',
  styleUrls: ['./gas-station.component.scss']
})
export class GasStationComponent implements OnInit {
  events1: any[] = [];
  current: any = {
    name: 'car',
    id: 1
  };
  active = 1;
  total = 0;
  time = 60;
  cars = [
    {
      name: 'car',
      id: 2
    },
    {
      name: 'car',
      id: 3
    },
    {
      name: 'car',
      id: 4
    },
    {
      name: 'car',
      id: 5
    }
  ];

  constructor() {}

  serveNext() {
    this.active += 1;
    if (this.cars.length == 0 && !this.current) {
      this.active = 0;
      this.time = 0;
      this.current = undefined;
    } else {
      this.current = this.cars[0];
      this.time = 60;
      this.total += 1;
      this.cars.shift();
    }
  }

  setTime() {
    setTimeout(() => {
      if (this.time < 1) {
        this.serveNext();
      } else {
        if (this.cars?.length == 0 && !this.current) {
          this.active = 0;
          this.time = 0;
        } else {
          this.time -= 1;
        }
      }
      this.setTime();
    }, 1000);
  }

  addCar() {
    if (this.cars?.length == 0 && !this.current) {
      const get_id = this.cars?.length;
      this.current = { name: 'car', id: get_id + 1 };
      // this.cars.push({ name: 'car', id: get_id + 1 });
      this.active += 1;
      this.time = 60;
    } else {
      const get_id = this.cars?.length - 1;
      this.cars.push({ name: 'car', id: this.cars[get_id]?.id + 1 || 2 });
    }
  }

  ngOnInit(): void {
    this.setTime();
    this.events1 = [
      {
        status: 'Ordered',
        date: '15/10/2020 10:30',
        icon: PrimeIcons.SHOPPING_CART,
        color: '#9C27B0',
        image: 'game-controller.jpg'
      },
      {
        status: 'Processing',
        date: '15/10/2020 14:00',
        icon: PrimeIcons.COG,
        color: '#673AB7'
      },
      {
        status: 'Shipped',
        date: '15/10/2020 16:15',
        icon: PrimeIcons.ENVELOPE,
        color: '#FF9800'
      },
      {
        status: 'Delivered',
        date: '16/10/2020 10:00',
        icon: PrimeIcons.CHECK,
        color: '#607D8B'
      }
    ];
  }
}
