
      import React from 'react';
      import ReactDOM from 'react-dom';
      import Area from '@evershop/evershop/src/components/common/Area';
      import Hydrate from '@evershop/evershop/src/components/common/react/client/HydrateFrontStore';
      
Area.defaultProps.components = {
  'icon-wrapper': {
    L25vZGVfbW9kdWxlcy9AZXZlcnNob3AvZXZlcnNob3Avc3JjL21vZHVsZXMvY2F0YWxvZy9wYWdlcy9mcm9udFN0b3JlL2FsbC9TZWFyY2hCb3guanN4: {
      id: 'L25vZGVfbW9kdWxlcy9AZXZlcnNob3AvZXZlcnNob3Avc3JjL21vZHVsZXMvY2F0YWxvZy9wYWdlcy9mcm9udFN0b3JlL2FsbC9TZWFyY2hCb3guanN4',
      sortOrder: 5,
      component: require('/workspaces/firework-dev-containers/node_modules/@evershop/evershop/src/modules/catalog/pages/frontStore/all/SearchBox.jsx')
    },
    L25vZGVfbW9kdWxlcy9AZXZlcnNob3AvZXZlcnNob3Avc3JjL21vZHVsZXMvY2hlY2tvdXQvcGFnZXMvZnJvbnRTdG9yZS9hbGwvTWluaUNhcnQuanN4: {
      id: 'L25vZGVfbW9kdWxlcy9AZXZlcnNob3AvZXZlcnNob3Avc3JjL21vZHVsZXMvY2hlY2tvdXQvcGFnZXMvZnJvbnRTdG9yZS9hbGwvTWluaUNhcnQuanN4',
      sortOrder: 10,
      component: require('/workspaces/firework-dev-containers/node_modules/@evershop/evershop/src/modules/checkout/pages/frontStore/all/MiniCart.jsx')
    },
    L25vZGVfbW9kdWxlcy9AZXZlcnNob3AvZXZlcnNob3Avc3JjL21vZHVsZXMvY3VzdG9tZXIvcGFnZXMvZnJvbnRTdG9yZS9hbGwvVXNlckljb24uanN4: {
      id: 'L25vZGVfbW9kdWxlcy9AZXZlcnNob3AvZXZlcnNob3Avc3JjL21vZHVsZXMvY3VzdG9tZXIvcGFnZXMvZnJvbnRTdG9yZS9hbGwvVXNlckljb24uanN4',
      sortOrder: 30,
      component: require('/workspaces/firework-dev-containers/node_modules/@evershop/evershop/src/modules/customer/pages/frontStore/all/UserIcon.jsx')
    }
  },
  content: {
    L25vZGVfbW9kdWxlcy9AZXZlcnNob3AvZXZlcnNob3Avc3JjL21vZHVsZXMvY21zL3BhZ2VzL2Zyb250U3RvcmUvYWxsL0JyZWFkY3J1bWIuanN4: {
      id: 'L25vZGVfbW9kdWxlcy9AZXZlcnNob3AvZXZlcnNob3Avc3JjL21vZHVsZXMvY21zL3BhZ2VzL2Zyb250U3RvcmUvYWxsL0JyZWFkY3J1bWIuanN4',
      sortOrder: 0,
      component: require('/workspaces/firework-dev-containers/node_modules/@evershop/evershop/src/modules/cms/pages/frontStore/all/Breadcrumb.jsx')
    },
    'L25vZGVfbW9kdWxlcy9AZXZlcnNob3AvZXZlcnNob3Avc3JjL21vZHVsZXMvcGF5cGFsL3BhZ2VzL2Zyb250U3RvcmUvcGF5cGFsUmV0dXJuL0Vycm9yLmpzeA==': {
      id: 'L25vZGVfbW9kdWxlcy9AZXZlcnNob3AvZXZlcnNob3Avc3JjL21vZHVsZXMvcGF5cGFsL3BhZ2VzL2Zyb250U3RvcmUvcGF5cGFsUmV0dXJuL0Vycm9yLmpzeA==',
      sortOrder: 10,
      component: require('/workspaces/firework-dev-containers/node_modules/@evershop/evershop/src/modules/paypal/pages/frontStore/paypalReturn/Error.jsx')
    }
  },
  footer: {
    'L25vZGVfbW9kdWxlcy9AZXZlcnNob3AvZXZlcnNob3Avc3JjL21vZHVsZXMvY21zL3BhZ2VzL2Zyb250U3RvcmUvYWxsL0Zvb3Rlci5qc3g=': {
      id: 'L25vZGVfbW9kdWxlcy9AZXZlcnNob3AvZXZlcnNob3Avc3JjL21vZHVsZXMvY21zL3BhZ2VzL2Zyb250U3RvcmUvYWxsL0Zvb3Rlci5qc3g=',
      sortOrder: 10,
      component: require('/workspaces/firework-dev-containers/node_modules/@evershop/evershop/src/modules/cms/pages/frontStore/all/Footer.jsx')
    }
  },
  head: {
    'L25vZGVfbW9kdWxlcy9AZXZlcnNob3AvZXZlcnNob3Avc3JjL21vZHVsZXMvY21zL3BhZ2VzL2Zyb250U3RvcmUvYWxsL0hlYWRUYWdzLmpzeA==': {
      id: 'L25vZGVfbW9kdWxlcy9AZXZlcnNob3AvZXZlcnNob3Avc3JjL21vZHVsZXMvY21zL3BhZ2VzL2Zyb250U3RvcmUvYWxsL0hlYWRUYWdzLmpzeA==',
      sortOrder: 5,
      component: require('/workspaces/firework-dev-containers/node_modules/@evershop/evershop/src/modules/cms/pages/frontStore/all/HeadTags.jsx')
    }
  },
  body: {
    'L25vZGVfbW9kdWxlcy9AZXZlcnNob3AvZXZlcnNob3Avc3JjL21vZHVsZXMvY21zL3BhZ2VzL2Zyb250U3RvcmUvYWxsL0xheW91dC5qc3g=': {
      id: 'L25vZGVfbW9kdWxlcy9AZXZlcnNob3AvZXZlcnNob3Avc3JjL21vZHVsZXMvY21zL3BhZ2VzL2Zyb250U3RvcmUvYWxsL0xheW91dC5qc3g=',
      sortOrder: 1,
      component: require('/workspaces/firework-dev-containers/node_modules/@evershop/evershop/src/modules/cms/pages/frontStore/all/Layout.jsx')
    },
    'L25vZGVfbW9kdWxlcy9AZXZlcnNob3AvZXZlcnNob3Avc3JjL21vZHVsZXMvY21zL3BhZ2VzL2Zyb250U3RvcmUvYWxsL05vdGlmaWNhdGlvbi5qc3g=': {
      id: 'L25vZGVfbW9kdWxlcy9AZXZlcnNob3AvZXZlcnNob3Avc3JjL21vZHVsZXMvY21zL3BhZ2VzL2Zyb250U3RvcmUvYWxsL05vdGlmaWNhdGlvbi5qc3g=',
      sortOrder: 10,
      component: require('/workspaces/firework-dev-containers/node_modules/@evershop/evershop/src/modules/cms/pages/frontStore/all/Notification.jsx')
    }
  },
  header: {
    L25vZGVfbW9kdWxlcy9AZXZlcnNob3AvZXZlcnNob3Avc3JjL21vZHVsZXMvY21zL3BhZ2VzL2Zyb250U3RvcmUvYWxsL0xvZ28uanN4: {
      id: 'L25vZGVfbW9kdWxlcy9AZXZlcnNob3AvZXZlcnNob3Avc3JjL21vZHVsZXMvY21zL3BhZ2VzL2Zyb250U3RvcmUvYWxsL0xvZ28uanN4',
      sortOrder: 10,
      component: require('/workspaces/firework-dev-containers/node_modules/@evershop/evershop/src/modules/cms/pages/frontStore/all/Logo.jsx')
    }
  },
  '*': {
    collection_products: {
      id: 'collection_products',
      sortOrder: 0,
      component: require('@evershop/evershop/src/components/frontStore/widgets/CollectionProducts.jsx')
    },
    text_block: {
      id: 'text_block',
      sortOrder: 0,
      component: require('@evershop/evershop/src/components/frontStore/widgets/TextBlock.jsx')
    },
    basic_menu: {
      id: 'basic_menu',
      sortOrder: 0,
      component: require('@evershop/evershop/src/components/frontStore/widgets/BasicMenu.jsx')
    }
  }
} 
ReactDOM.hydrate(
        <Hydrate/>,
        document.getElementById('app')
      );