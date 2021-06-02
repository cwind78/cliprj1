<template>
	<div>
		<div class="modal__background">
			<div class="modal__box">
				<div>
					{{msg}}
				</div>
				<div>
					<button @click="ok">Ok</button>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	props: ['msg'],
	methods: {
		ok: function() {
			this.$parent.openModal()
		}
	}
}
</script>

<style>
/* 모달창의 배경을 만든다 */
.modal__background{
	position: fixed;
	top:0; left: 0; bottom: 0; right: 0;
	background: rgba(0, 0, 0, 0.8);
}
 
/* 모달창 영역을 꾸민다 */
.modal__box{
	position: absolute;
	top: calc(50vh - 100px); left: calc(50vw - 200px);
	background-color: white;
	display: flex; justify-content: center;
	align-items: center;
	border-radius: 10px;
	width: 400px;
	height: 200px;
}
</style>