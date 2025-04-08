Shopware.Component.register('sw-cms-preview-extended-listing-sorting', () => import('./preview'));
Shopware.Component.register('sw-cms-block-extended-listing-sorting', () => import('./component'));

Shopware.Service('cmsService').registerCmsBlock({
    name: 'extended-listing-sorting',
    label: 'sw-cms.blocks.sidebar.extendedListingSorting.label',
    category: 'commerce',
    component: 'sw-cms-block-extended-listing-sorting',
    previewComponent: 'sw-cms-preview-extended-listing-sorting',
    defaultConfig: {
        marginBottom: '20px',
        marginTop: '20px',
        marginLeft: '20px',
        marginRight: '20px',
        sizingMode: 'boxed',
    },
    slots: {
        content: 'extended-listing-sorting',
    },
});
