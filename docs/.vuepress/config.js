module.exports = {
    title: '简洁至上',
    description: '描述：简洁至上',
    head: [
        ['link', { rel: 'icon', href: `/favicon.ico` }]
    ],
    base: '/vuepress/',
    host:'0.0.0.0',
    port:8008,
    configureWebpack: {
        resolve: {
            alias: {
                '@alias': 'assets'
            }
        }
    },
    themeConfig: {
        logo: '/img/logo.png',
        nav: [
            { text: 'Guide', link: '/guide/' },
            { text: 'Foo', link: '/foo/' },
            { text: 'Bar', link: '/bar/' },
            // 下拉列表
            {
                text: 'select',
                ariaLabel: 'select menu',
                items: [
                    { text: 'select1', link: '/select/select1' },
                    { text: 'select2', link: '/select/select2' }
                ]
            },
            { text: '百度', link: 'http://www.baidu.com'}
        ],
        lastUpdated: 'Last Updated' ,
        sidebar: {
            '/foo/': [
                '',     /* /foo/ */
                'one',  /* /foo/one.html */
                'two'   /* /foo/two.html */
            ],

            '/bar/': [
                '',      /* /bar/ */
                'one', /* /bar/three.html */
                'two'   /* /bar/four.html */
            ],

            // fallback
            '/guide/': [
                '',        /* / */
                'contact', /* /contact.html */
                'about'    /* /about.html */
            ]
        },
        sidebarDepth:2, // 默认 1 提取到 h2，0 为禁用，2 为 h2，h3
        displayAllHeaders: false, // 默认值：false 侧边栏只会显示由当前活动页面的标题组成的链接
        activeHeaderLinks: true, // 默认值：true 滚动时通过 hash 高亮侧边栏标题
    }
}
