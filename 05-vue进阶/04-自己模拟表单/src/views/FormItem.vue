<template>
    <div>
        <label>{{label}}</label>
       <slot></slot>
       <p v-if="errorMessage">{{errorMessage}}</p>
    </div>
</template>

<script>
import Schema from 'async-validator'
export default {
    inject:['form'],
    data(){
        return{
            errorMessage:""
        }
    },
    props:{
        label:String,
        prop:String
    },
    mounted(){
        this.$on('validate',this.validate)
    },
    methods:{
        validate(){
            const value = this.form.model[this.prop]
            const rules = this.form.rules[this.prop]
            const desc = {[this.prop]: rules};
            const schema = new Schema(desc);
          // return的是校验结果的Promise
          return schema.validate({[this.prop]: value}, errors => {
              if (errors) {
                  this.errorMessage = errors[0].message;
              }else {
                  this.errorMessage = ''
              }
          })

        }
    }
}
</script>