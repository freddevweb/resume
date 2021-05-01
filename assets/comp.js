var compsParameters = {
    types: ["server", "reverse_proxy", "", "language", "framework", "debuger", "security", "tool", "library", "templating", "database", "uml", "kanban", "editor", "graphisme", "api", "sourceManager", "utility"],
    tags: ["server", "vm", "reverse_proxy", "router", "tool", "language", "backend", "style", "frontend", "TypeScript", "framework", "css", "php", "debuger", "JavaScript", "mobile", "go", "library", "templating", "sql", "database", "request", "http", "xml", "uml", "software", "kanban", "editor", "graphism", "graphisme", "api", "iot", "sourceManager"]
};


var comps = [{
        "type": "server",
        "name": "centos",
        "tags": ["server"],
        "logo": "https://www.centos.org/assets/img/centos-logo-white.png",
        "proportion": "30",
        "link": "https://www.centos.org"
    },
    {
        "type": "server",
        "name": "debian",
        "tags": ["server"],
        "logo": "https://www.debian.org/",
        "proportion": "50",
        "link": "https://www.debian.org/Pics/debian-logo-1024x576.png"
    },
    {
        "type": "server",
        "name": "docker",
        "tags": ["vm"],
        "logo": "https://www.docker.com/sites/default/files/d8/2019-07/vertical-logo-monochromatic.png",
        "proportion": "40",
        "link": ""
    },
    {
        "type": "reverse_proxy",
        "name": "traefik",
        "tags": ["reverse_proxy", "router"],
        "logo": "https://cdn2.hubspot.net/hub/5814022/hubfs/gopher.png?width=108&height=108",
        "proportion": "30",
        "link": ""
    },
    {
        "type": "server",
        "name": "wamp",
        "tags": ["server", "tool"],
        "logo": "https://upload.wikimedia.org/wikipedia/commons/f/f8/WampServer-logo.png",
        "proportion": "80",
        "link": ""
    },
    {
        "type": "server",
        "name": "xampp",
        "tags": ["server", "tool"],
        "logo": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/03/Xampp_logo.svg/langfr-330px-Xampp_logo.svg.png",
        "proportion": "80",
        "link": ""
    },
    {
        "type": "",
        "name": "NodeJs",
        "tags": ["server", "language"],
        "logo": "https://nodejs.org/static/images/logo.svg",
        "proportion": "50",
        "link": ""
    },
    {
        "type": "language",
        "name": "go",
        "tags": ["language", "backend"],
        "logo": "https://upload.wikimedia.org/wikipedia/commons/thumb/2/23/Go_Logo_Aqua.svg/1024px-Go_Logo_Aqua.svg.png",
        "proportion": "20",
        "link": ""
    },
    {
        "type": "language",
        "name": "css",
        "tags": ["language", "style", "frontend"],
        "logo": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/CSS3_logo_and_wordmark.svg/langfr-260px-CSS3_logo_and_wordmark.svg.png",
        "proportion": "95",
        "link": ""
    },
    {
        "type": "language",
        "name": "html",
        "tags": ["language", "frontend"],
        "logo": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/langfr-260px-HTML5_logo_and_wordmark.svg.png",
        "proportion": "95",
        "link": ""
    },
    {
        "type": "language",
        "name": "xml",
        "tags": ["language", "frontend"],
        "logo": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c0/XML_icon.svg/langfr-128px-XML_icon.svg.png",
        "proportion": "60",
        "link": ""
    },
    {
        "type": "language",
        "name": "bash",
        "tags": ["language", "server"],
        "logo": "45",
        "proportion": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/82/Gnu-bash-logo.svg/langfr-580px-Gnu-bash-logo.svg.png",
        "link": ""
    },
    {
        "type": "language",
        "name": "TypeScript",
        "tags": ["language", "frontend", "TypeScript"],
        "logo": "https://upload.wikimedia.org/wikipedia/commons/a/a6/TypeScript_Logo.png",
        "proportion": "75",
        "link": ""
    },
    {
        "type": "language",
        "name": "JavaScript",
        "tags": ["language", "frontend", "backend"],
        "logo": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/262px-Unofficial_JavaScript_logo_2.svg.png",
        "proportion": "80",
        "link": ""
    },
    {
        "type": "language",
        "name": "PHP",
        "tags": ["language", "backend"],
        "logo": "https://upload.wikimedia.org/wikipedia/commons/thumb/2/27/PHP-logo.svg/262px-PHP-logo.svg.png",
        "proportion": "90",
        "link": ""
    },
    {
        "type": "framework",
        "name": "saas",
        "tags": ["language", "frontend", "style", "framework", "css"],
        "logo": "https://sass-lang.com/assets/img/logos/logo-b6e1ef6e.svg",
        "proportion": "90",
        "link": ""
    },
    {
        "type": "dependencies_manager",
        "name": "composer",
        "tags": ["backend", "framework", "php", "dependencies_manager"],
        "logo": "https://getcomposer.org/img/logo-composer-transparent.png",
        "proportion": "",
        "link": ""
    },
    {
        "type": "dependencies_manager",
        "name": "npm",
        "tags": ["backend", "framework", "NodeJS", "dependencies_manager"],
        "logo": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/db/Npm-logo.svg/langfr-440px-Npm-logo.svg.png",
        "proportion": "",
        "link": ""
    },
    {
        "type": "framework",
        "name": "symfony",
        "tags": ["backend", "framework", "php"],
        "logo": "https://symfony.com/images/logos/header-logo.svg",
        "proportion": "75",
        "link": ""
    },
    {
        "type": "framework",
        "name": "flight",
        "tags": ["backend", "framework", "php"],
        "logo": "90",
        "proportion": "",
        "link": ""
    },
    {
        "type": "framework",
        "name": "laravel",
        "tags": ["backend", "framework", "php"],
        "logo": "https://commons.wikimedia.org/w/index.php?title=File:Laravel.svg&lang=fr&uselang=fr",
        "proportion": "",
        "link": "75"
    },
    {
        "type": "framework",
        "name": "zend",
        "tags": ["backend", "framework", "php"],
        "logo": "https://framework.zend.com/",
        "proportion": "50",
        "link": ""
    },
    {
        "type": "framework",
        "name": "slim",
        "tags": ["backend", "framework", "php"],
        "logo": "",
        "proportion": "",
        "link": ""
    },
    {
        "type": "framework",
        "name": "angular",
        "tags": ["frontend", "framework", "JavaScript", "TypeScript"],
        "logo": "https://angular.io/assets/images/logos/angular/logo-nav@2x.png",
        "proportion": "55",
        "link": ""
    },
    {
        "type": "framework",
        "name": "ExpressJS",
        "tags": ["backend", "framework", "JavaScript"],
        "logo": "https://miro.medium.com/max/700/1*XP-mZOrIqX7OsFInN2ngRQ.png",
        "proportion": "",
        "link": ""
    },
    {
        "type": "framework",
        "name": "Ionic",
        "tags": ["frontend", "framework", "JavaScript", "TypeScript", "mobile"],
        "logo": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/LogoIonic.png/320px-LogoIonic.png",
        "proportion": "",
        "link": ""
    },
    {
        "type": "security",
        "name": "jwtToken",
        "tags": ["backend", "frontend", "JavaScript", "TypeScript", "mobile", "php", "go"],
        "logo": "https://jwt.io/img/logo.svg",
        "proportion": "",
        "link": ""
    },
    {
        "type": "security",
        "name": "oauth",
        "tags": ["backend", "frontend", "JavaScript", "TypeScript", "mobile", "php", "go"],
        "logo": "",
        "proportion": "",
        "link": ""
    },
    {
        "type": "tool",
        "name": "gulp",
        "tags": ["frontend", "JavaScript", "tool"],
        "logo": "",
        "proportion": "",
        "link": ""
    },
    {
        "type": "tool",
        "name": "babel",
        "tags": ["frontend", "JavaScript", "tool"],
        "logo": "",
        "proportion": "",
        "link": ""
    },
    {
        "type": "tool",
        "name": "gulp",
        "tags": ["frontend", "JavaScript", "tool"],
        "logo": "",
        "proportion": "",
        "link": ""
    },
    {
        "type": "tool",
        "name": "gulp",
        "tags": ["frontend", "JavaScript", "tool"],
        "logo": "",
        "proportion": "",
        "link": ""
    },
    {
        "type": "library",
        "name": "jquery",
        "tags": ["frontend", "JavaScript", "library"],
        "logo": "",
        "proportion": "",
        "link": ""
    },
    {
        "type": "library",
        "name": "amchart",
        "tags": ["frontend", "JavaScript", "library"],
        "logo": "",
        "proportion": "",
        "link": ""
    },
    {
        "type": "library",
        "name": "fullcalendar io",
        "tags": ["frontend", "JavaScript", "library"],
        "logo": "",
        "proportion": "",
        "link": ""
    },
    {
        "type": "library",
        "name": "jqueryUI",
        "tags": ["frontend", "JavaScript", "library"],
        "logo": "",
        "proportion": "",
        "link": ""
    },
    {
        "type": "framework",
        "name": "vujs",
        "tags": ["frontend", "JavaScript", "framework", "templating"],
        "logo": "",
        "proportion": "",
        "link": ""
    },
    {
        "type": "templating",
        "name": "handlebarsJs",
        "tags": ["frontend", "templating", "css"],
        "logo": "",
        "proportion": "",
        "link": ""
    },
    {
        "type": "framework",
        "name": "vujs",
        "tags": ["frontend", "css", "templating"],
        "logo": "",
        "proportion": "",
        "link": ""
    },
    {
        "type": "templating",
        "name": "vujs",
        "tags": ["frontend", "css", "framework", "templating"],
        "logo": "",
        "proportion": "",
        "link": ""
    },
    {
        "type": "templating",
        "name": "vujs",
        "tags": ["frontend", "JavaScript", "framework", "templating"],
        "logo": "",
        "proportion": "",
        "link": ""
    },
    {
        "type": "templating",
        "name": "bootstrap",
        "tags": ["style", "frontend", "templating", "css"],
        "logo": "",
        "proportion": "",
        "link": ""
    },
    {
        "type": "templating",
        "name": "bulma",
        "tags": ["style", "frontend", "templating", "framework", "css"],
        "logo": "",
        "proportion": "",
        "link": ""
    },
    {
        "type": "templating",
        "name": "material",
        "tags": ["style", "frontend", "templating", "framework", "css"],
        "logo": "",
        "proportion": "",
        "link": ""
    },
    {
        "type": "database",
        "name": "mysql",
        "tags": ["sql", "database"],
        "logo": "",
        "proportion": "",
        "link": ""
    },
    {
        "type": "database",
        "name": "oracle",
        "tags": ["sql", "database"],
        "logo": "",
        "proportion": "",
        "link": ""
    },
    {
        "type": "database",
        "name": "postgesql",
        "tags": ["sql", "database"],
        "logo": "",
        "proportion": "",
        "link": ""
    },
    {
        "type": "tool",
        "name": "postman",
        "tags": ["tool", "request", "http", "xml"],
        "logo": "",
        "proportion": "",
        "link": ""
    },
    {
        "type": "database",
        "name": "soap ui",
        "tags": ["tool", "request", "http", "xml"],
        "logo": "",
        "proportion": "",
        "link": ""
    },
    {
        "type": "uml",
        "name": "uml",
        "tags": ["uml", "tool"],
        "logo": "",
        "proportion": "",
        "link": ""
    },
    {
        "type": "uml",
        "name": "staruml",
        "tags": ["uml", "tool", "software"],
        "logo": "",
        "proportion": "",
        "link": ""
    },
    {
        "type": "uml",
        "name": "drow.io",
        "tags": ["uml", "tool", "software"],
        "logo": "",
        "proportion": "",
        "link": ""
    },
    {
        "type": "",
        "name": "merise",
        "tags": ["uml", "tool"],
        "logo": "",
        "proportion": "",
        "link": ""
    },
    {
        "type": "kanban",
        "name": "trello",
        "tags": ["kanban", "tool", "software"],
        "logo": "",
        "proportion": "",
        "link": ""
    },
    {
        "type": "kanban",
        "name": "Taïga",
        "tags": ["kanban", "tool", "software"],
        "logo": "",
        "proportion": "",
        "link": ""
    },
    {
        "type": "kanban",
        "name": "Tuleap",
        "tags": ["kanban", "tool", "software"],
        "logo": "",
        "proportion": "",
        "link": ""
    },
    {
        "type": "editor",
        "name": "Visual Studio Code",
        "tags": ["editor", "software"],
        "logo": "",
        "proportion": "",
        "link": ""
    },
    {
        "type": "editor",
        "name": "Sublime Text",
        "tags": ["editor", "software"],
        "logo": "",
        "proportion": "",
        "link": ""
    },
    {
        "type": "editor",
        "name": "Atom",
        "tags": ["editor", "software"],
        "logo": "",
        "proportion": "",
        "link": ""
    },
    {
        "type": "editor",
        "name": "PHPStorm",
        "tags": ["php", "editor", "software"],
        "logo": "",
        "proportion": "",
        "link": ""
    },
    {
        "type": "graphisme",
        "name": "illustrator",
        "tags": ["graphism", "software"],
        "logo": "",
        "proportion": "",
        "link": ""
    },
    {
        "type": "graphisme",
        "name": "photoshop",
        "tags": ["graphisme", "software"],
        "logo": "",
        "proportion": "",
        "link": ""
    },
    {
        "type": "api",
        "name": "objenious",
        "tags": ["api", "iot"],
        "logo": "",
        "proportion": "",
        "link": ""
    },
    {
        "type": "api",
        "name": "orange",
        "tags": ["api", "iot"],
        "logo": "",
        "proportion": "",
        "link": ""
    },
    {
        "type": "api",
        "name": "sinox",
        "tags": ["api", "iot"],
        "logo": "",
        "proportion": "",
        "link": ""
    },
    {
        "type": "api",
        "name": "sigfox",
        "tags": ["api", "iot"],
        "logo": "",
        "proportion": "",
        "link": ""
    },
    {
        "type": "api",
        "name": "googleMap",
        "tags": ["api"],
        "logo": "",
        "proportion": "",
        "link": ""
    },
    {
        "type": "api",
        "name": "weatherUnderground",
        "tags": ["api"],
        "logo": "",
        "proportion": "",
        "link": ""
    },
    {
        "type": "api",
        "name": "stripe",
        "tags": ["api"],
        "logo": "",
        "proportion": "",
        "link": ""
    },
    {
        "type": "api",
        "name": "workday",
        "tags": ["api"],
        "logo": "",
        "proportion": "",
        "link": ""
    },
    {
        "type": "api",
        "name": "hraccess",
        "tags": ["api"],
        "logo": "",
        "proportion": "",
        "link": ""
    },
    {
        "type": "sourceManager",
        "name": "git",
        "tags": ["sourceManager"],
        "logo": "",
        "proportion": "",
        "link": ""
    },
    {
        "type": "sourceManager",
        "name": "github",
        "tags": ["sourceManager"],
        "logo": "",
        "proportion": "",
        "link": ""
    },
    {
        "type": "sourceManager",
        "name": "gitlab",
        "tags": ["sourceManager"],
        "logo": "",
        "proportion": "",
        "link": ""
    },
    {
        "type": "sourceManager",
        "name": "bitbucket",
        "tags": ["sourceManager"],
        "logo": "",
        "proportion": "",
        "link": ""
    },
    {
        "type": "utility",
        "name": "putty",
        "tags": ["sourceManager"],
        "logo": "",
        "proportion": "",
        "link": ""
    },
    {
        "type": "utility",
        "name": "winscp",
        "tags": ["sourceManager"],
        "logo": "",
        "proportion": "",
        "link": ""
    },
    {
        "type": "utility",
        "name": "filezilla",
        "tags": ["sourceManager"],
        "logo": "",
        "proportion": "",
        "link": ""
    }
];