<template>
	<div>
		<button v-bind:class="{active: isActive}" @click="emitFunc()" @mouseover="colorChange()" @mouseout="colorChange()">{{btnName}}</button>
	</div>
</template>

<script>
export default {
	name: 'BlueBtn',
	props: ['callParentMethod', 'btnName'],
	data: function() {
		return {
			isActive: false
		}
	},
	methods: {
		colorChange: function() {
			// console.log(this.callParentMethod)
			// console.log(this.btnName)
			// console.log(this.isActive)
			this.isActive = !this.isActive
		},
		emitFunc: function() {
			this.$emit(this.callParentMethod)
		}
	}
}
</script>

<style scoped>
.active {
	background-color: skyblue;
	border: 0px;
	color: blue;
	font-weight: bold;
}
</style>