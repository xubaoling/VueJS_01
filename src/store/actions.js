//import 数据 from ''	这里面可以获取数据

export default{
	showHeader:({commit})=>{
		commit('showHeader')
	},
	hideHeader:({commit})=>{
		commit("hideHeader")
	}
}
