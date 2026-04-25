import { Component, Input, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-small-card',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './small-card.html',
  styleUrls: ['./small-card.css'],
})
export class SmallCard implements OnInit {

  @Input()
  photoCover:string = ""

  @Input()
  cardTitle:string = ""
  @Input()
  author:string = ""
  @Input()
  publishedAt:string = ""
  @Input()
  readTime:string = ""

  @Input()
  Id:string="0"

  constructor() { }

  ngOnInit(): void {
  }

  get formattedDate(): string {
    if (!this.publishedAt) return '';
    return new Intl.DateTimeFormat('pt-BR', {
      day: '2-digit',
      month: 'short',
      year: 'numeric',
    }).format(new Date(this.publishedAt));
  }
}
