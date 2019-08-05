<template>
    <div class="">
        <div class="bg-blue m-b-20 p-b-10 p-t-10 p-l-20 b-rad-5">

            <div class="row align-items-end">
                <div class="col" v-for="(item, index) in viewable_items" :key="index">{{item}}</div>
                <span class="badge badge-secondary pull-left">{{index}}</span>
            </div>
            <div v-if="!isIterable">{{single}}
            </div>
        </div>
    </div>
</template>
<script>
export default {
    props:[
        'single',
        'index',
        'viewable',
    ],
    data(){
        return{
            part:[],
            isIterable:false,
        }
    },
    computed:{
        viewable_items(){
            if(Array.isArray(this.viewable)){
                this.viewable.forEach((element, key) => {
                    this.part[key] = this.single[element];
                });
                this.isIterable = true;
                return this.part;
            }
        }
    }
}
</script>
