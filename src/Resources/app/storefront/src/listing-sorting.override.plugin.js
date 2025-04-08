import ListingSortingPlugin from "src/plugin/listing/listing-sorting.plugin"

export default class CustomListingSortingPlugin extends ListingSortingPlugin {
    /** @type {Set<CustomListingSortingPlugin>} */
    static instances = new Set()

    init() {
        super.init()

        const searchParams = new URL(window.location.href).searchParams
        if (searchParams.has("order")) this.setSorting(searchParams.get("order"))

        CustomListingSortingPlugin.instances.add(this)
    }

    /** @param {string} newSorting */
    setSorting(newSorting) {
        this.select.value = newSorting
        this.options.sorting = newSorting
    }

    onChangeSorting(event) {
        for (const instance of CustomListingSortingPlugin.instances) {
            instance.setSorting(event.target.value)
        }

        super.onChangeSorting(event)
    }
}