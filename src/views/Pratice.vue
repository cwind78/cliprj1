<template>
	<div>
		<h1>Pratice</h1>
		<div>
			<table>
				<tr v-for="n in 5" v-bind:key="n">
					<td @click="reserve(n, m, $event)" v-for="m in 5" v-bind:key="m"></td>
				</tr>
			</table>
		</div>
		<div>
			<button v-if="check" @click="checkArray()">Check</button>
			<button v-if="check" @click="initArray()">Retry</button>
			<blueBtn v-on:init-btn="initArray()" v-bind:callParentMethod="callParentMethod" v-bind:btnName="btnName"></blueBtn>
		</div>
	</div>
</template>

<script>
import blueBtn from '../components/form/BlueBtn'

export default {
	name: "Pratice",
	components: {
		'blueBtn': blueBtn
	},
	data: function() {
		return {
			tr: [],
			td: [],
			check: false,
			callParentMethod: 'init-btn',
			btnName: 'Retry'
		}
	},
	methods: {
		reserve : function(n, m, event) {
			// console.log('n='+n+', m='+m+', this.tr.length='+this.tr.length+', this.td.length='+this.td.length)
			// console.log(event.target.classList.contains('td-color'))
			
			if (event.target.classList.contains('td-color')) {
				event.target.classList.remove('td-color')
				console.log(this.td[this.tr.indexOf(n)].length)
				if (this.td[this.tr.indexOf(n)].length <= 1) {
					this.td.splice(this.tr.indexOf(n), 1)
					this.tr.splice(this.tr.indexOf(n), 1)
				} else {
					this.td[this.tr.indexOf(n)].splice(this.td[this.tr.indexOf(n)].indexOf(m), 1)
				}
			} else {
				event.target.classList.add('td-color')

				if (this.tr.length === 0) {
					this.tr.push(n)
					this.td.push([m])
				} else {
					if (this.tr.indexOf(n) === -1) {
						this.tr.push(n)
						this.td.push([m])
					} else {
						if (this.td[this.tr.indexOf(n)].indexOf(m) === -1) {
							this.td[this.tr.indexOf(n)].push(m)
						}
					}
				}
			}
		},
		checkArray: function() {
			console.log(this.tr.toString());
			console.log(this.td.toString());
		},
		initArray: function() {
			// console.log("call me")
			this.tr = [];
			this.td = [];

			var tds = document.querySelectorAll(".td-color")
			// console.log(tds.length)
			for (var i=0; i<tds.length; i++) {
				tds[i].classList.remove("td-color")
			}
		}
	}

}
</script>
<style>
td {
	border: 1px solid black;
	width: 30px;
	height: 30px;
}

.td-color {
	background-color: yellow;
}

div {
	border: 1px solid red;
}

table {
	margin: auto;
}
</style>