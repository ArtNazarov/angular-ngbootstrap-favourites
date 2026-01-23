// services/links.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { ILink, IMenuItem, LinkCategory } from '../models/links';

@Injectable({
  providedIn: 'root'
})
export class LinksService {
  private baseUrl = 'assets/data/';

  constructor(private http: HttpClient) {
    console.log('LinksService constructor - HttpClient available:', !!http);
  }

  public getLinks(category: LinkCategory): Observable<ILink[]> {
    const fileMap: Record<LinkCategory, string> = {
      'pinned': 'pinned.json',
      'search_engines': 'search-engines.json',
      'ai': 'ai.json',
      'freelance': 'freelance.json'
    };

    const fileName = fileMap[category];
    const url = `${this.baseUrl}${fileName}`;
    
    console.log(`LinksService: Fetching ${url}`);
    
    return this.http.get<ILink[]>(url).pipe(
      tap(data => {
        console.log(`LinksService: Successfully loaded ${category}`, data);
      }),
      catchError(error => {
        console.error(`LinksService: Error loading ${category} from ${url}:`, error);
        // Return fallback data
        return of(this.getFallbackData(category));
      })
    );
  }

  public getMenuItems(): Observable<IMenuItem[]> {
    const url = `${this.baseUrl}menu.json`;
    console.log(`LinksService: Fetching menu from ${url}`);
    
    return this.http.get<IMenuItem[]>(url).pipe(
      tap(data => console.log('LinksService: Menu loaded', data)),
      catchError(error => {
        console.error('LinksService: Error loading menu:', error);
        return of(this.getFallbackMenu());
      })
    );
  }

  private getFallbackData(category: LinkCategory): ILink[] {
    console.log(`LinksService: Using fallback data for ${category}`);
    
    const fallbackData: Record<LinkCategory, ILink[]> = {
      'pinned': [
        { caption: 'LOR', content: 'Новости Linux', link: 'https://linux.org.ru' },
        { caption: 'Pikabu', content: 'Юмор', link: 'https://pikabu.ru' },
        { caption: 'Lenta', content: 'Новости', link: 'https://lenta.ru' },
        { caption: 'Приставки', content: 'Старые игры', link: 'https://pristavka.kulichki.net' }
      ],
      'search_engines': [
        { caption: 'Google', content: 'Гугл', link: 'https://google.com' },
        { caption: 'Yandex', content: 'Яндекс', link: 'https://ya.ru' }
      ],
      'ai': [
        { caption: 'DeepSeek', content: 'Чат с DeepSeek', link: 'https://chat.deepseek.com' },
        { caption: 'Perplexity', content: 'Перплексити', link: 'https://perplexity.com' },
        { caption: 'Scira', content: 'Скира', link: 'https://scira.ai/' }
      ],
      'freelance': [
        { caption: 'Freelance.Ru', content: 'Фриланс.Ру', link: 'https://freelance.ru/artnazarov' },
        { caption: 'Kadrof.Ru', content: 'Кадроф.Ру', link: 'https://www.kadrof.ru/userprofile/view/150985' }
      ]
    };
    
    return fallbackData[category] || [];
  }

  private getFallbackMenu(): IMenuItem[] {
    return [
      { title: 'Избранное', path: '/pinned' },
      { title: 'Поисковики', path: '/search_engines' },
      { title: 'ИИ', path: '/ai' },
      { title: 'Фриланс', path: '/freelance' }
    ];
  }
}