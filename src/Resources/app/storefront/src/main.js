import CustomListingPlugin from "./listing.override.plugin";
import CustomListingSortingPlugin from "./listing-sorting.override.plugin";

PluginManager.override('Listing', CustomListingPlugin, '[data-listing]');
PluginManager.override('ListingSorting', CustomListingSortingPlugin, '[data-listing-sorting]');
