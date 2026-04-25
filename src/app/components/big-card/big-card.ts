import { Component, Input, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-big-card',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './big-card.html',
  styleUrls: ['./big-card.css'],
})
export class BigCard implements OnInit {

  @Input()
  photoCover:string =""
  @Input()
  cardTitle:string= ""
  @Input()
  cardDescription:string =""
  @Input()
  Id:string="0"
  @Input()
  author:string = ""
  @Input()
  publishedAt:string = ""
  @Input()
  readTime:string = ""

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
