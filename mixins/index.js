


export default {
	onLoad(){
		console.log("mixins load")
	},
	onShow(){
		console.log("mixins show")
	},
	data() {
		return {
			aa:"33",
			bb:"这是bb",
		}
	},
	methods: {
		a(){
			console.log("mixinFun");
		}
	}
}
