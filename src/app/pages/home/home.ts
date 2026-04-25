import { Component } from '@angular/core';
import { MenuTitle } from '../../components/menu-title/menu-title';
import { BigCard } from '../../components/big-card/big-card';
import { SmallCard } from '../../components/small-card/small-card';
import { BlogPostMock, dataFake } from '../../mock/data-fake';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [MenuTitle, BigCard, SmallCard],
  templateUrl: './home.html',
  styleUrls: ['./home.css'],
})
export class Home {
  posts: BlogPostMock[] = dataFake;
  featuredPost: BlogPostMock | undefined = this.posts[0];
  secondaryPosts: BlogPostMock[] = this.posts.slice(1);

  getSectionAnchor(post: BlogPostMock, index: number): string | null {
    if (post.category === 'Series' && !this.hasCategoryBefore(index, 'Series')) {
      return 'series';
    }

    if (post.category === 'Filmes' && !this.hasCategoryBefore(index, 'Filmes')) {
      return 'movies';
    }

    return null;
  }

  private hasCategoryBefore(index: number, category: 'Filmes' | 'Series'): boolean {
    return this.secondaryPosts.slice(0, index).some((current) => current.category === category);
  }
}
