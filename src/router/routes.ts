
//对外暴露常量路由
export const constantRoute = [
  {
    //登录
    path: "/",
    component: () => import("@/views/login/index.vue"),
    name: "login", //命名路由
    meta: {
      title: '登录',
      hidden: true,//是否在菜单隐藏
      icon: 'Aim'
    }
  },
  {
     path: '/firstpage',
        component: () => import('@/views/firstpage/firstpage.vue'),
        name: 'firstpage',
        meta: {
          title: '首页面',
          hidden: true,//是否在菜单隐藏
          icon: 'CircleCloseFilled',
          key: 'unique-key'
        },
      },
      {
          path: '/myinformation',
          component: () => import('@/views/firstpage/myinformation.vue'),
          name: 'myinformation',
          meta: {
            title: '个人信息',
            hidden: false,
            icon: 'FolderAdd',
            key: 'unique-key'
          }
          
        },
      {
        path: '/changepwd',
        component: () => import('@/views/firstpage/changepwd.vue'),
        name: 'changepwd',
        meta: {
          title: '修改密码',
          hidden: false,
          icon: 'FolderAdd',
          key: 'unique-key'
        }
         
      },
  {
    path: '/CourseInfo',
    component: () => import("@/layout/index.vue"),
    name: 'CourseInfo',
    redirect: '/CourseInfo/introduction',
    meta: {
      title: '课程信息',
      hidden: false,
      icon: 'Folder',
    },
    children: [
      {
        path: '/CourseInfo/Introduction',
        component: () => import('@/views/CourseInfo/Introduction.vue'),
        name: 'introduction',
        meta: {
          title: '课程介绍',
          hidden: false,
          icon: 'Document'
        }
      },
      {
        path: '/CourseInfo/Syllabus',
        component: () => import('@/views/CourseInfo/Syllabus.vue'),
        name: 'Syllabus',
        meta: {
          title: '教学大纲',
          hidden: false,
          icon: 'Document'
        }
      },
      {
        path: '/CourseInfo/Calendar',
        component: () => import('@/views/CourseInfo/Calendar.vue'),
        name: 'Calendar',
        meta: {
          title: '教学日历',
          hidden: false,
          icon: 'calendar'
        }
      },
      {
        path: '/CourseInfo/TeacherInfo',
        component: () => import('@/views/CourseInfo/TeacherInfo.vue'),
        name: 'TeacherInfo',
        meta: {
          title: '教师信息',
          hidden: false,
          icon: 'Reading'
        }
      },
      {
        path: '/CourseInfo/Notify',
        component: () => import('@/views/CourseInfo/Notify.vue'),
        name: 'Notifies',
        meta: {
          title: '课程通知',
          hidden: false,
          icon: 'Notification'
        }
      },
    ]
  },
  {
    path: '/CourseResource',
    component: () => import("@/layout/index.vue"),
    name: 'CourseResource',
    redirect: '/CourseResource/File',
    meta: {
      title: '课程资源',
      hidden: false,
      icon: 'Folder',
    },
    children: [
      {
        path: '/CourseResource/File',
        component: () => import('@/views/CourseResource/File.vue'),
        name: 'File',
        meta: {
          title: '电子课件',
          hidden: false,
          icon: 'Files',
        }
      },
      {
        path: '/CourseResource/Like',
        component: () => import('@/views/CourseResource/Like.vue'),
        name: 'Like',
        meta: {
          title: '收藏夹',
          hidden: false,
          icon: 'StarFilled',
        }
      }
    ]
  },
  {
    path: '/CourseManagement',
    component: () => import("@/layout/index.vue"),
    name: 'CourseManagement',
    redirect: '/CourseManagement/Students',
    meta: {
      title: '课程管理',
      hidden: false,
      icon: 'Setting',
    },
    children: [
      {
        path: '/CourseManagement/Students',
        component: () => import('@/views/CourseManagement/Student.vue'),
        name: 'Students',
        meta: {
          title: '选课学生名单',
          hidden: false,
          icon: 'User',
        }
      },
      {
        path: '/CourseManagement/Notify',
        component: () => import('@/views/CourseManagement/Notify.vue'),
        name: 'Notify',
        meta: {
          title: '通知发布',
          hidden: false,
          icon: 'Notification',
        }
      }
    ]
  },
  {
    //404
    path: "/404",
    component: () => import("@/views/404/index.vue"),
    name: "404",
    meta: {
      title: '404',
      hidden: true,
      icon: "CircleCloseFilled"
    }
  },
  {
    path: "/:pathMatch(.*)*",
    redirect: "/404",
    name: "any",
    meta: {
      title: '任意路由',
      hidden: true,
      icon: "CircleCloseFilled"
    }
  },

]