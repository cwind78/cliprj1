// import vue from 'vue'
import axios from 'axios'
import Constant from '../../constant'

export default {
	namespaced: true, //이 부분이 모듈임을 명시하는 부분임
	state: {
		users: [], //회원목록
		user: [] //특정 아이디의 회원
	},
	getters: { //computed와 유사
		getUserCount(state) {
			return state.users.length
		}
	},
	mutations: {
		fillUsers (state, payload) {
			state.users = payload;
		}
	},
	actions: {
		getUserList(store, payload) { //회원 목록 조회
			axios.get(Constant.BASE_URL + "user/" + payload.name)
				.then((response) => {
					if (response.data == null) {
						alert("조회 결과가 없습니다")
					} else {
						store.commit("fillUsers", response.data)
					}
				})
				.catch(function(error) {
					alert("조회 중 오류가 발생하였습니다"+error.response)
				})
		}
	}
}