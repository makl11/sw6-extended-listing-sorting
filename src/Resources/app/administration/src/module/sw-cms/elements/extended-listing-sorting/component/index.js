import template from './sw-cms-el-extended-listing-sorting.html.twig';
import './sw-cms-el-extended-listing-sorting.scss';

export default {
    template,

    mixins: [
        Shopware.Mixin.getByName('cms-element'),
        Shopware.Mixin.getByName('placeholder'),
    ],

    created() {
        this.createdComponent();
    },

    methods: {
        createdComponent() {
            this.initElementConfig('extended-listing-sorting');
        },
    },
};
