module.exports = {
    title: 'Hello VuePress',
    description: 'Just playing around',
    themeConfig: {
        locales: {
            '/': {
                label: '简体中文',
                selectText: '选择语言',
                nav: [
                    {
                        text: '知识体系',
                        link: '/knowledges/'
                    },
                    {
                        text: '专题突破',
                        link: '/knowledges/javascript'
                    },
                    {
                        text: '面试题库',
                        link: '/knowledges/javascript'
                    }
                ],
                sidebar: {
                    '/knowledges/': [ 
                        {
                            title: '知识体系',
                            collapsable: false,
                            children: [ '/knowledges/javascript/README.md']
                        }
                    ]
                }
            }
        }
    }
  }