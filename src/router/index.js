import Vue from 'vue'
import Router from 'vue-router'

/* Lazy loading routes */

const Home = resolve => {
  require.ensure(['@/components/pages/Home'], () => {
    resolve(require('@/components/pages/Home'))
  }, 'home')
}

const Projects = resolve => {
  require.ensure(['@/components/pages/Projects'], () => {
    resolve(require('@/components/pages/Projects'))
  }, 'projects')
}

const Notes = resolve => {
  require.ensure(['@/components/pages/projects/webdev/Notes'], () => {
    resolve(require('@/components/pages/projects/webdev/Notes'))
  }, 'projects')
}

const SvgAnim = resolve => {
  require.ensure(['@/components/pages/projects/webdev/SvgAnimation'], () => {
    resolve(require('@/components/pages/projects/webdev/SvgAnimation'))
  }, 'projects')
}

const Ignite = resolve => {
  require.ensure(['@/components/pages/projects/Ignite'], () => {
    resolve(require('@/components/pages/projects/Ignite'))
  }, 'projects')
}

const Settings = resolve => {
  require.ensure(['@/components/settings/ThemeSettings.vue'], () => {
    resolve(require('@/components/settings/ThemeSettings.vue'))
  }, 'projects')
}

const Admin = resolve => {
  require.ensure(['@/components/pages/Admin.vue'], () => {
    resolve(require('@/components/pages/Admin.vue'))
  }, 'admin')
}

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/settings',
      name: 'settings',
      component: Settings
    },
    {
      path: '/projects',
      name: 'projects',
      component: Projects,
      children: [
        {
          path: ':name',
          props: true
        }

      ]
    },
    {
      path: '/projects/webdev/notes',
      name: 'noteTakingWebApp',
      component: Notes
    },
    {
      path: '/projects/webdev/svg-animation',
      name: 'svgAnim',
      component: SvgAnim
    },
    {
      path: '/projects/ignite',
      name: 'projectIgnite',
      component: Ignite
    },
    {
      path: '/admin',
      name: 'admin',
      component: Admin
    },
    {
      path: '*',
      redirect: {name: 'home'}
    }
  ],
  mode: 'history'
})
