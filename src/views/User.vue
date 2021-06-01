<template>
	<div>
		<div>
			<table>
				<tr>
					<th>Name</th>
					<th>ID</th>
					<th>Pwd</th>
					<th>Email</th>
					<th>Date</th>
				</tr>
				<tr v-for='user in users' v-bind:key='user.id' @click="u=user">
					<td>{{user.name}}</td>
					<td>{{user.id}}</td>
					<td>{{user.pwd}}</td>
					<td>{{user.email}}</td>
					<td>{{user.date}}</td>
				</tr>
			</table>
		</div>
		<div>
			<blueBtn v-on:search-user="getUserList()" v-bind:callParentMethod="callParentMethod" v-bind:btnName="btnName"></blueBtn>
		</div>
		<div>
			<div>
				<label>Name</label>
				<input type="text" v-model="u.name" />
				<label>ID</label>
				<input type="text" v-model="u.id" />
			</div>
			<div>
				<label>Pwd</label>
				<input type="text" v-model="u.pwd" />
				<label>Email</label>
				<input type="text" v-model="u.email" />
			</div>
			<div>
				<label>Date</label>
				<input type="text" v-model="u.date" />
			</div>
		</div>
	</div>
</template>

<script>
import blueBtn from '../components/form/BlueBtn'

export default {
	name: "User",
	components: {
		'blueBtn': blueBtn
	},
	data: function () {
		return {
			name: '',
			callParentMethod: 'search-user',
			btnName: 'Search',
			u: {}
		}
	},
	created: function() {
		this.getUserList();
	},
	computed: {
		users: function() {
			//비동기 호출이라 데이터는 computed로 가져옴
			return this.$store.state.user.users;
		}
    },
	methods: {
		getUserList: function() {
			var param = {'name': this.name}
			//cors 문제를 회피하기 위해 vue.config.js에 proxy 서버 설정함
			this.users = this.$store.dispatch('user/getUserList', param)
		}
	}
}
</script>

<style scoped>
td {
	border: 1px solid black;
}

table {
	margin: auto;
}

div {
	border: 1px solid red;
	text-align: left;
}
</style>