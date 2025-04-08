import ListingPlugin from "src/plugin/listing/listing.plugin"

export default class CustomListingPlugin extends ListingPlugin {
    _fetchValuesOfRegisteredFilters() {
        const filters = {};

        this._registry.forEach((filterPlugin) => {
            const values = filterPlugin.getValues();

            Object.keys(values).forEach((key) => {
                if (Object.prototype.hasOwnProperty.call(filters, key)) {
                    Object.values(values[key]).forEach((value) => {
                        filters[key].push?.(value);
                    });
                } else {
                    filters[key] = values[key];
                }
            });
        });

        return filters;
    }
}