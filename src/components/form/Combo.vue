<template>
	<div>
		<select v-model='val' @change="sendVal">
			<option v-for="d in data" v-bind:key='d.code' v-bind:value='d.code'>{{d.name}}</option>
		</select>
	</div>
</template>

<script>
export default {
	name: 'Combo',
	props: ['data'],
	data: function() {
		return {
			val: ''
		}
	},
	created: function() {
		this.val = this.code
	},
	methods: {
		sendVal: function() {
			console.log(this.val)
			this.$emit('setCode', this.val)
		}
	}
}
</script>