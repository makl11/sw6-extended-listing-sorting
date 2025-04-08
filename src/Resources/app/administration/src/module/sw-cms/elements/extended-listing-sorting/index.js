
Shopware.Component.register('sw-cms-el-preview-extended-listing-sorting', () => import('./preview'));
Shopware.Component.register('sw-cms-el-config-extended-listing-sorting', () => import('./config'));
Shopware.Component.register('sw-cms-el-extended-listing-sorting', () => import('./component'));

Shopware.Service('cmsService').registerCmsElement({
    name: 'extended-listing-sorting',
    label: 'sw-cms.elements.extendedListingSorting.label',
    component: 'sw-cms-el-extended-listing-sorting',
    configComponent: 'sw-cms-el-config-extended-listing-sorting',
    previewComponent: 'sw-cms-el-preview-extended-listing-sorting',
    disabledConfigInfoTextKey: 'sw-cms.elements.extendedListingSorting.infoText',
});
