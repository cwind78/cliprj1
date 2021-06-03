<template>
	<div>
		<div>
			총 {{usersCnt}}건
		</div>
		<div>
			<combo v-bind:data='codes' v-on:setCode='setCode'></combo>
			<input type="text" v-model="code" />
		</div>
		<div>
			<table>
				<tr>
					<th>Name</th>
					<th>ID</th>
					<th>Pwd</th>
					<th>Email</th>
					<th>Date</th>
				</tr>
				<tr v-bind:class='{"odd-row": index%2==0, "over-row": index==overIdx, "click-row": index==clickIdx}' v-for='(user, index) in users' v-bind:key='user.id' @click="u=user; clickIdx=index" @mouseover="overIdx=index">
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
		<div>
			<modal v-if="isModal" v-bind:msg="modalMsg">
			</modal>
			<button @click="openModal">Modal</button>
		</div>
	</div>
</template>

<script>
import blueBtn from '../components/form/BlueBtn'
import Modal from '../components/form/Modal'
import Combo from '../components/form/Combo'

export default {
	name: "User",
	components: {
		'blueBtn': blueBtn,
		'modal': Modal,
		'combo': Combo
	},
	data: function () {
		return {
			name: '',
			callParentMethod: 'search-user',
			btnName: 'Search',
			u: {},
			isModal: false,
			modalMsg: 'Test alert',
			overIdx: -1,
			clickIdx: -1,
			codes: [{'code': '1', 'name': 'one'}, {'code': '2', 'name': 'two'}],
			code: ''
		}
	},
	created: function() {
		this.getUserList();
	},
	computed: {
		users: function() {
			//비동기 호출이라 데이터는 computed로 가져옴
			return this.$store.state.user.users
		},
		usersCnt: function() {
			console.log(this.$store.getters.getUserCount)
			//return this.$store.getters.getUserCount
			return this.$store.state.user.users.length
		}
    },
	methods: {
		getUserList: function() {
			var param = {'name': this.name}
			//cors 문제를 회피하기 위해 vue.config.js에 proxy 서버 설정함
			this.users = this.$store.dispatch('user/getUserList', param)
		},
		openModal: function() {
			this.isModal = !this.isModal
		},
		setCode: function(val) {
			this.code = val
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

.odd-row {
	background-color: #e5e5e5;
}

.over-row {
	background-color: yellow;
}

.click-row {
	background-color: blue;
}
</style>