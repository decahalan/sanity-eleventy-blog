export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-eleventy-blog'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '61251675256c8d52bdc2012e',
                  title: 'Sanity Studio',
                  name: 'sanity-eleventy-blog-studio-zzcgijqv',
                  apiId: '48b86267-41ad-4ac2-ac3c-86118345c74f'
                },
                {
                  buildHookId: '6125167530bd2152c7061cd4',
                  title: 'Blog Website',
                  name: 'sanity-eleventy-blog-web-m7zjpuny',
                  apiId: '24e949a0-a170-463d-9247-af177a437891'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/decahalan/sanity-eleventy-blog',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-eleventy-blog-web-m7zjpuny.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
