class Link {
    caption: string = '';
    content: string = '';
    link: string = '';
}


class LinksModel {

public static getSearchEngines(): Link[]  {
    const Google: Link = {
        caption : 'Google',
        content: 'Гугл',
        link: 'https://google.com'
    }
    const Yandex: Link = {
        caption: 'Yandex',
        content: 'Яндекс',
        link: 'https://ya.ru'
    }
    return [Google, Yandex];
}
public static getAI(): Link[]  {
    const DeepSeek: Link = {
        caption : 'DeepSeek',
        content: 'Чат с DeepSeek',
        link: 'https://chat.deepseek.com'
    }
    const Perplexity: Link = {
        caption: 'Perplexity',
        content: 'Перплексити',
        link: 'https://perplexity.com'
    }
    const Scira: Link = {
      caption: 'Scira',
      content: 'Скира',
      link: 'https://scira.ai/'
    }
    return [DeepSeek, Perplexity, Scira];
}

public static getFreelance(){
    const links: Link[] = [
        {   
            caption: 'Freelance.Ru',
            content: 'Фриланс.Ру',
            link:'https://freelance.ru/artnazarov'
        },
        {   
            caption: 'Kadrof.Ru',
            content: 'Кадроф.Ру',
            link:'https://www.kadrof.ru/userprofile/view/150985'
        },
        {   
            caption: 'FreelanceSpace.Ru',
            content: 'ФрилансСпейс.Ру',
            link:'https://freelancespace.ru/profile/artnazarov'
        },
        {   
            caption: 'Freelance.Su',
            content: 'Фриланс.Su',
            link:'https://freelance.su/freelancers/artnazarov'
        },
        {   
            caption: 'Kwork.Ru',
            content: 'Кворк.Ру',
            link:'https://kwork.ru/user/artnazarov'
        },
        {   
            caption: 'FreelanceJob.Ru',
            content: 'ФрилансJob.Ру',
            link:'https://www.freelancejob.ru/users/artnazarov/'
        },
        
    ];
    return links;
}

public static getPinnedToStartPage(){
    const LOR: Link = {
        caption: 'LOR',
        content: 'Новости Linux',
        link: 'https://linux.org.ru'
    };
    const Pikabu: Link = {
        caption: 'Pikabu',
        content: 'Юмор',
        link: 'https://pikabu.ru'
    };
    const Lenta: Link = {
        caption: 'Lenta',
        content: 'Новости',
        link: 'https://lenta.ru'
    };
    const Pristavka: Link = {
        caption: 'Приставки',
        content: 'Старые игры',
        link: 'https://pristavka.kulichki.net'
    };
    return [LOR, Pikabu, Lenta, Pristavka];
}
}

class MenuItem {
    title: string = '';
    path: string = '';
}

class MenuModel {
    public static getMenuItems(): MenuItem[] {
        return [
            { title: 'Избранное', path: '/pinned' },
            { title: 'Поисковики', path: '/search_engines' },
            { title: 'ИИ', path: '/ai' },
            { title: 'Фриланс', path: '/freelance'}
        ];
    }
}

export { Link, LinksModel, MenuItem, MenuModel }
