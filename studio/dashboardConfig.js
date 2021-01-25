export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
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
                  buildHookId: '600ed42ae75f9a6021a887cb',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-pbqq5rr1',
                  apiId: '0a0a2814-b392-49ca-9f80-c107f4c9a666'
                },
                {
                  buildHookId: '600ed42a5e57f1e88b5b3139',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-1w5djwaq',
                  apiId: 'e5347455-7012-4efb-8b40-0145eff4be14'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/LukeMel/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-1w5djwaq.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
