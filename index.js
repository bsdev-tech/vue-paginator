import BsdevPaginator from './Paginator'
export default {
    install:function(Vue,iterable){
        Vue.component('bsdev-paginator', BsdevPaginator);
        Vue.use(BsdevPaginator)
    }
}
