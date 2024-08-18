import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss',
})
export class DashboardComponent {
  cards = [
    {
      name: 'Card 1',
      description: 'This is card 1',
      color: '#24cd24',
      data: 'card1',
      table: [
        { name: 'a', age: 20, city: 'Mumbai' },
        { name: 'b', age: 21, city: 'Delhi' },
        { name: 'c', age: 30, city: 'Mumbai' },
        { name: 'abc', age: 80, city: 'Chennai' },
        { name: 'xyz', age: 12, city: 'Jammu' },
      ],
    },
    {
      name: 'Card 2',
      description: 'This is card 2',
      color: '#cd24ae',
      data: 'card2',
      table: [
        { name: 'a1', age: 20, city: 'Mumbai', status: 'active' },
        { name: 'b1', age: 21, city: 'Delhi', status: 'active' },
        { name: 'c1', age: 30, city: 'Mumbai', status: 'inactive' },
        { name: 'pqr', age: 80, city: 'Chennai', status: 'active' },
        { name: 'xyz', age: 12, city: 'Jammu', status: 'active' },
      ],
    },
    {
      name: 'Card 3',
      description: 'This is card 3',
      color: '#39ad91',
      data: 'card3',
      table: [
        { name: 'peter', age: 12, city: 'USA' },
        { name: 'John', age: 21, city: 'Canada' },
        { name: 'Joseph', age: 30, city: 'India' },
      ],
    },
    {
      name: 'Card 4',
      description: 'This is card 4',
      color: '#bbb61c',
      data: 'card4',
      table: [
        { name: 'a', age: 20, city: 'Mumbai' },
        { name: 'b', age: 21, city: 'Delhi' },
        { name: 'c', age: 30, city: 'Mumbai' },
        { name: 'abc', age: 80, city: 'Chennai' },
        { name: 'xyz', age: 12, city: 'Jammu' },
      ],
    },
    {
      name: 'Card 5',
      description: 'This is card 5',
      color: '#5397ec',
      data: 'card5',
      table: [
        { name: 'a', age: 20, city: 'Mumbai' },
        { name: 'b', age: 21, city: 'Delhi' },
        { name: 'c', age: 30, city: 'Mumbai' },
        { name: 'abc', age: 80, city: 'Chennai' },
        { name: 'xyz', age: 12, city: 'Jammu' },
      ],
    },
  ];

  currentCard: any = null;

  clickCard(card: string) {
    this.currentCard = this.cards.find((c: any) => c.data === card);
    console.log(this.currentCard);
  }
}
