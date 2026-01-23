// links.ts

// Interface definitions
export interface ILink {
    caption: string;
    content: string;
    link: string;
}

export interface IMenuItem {
    title: string;
    path: string;
}

// Type definitions
export type LinkCategory = 'pinned' | 'search_engines' | 'ai' | 'freelance';

// Base classes
export class Link implements ILink {
    caption: string = '';
    content: string = '';
    link: string = '';

    constructor(link?: Partial<ILink>) {
        if (link) {
            Object.assign(this, link);
        }
    }
}

export class MenuItem implements IMenuItem {
    title: string = '';
    path: string = '';

    constructor(menuItem?: Partial<IMenuItem>) {
        if (menuItem) {
            Object.assign(this, menuItem);
        }
    }
}

// Static Models (kept for backward compatibility)
export class LinksModel {
    public static getSearchEngines(): ILink[] {
        return [
            {
                caption: 'Google',
                content: 'Гугл',
                link: 'https://google.com'
            },
            {
                caption: 'Yandex',
                content: 'Яндекс',
                link: 'https://ya.ru'
            }
        ];
    }

    public static getAI(): ILink[] {
        return [
            {
                caption: 'DeepSeek',
                content: 'Чат с DeepSeek',
                link: 'https://chat.deepseek.com'
            },
            {
                caption: 'Perplexity',
                content: 'Перплексити',
                link: 'https://perplexity.com'
            },
            {
                caption: 'Scira',
                content: 'Скира',
                link: 'https://scira.ai/'
            },
            {
                caption: 'Z AI',
                content: 'Z',
                link: 'https://chat.z.ai/'
            },
            {
                caption: 'Minimax AI',
                content: 'minimax',
                link: 'https://chat.minimax.io/'
            },
            {
                caption: 'Qwen AI',
                content: 'qwen',
                link: 'https://chat.qwen.ai/'
            },
            {
                caption: 'Ernie AI',
                content: 'baidu`s ernie',
                link: 'https://ernie.baidu.com/'
            }
        ];
    }

    public static getFreelance(): ILink[] {
        return [
            {
                caption: 'Freelance.Ru',
                content: 'Фриланс.Ру',
                link: 'https://freelance.ru/artnazarov'
            },
            {
                caption: 'Kadrof.Ru',
                content: 'Кадроф.Ру',
                link: 'https://www.kadrof.ru/userprofile/view/150985'
            },
            {
                caption: 'FreelanceSpace.Ru',
                content: 'ФрилансСпейс.Ру',
                link: 'https://freelancespace.ru/profile/artnazarov'
            },
            {
                caption: 'Freelance.Su',
                content: 'Фриланс.Su',
                link: 'https://freelance.su/freelancers/artnazarov'
            },
            {
                caption: 'Kwork.Ru',
                content: 'Кворк.Ру',
                link: 'https://kwork.ru/user/artnazarov'
            },
            {
                caption: 'FreelanceJob.Ru',
                content: 'ФрилансJob.Ру',
                link: 'https://www.freelancejob.ru/users/artnazarov/'
            }
        ];
    }

    public static getPinnedToStartPage(): ILink[] {
        return [
            {
                caption: 'LOR',
                content: 'Новости Linux',
                link: 'https://linux.org.ru'
            },
            {
                caption: 'Pikabu',
                content: 'Юмор',
                link: 'https://pikabu.ru'
            },
            {
                caption: 'Lenta',
                content: 'Новости',
                link: 'https://lenta.ru'
            },
            {
                caption: 'Приставки',
                content: 'Старые игры',
                link: 'https://pristavka.kulichki.net'
            }
        ];
    }

    public static getDataByCategory(category: LinkCategory): ILink[] {
        switch (category) {
            case 'pinned':
                return this.getPinnedToStartPage();
            case 'search_engines':
                return this.getSearchEngines();
            case 'ai':
                return this.getAI();
            case 'freelance':
                return this.getFreelance();
            default:
                return this.getPinnedToStartPage();
        }
    }
}

export class MenuModel {
    public static getMenuItems(): IMenuItem[] {
        return [
            { title: 'Избранное', path: '/pinned' },
            { title: 'Поисковики', path: '/search_engines' },
            { title: 'ИИ', path: '/ai' },
            { title: 'Фриланс', path: '/freelance' }
        ];
    }
}

// Response interfaces
export interface LinksResponse {
    success: boolean;
    data: ILink[];
    error?: string;
    timestamp?: Date;
}

export interface MenuResponse {
    success: boolean;
    data: IMenuItem[];
    error?: string;
    timestamp?: Date;
}

// Configuration
export interface LinksConfig {
    category: LinkCategory;
    title: string;
    path: string;
    icon?: string;
    description?: string;
}

export const APP_LINKS_CONFIG: LinksConfig[] = [
    {
        category: 'pinned',
        title: 'Избранное',
        path: '/pinned',
        icon: 'star',
        description: 'Закрепленные ссылки'
    },
    {
        category: 'search_engines',
        title: 'Поисковики',
        path: '/search_engines',
        icon: 'search',
        description: 'Поисковые системы'
    },
    {
        category: 'ai',
        title: 'ИИ',
        path: '/ai',
        icon: 'ai',
        description: 'Искусственный интеллект'
    },
    {
        category: 'freelance',
        title: 'Фриланс',
        path: '/freelance',
        icon: 'work',
        description: 'Фриланс платформы'
    }
];