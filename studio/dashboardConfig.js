export default {
  widgets: [
    // {
    //   name: 'sanity-tutorials',
    //   options: {
    //     templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
    //   }
    // },
    { name: 'structure-menu' },
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
                  buildHookId: '62650e16aa84587a37b28a98',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-89ntkur2',
                  apiId: 'e7d2d99a-15f7-4e82-b013-19ed5354418d'
                },
                {
                  buildHookId: '62650e16e6c8987da8edbc3a',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-qyk3o1zo',
                  apiId: '7156eda3-f449-4ca0-9a9f-71fae8fc5be4'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/10ARK-StephenKie/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-qyk3o1zo.netlify.app', category: 'apps' }
        ]
      }
    },
    {
      name: 'document-list',
      options: { title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page'] },
      layout: { width: 'medium' }
    },
    { name: 'project-users', layout: { height: 'auto' } }
  ]
}
