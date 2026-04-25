import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { dataFake } from '../../mock/data-fake';

@Component({
  selector: 'app-content',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './content.html',
  styleUrls: ['./content.css'],
})
export class Content implements OnInit {
  photoCover:string = ""
  contentTitle:string = ""
  contentDescription:string = ""
  contentAuthor:string = ""
  publishedAt:string = ""
  readTime:string = ""
  private id:string | null = "0"

  constructor(
    private route:ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe( value =>
     this.id = value.get("id")
    )

    this.setValuesToComponent(this.id)
  }

  setValuesToComponent(id:string | null){
    const result = dataFake.filter((article: any) => article.id == id)[0]

    if(!result) return

    this.contentTitle = result.title
    this.contentDescription = result.description
    this.photoCover = result.photoCover
    this.contentAuthor = result.author
    this.publishedAt = result.publishedAt
    this.readTime = result.readTime
  }

  get formattedDate(): string {
    if (!this.publishedAt) return '';
    return new Intl.DateTimeFormat('pt-BR', {
      day: '2-digit',
      month: 'long',
      year: 'numeric',
    }).format(new Date(this.publishedAt));
  }

}
