<template>
    <div>
        <heading class="mb-6">Routes</heading>

        <div class="flex justify-between">
            <div class="relative h-9 flex items-center mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" aria-labelledby="search" role="presentation" class="fill-current absolute ml-3 text-70">
                    <path fill-rule="nonzero" d="M14.32 12.906l5.387 5.387a1 1 0 0 1-1.414 1.414l-5.387-5.387a8 8 0 1 1 1.414-1.414zM8 14A6 6 0 1 0 8 2a6 6 0 0 0 0 12z"></path>
                </svg>
                <input
                    v-model="search"
                    @keyup="handleInput"
                    placeholder="Search"
                    class="appearance-none form-control form-input w-search pl-search"
                    type="search"
                >
            </div>
            <span class="ml-aut0 mb-6">
                <button class="btn btn-default btn-primary" @click="cacheRoutes">Cache Routes</button>
                <button class="btn btn-default btn-danger" @click="clearRoutes">Clear Route Cache</button>
            </span>
        </div>

        <div class="card rounded overflow-hidden shadow-lg">

            <table class="table w-full">
                <thead>
                    <tr>
                        <th class="text-left">Domain</th>
                        <th class="text-left">URI</th>
                        <th class="text-left">Name</th>
                        <th class="text-left">Action</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="route in routes"
                        v-if="route.show"
                        :key="route.uri"
                    >
                        <td>{{ route.domain }}</td>
                        <td>
                            <p class="text-90">{{ route.uri }}</p>
                            <p class="text-xs mt-1 text-80">{{ route.method }}</p>
                        </td>
                        <td>{{ route.name }}</td>
                        <td>{{ route.action }}</td>
                    </tr>
                </tbody>
            </table>
            
        </div>
    </div>
</template>

<script>
export default {
    data: () => ({
        routes: [],
        search: null,
    }),

    mounted() {
        axios.get('/nova-vendor/nova-routes')
            .then(({data}) => {
                this.routes = data;
            });
    },

    methods: {
        cacheRoutes() {
            axios.post('/nova-vendor/nova-routes')
                .then(({data}) => {
                    this.$toasted.show(data, { type: 'success'});
                })
                .catch(({response}) => {
                    this.$toasted.show(response.data, { type: 'error'});
                })
        },

        clearRoutes() {
            axios.delete('/nova-vendor/nova-routes')
                .then(({data}) => {
                    this.$toasted.show(data, { type: 'success'});
                })
                .catch(({response}) => {
                    this.$toasted.show(response.data, { type: 'error'});
                })
        },

        filterRoutes() {
            let searchValue = this.search.toLowerCase();

            this.routes.map(route => {
                route['show'] = (route.domain && route.domain.toLowerCase().includes(searchValue)) ||
                    (route.uri && route.uri.toLowerCase().includes(searchValue)) ||
                    (route.method && route.method.toLowerCase().includes(searchValue)) ||
                    (route.name && route.name.toLowerCase().includes(searchValue)) ||
                    (route.action && route.action.toLowerCase().includes(searchValue));
            });
        },

        handleInput() {
            this.debounceInput(() => {
                this.filterRoutes()
            });
        },

        debounceInput: _.debounce(callback => callback(), 500),
    }
}
</script>

<style scoped>
.table th {
    padding: 1.1rem 1.1rem .8rem 1.1rem;
}
</style>
