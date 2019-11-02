<template>
    <div>
        <input v-bind="$attrs" :value="value" @input="change" />
    </div>
</template>

<script>
export default {
    props:{
        value:String
    },
    methods:{
        change(e){
            this.$emit('input',e.target.value)

            this.$parent.$emit('validate')
        }
    }
}
</script>