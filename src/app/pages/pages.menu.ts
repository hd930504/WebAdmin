export const PAGES_MENU = [
  {
    path: 'pages',
    children: [
      {
        path: 'dashboard',
        data: {
          menu: {
            title: '首页',
            icon: 'ion-android-home',
            selected: false,
            expanded: false,
            order: 0
          }
        }
      },
      {
        path: 'housemanager',
        data: {
          menu: {
            title: '房源管理',
            icon: 'ion-wrench',
            selected: false,
            expanded: false,
            order: 100,
          }
        },
        children: [
          {
            path: 'secondhouse',
            data: {
              menu: {
                title: '二手房',
              }
            }
          },
          {
            path: 'newhouse',
            data: {
              menu: {
                title: '新房',
              }
            }
          },
          {
            path: 'purchasehouse',
            data: {
              menu: {
                title: '求购',
              }
            }
          },
          {
            path: 'rentinghouse',
            data: {
              menu: {
                title: '租房',
              }
            }
          }
        ]
      },
      {
        path: 'villagemanager',
        data: {
          menu: {
            title: '小区管理',
            icon: 'ion-android-home',
            selected: false,
            expanded: false,
            order: 0
          }
        }
      },
       {
        path: 'agencymanager',
        data: {
          menu: {
            title: '中介管理',
            icon: 'ion-android-home',
            selected: false,
            expanded: false,
            order: 100
          }
        }
        ,children:[
          {
            path:'agencyaccount',
            data: {
              menu: {
                title: '中介账号',
              }
            }
          },
          {
            path:'agencystaff',
            data: {
              menu: {
                title: '中介人员',
              }
            }
          },
          {
            path:'agencybusiness',
            data: {
              menu: {
                title: '中介企业排名',
              }
            }
          }
        ]
      },
      {
        path: 'advice',
        data: {
          menu: {
            title: '咨询管理',
            icon: 'ion-edit',
            selected: false,
            expanded: false,
            order: 100,
          }
        },
        children: [
          {
            path: 'internalnews',
            data: {
              menu: {
                title: '国内咨询',
              }
            }
          },
          {
            path: 'localnews',
            data: {
              menu: {
                title: '本地咨询',
              }
            }
          },
          {
            path: 'lawsnews',
            data: {
              menu: {
                title: '政策法规',
              }
            }
          }

        ]
      },
       {
        path: 'networkstatistics',
        data: {
          menu: {
            title: '网签统计',
            icon: 'ion-android-home',
            selected: false,
            expanded: false,
            order: 0
          }
        }
      },
       {
        path: 'datastatistics',
        data: {
          menu: {
            title: '数据统计',
            icon: 'ion-android-home',
            selected: false,
            expanded: false,
            order: 0
          }
        }
      },
      {
        path: 'memmanager',
        data: {
          menu: {
            title: '用户管理',
            icon: 'ion-wrench',
            selected: false,
            expanded: false,
            order: 100,
          }
        },
        children: [
          {
            path: 'agencylist',
            data: {
              menu: {
                title: '中介管理',
              }
            }
          },
          {
            path: 'rolelist',
            data: {
              menu: {
                title: '开发商',
              }
            }
          },
          {
            path: 'syslist',
            data: {
              menu: {
                title: '个人',
              }
            }
          },
          {
            path: 'admem',
            data: {
              menu: {
                title: '广告商',
              }
            }
          }
        ]
      },
      {
        path: 'sysmanager',
        data: {
          menu: {
            title: '系统管理',
            icon: 'ion-wrench',
            selected: false,
            expanded: false,
            order: 100,
          }
        },
        children: [
          {
            path: 'userlist',
            data: {
              menu: {
                title: '账户管理',
              }
            }
          },
          {
            path: 'rolelist',
            data: {
              menu: {
                title: '角色管理',
              }
            }
          },
          {
            path: 'syslist',
            data: {
              menu: {
                title: '系统管理',
              }
            }
          },
          {
            path: 'EnumList',
            data: {
              menu: {
                title: '枚举配置',
              }
            }
          }
        ]
      },
      {
        path: 'editors',
        data: {
          menu: {
            title: 'general.menu.editors',
            icon: 'ion-edit',
            selected: false,
            expanded: false,
            order: 100,
          }
        },
        children: [
          {
            path: 'ckeditor',
            data: {
              menu: {
                title: 'general.menu.ck_editor',
              }
            }
          }
        ]
      },
      {
        path: 'components',
        data: {
          menu: {
            title: 'general.menu.components',
            icon: 'ion-gear-a',
            selected: false,
            expanded: false,
            order: 250,
          }
        },
        children: [
          {
            path: 'treeview',
            data: {
              menu: {
                title: 'general.menu.tree_view',
              }
            }
          }
        ]
      },
      {
        path: 'charts',
        data: {
          menu: {
            title: 'general.menu.charts',
            icon: 'ion-stats-bars',
            selected: false,
            expanded: false,
            order: 200,
          }
        },
        children: [
          {
            path: 'chartist-js',
            data: {
              menu: {
                title: 'general.menu.chartist_js',
              }
            }
          }
        ]
      },
      {
        path: 'ui',
        data: {
          menu: {
            title: 'general.menu.ui_features',
            icon: 'ion-android-laptop',
            selected: false,
            expanded: false,
            order: 300,
          }
        },
        children: [
          {
            path: 'typography',
            data: {
              menu: {
                title: 'general.menu.typography',
              }
            }
          },
          {
            path: 'buttons',
            data: {
              menu: {
                title: 'general.menu.buttons',
              }
            }
          },
          {
            path: 'icons',
            data: {
              menu: {
                title: 'general.menu.icons',
              }
            }
          },
          {
            path: 'modals',
            data: {
              menu: {
                title: 'general.menu.modals',
              }
            }
          },
          {
            path: 'grid',
            data: {
              menu: {
                title: 'general.menu.grid',
              }
            }
          },
        ]
      },
      {
        path: 'forms',
        data: {
          menu: {
            title: 'general.menu.form_elements',
            icon: 'ion-compose',
            selected: false,
            expanded: false,
            order: 400,
          }
        },
        children: [
          {
            path: 'inputs',
            data: {
              menu: {
                title: 'general.menu.form_inputs',
              }
            }
          },
          {
            path: 'layouts',
            data: {
              menu: {
                title: 'general.menu.form_layouts',
              }
            }
          }
        ]
      },
      {
        path: 'tables',
        data: {
          menu: {
            title: 'general.menu.tables',
            icon: 'ion-grid',
            selected: false,
            expanded: false,
            order: 500,
          }
        },
        children: [
          {
            path: 'basictables',
            data: {
              menu: {
                title: 'general.menu.basic_tables',
              }
            }
          },
          {
            path: 'smarttables',
            data: {
              menu: {
                title: 'general.menu.smart_tables',
              }
            }
          },
          {
            path: 'datatables',
            data: {
              menu: {
                title: 'Data Tables',
              }
            }
          }
        ]
      },
      {
        path: 'maps',
        data: {
          menu: {
            title: 'general.menu.maps',
            icon: 'ion-ios-location-outline',
            selected: false,
            expanded: false,
            order: 600,
          }
        },
        children: [
          {
            path: 'googlemaps',
            data: {
              menu: {
                title: 'general.menu.google_maps',
              }
            }
          },
          {
            path: 'leafletmaps',
            data: {
              menu: {
                title: 'general.menu.leaflet_maps',
              }
            }
          },
          {
            path: 'bubblemaps',
            data: {
              menu: {
                title: 'general.menu.bubble_maps',
              }
            }
          },
          {
            path: 'linemaps',
            data: {
              menu: {
                title: 'general.menu.line_maps',
              }
            }
          }
        ]
      },
      {
        path: '',
        data: {
          menu: {
            title: 'general.menu.pages',
            icon: 'ion-document',
            selected: false,
            expanded: false,
            order: 650,
          }
        },
        children: [
          {
            path: ['/login'],
            data: {
              menu: {
                title: 'general.menu.login'
              }
            }
          },
          {
            path: ['/register'],
            data: {
              menu: {
                title: 'general.menu.register'
              }
            }
          }
        ]
      },
      {
        path: '',
        data: {
          menu: {
            title: 'general.menu.menu_level_1',
            icon: 'ion-ios-more',
            selected: false,
            expanded: false,
            order: 700,
          }
        },
        children: [
          {
            path: '',
            data: {
              menu: {
                title: 'general.menu.menu_level_1_1',
                url: '#'
              }
            }
          },
          {
            path: '',
            data: {
              menu: {
                title: 'general.menu.menu_level_1_2',
                url: '#'
              }
            },
            children: [
              {
                path: '',
                data: {
                  menu: {
                    title: 'general.menu.menu_level_1_2_1',
                    url: '#'
                  }
                }
              }
            ]
          }
        ]
      },
      {
        path: '',
        data: {
          menu: {
            title: 'general.menu.external_link',
            url: 'http://akveo.com',
            icon: 'ion-android-exit',
            order: 800,
            target: '_blank'
          }
        }
      }
    ]
  }
];
