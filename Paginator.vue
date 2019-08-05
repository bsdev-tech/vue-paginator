<template>
    <div class="panel">
        <div class="body">
            <h3 v-if="name">{{name}}</h3>
            <single v-for="(single, index) in currentPageCollection" :key="index" :index="single.id" :single="single" :viewable="viewable" />
            <div v-if="paginateable" class="text-center">
                <div>Showing: <span>Page {{currentPage}} of </span><span> {{totalPages}} Pages </span><span> containg {{collection.length}} total items</span></div>
                <div><span @click="prevCourses" class="btn btn-primary">Prev.</span><span @click="nextCourses" class="btn btn-success">Next</span></div>
            </div>
            <div class="row align-items-center m-t-20">
                <label class="col-sm-4" for="items_length">Items Length</label>
                <div class="col-sm-8">
                    <input min="1" :max="collection.length" v-model="totalCoursesPerPage" type="number" class="form-control" placeholder="Number of Items Per Page">
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import Single from './Single'
export default{
    components:{Single},
    data(){
        return{
            totalCoursesPerPage:2,
            currentPage:1,
            i_start:0,
        }
    },
    props:[
        'collection',
        'viewable',
        'name'
    ],
    computed:{
        paginateable(){
            return this.collection.length/this.totalCoursesPerPage > 1
        },
        currentPageCollection:{
            get:function(){
                return this.collection.slice(this.start,this.stop)
            },
        },
        start:{
            get:function(){
                return this.i_start;
            },
            set:function(param){
                if(param < this.collection.length)
                    return this.i_start =+ param
            }
        },
        stop:{
            get:function(){
                return this.start + parseInt(this.totalCoursesPerPage);
            },
        },
        totalPages(){
            if(this.collection.length > 1){
                if(! this.collection.length % this.totalCoursesPerPage){
                    return parseInt(this.collection.length / this.totalCoursesPerPage)
                }else{
                    return parseInt(this.collection.length / this.totalCoursesPerPage) + 1
                }
            }
        }
    },
    methods:{
        nextCourses(){
            if(this.stop < this.collection.length){
                this.currentPage++;
                //console.log('Entered Start at ' + this.start + ' and end at ' + this.stop)
                this.start = this.stop;
                //console.log('Leaving Start at ' + this.start + ' and end at ' + this.stop)
            }
        },
        prevCourses(){
            if(this.start > this.totalCoursesPerPage){
                this.start = this.start - this.totalCoursesPerPage;
                //console.log('Going Back Start at ' + this.start + ' and end at ' + this.stop)
                this.currentPage--;
            }else{
                this.start = 0;
                //console.log('Going Back Limit Start at ' + this.start + ' and end at ' + this.stop)
                this.currentPage = 1;
            }
        }
    }
}
</script>
