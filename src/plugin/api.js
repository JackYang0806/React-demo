import apis from '@/service/api/index'
import request from '@/utils/request'

class MakeApi{
	constructor() {
		this.api = {}
		this._makeConfigs(apis)
	}

	_makeConfigs(apis) {
		const apiConfigs = Object.keys(apis)
		apiConfigs.forEach(apiConfig => {
			const namespace = apiConfig
			this._makeConfig(namespace, apis[apiConfig])
		})
	}

	_makeConfig(namespace,api) {
		console.log(api)
		api.forEach(item => {
			Object.defineProperty(this.api, `${namespace}/${item.name}`, {
				value(defaultParams, outerParams) {
					// const params = Object.assign(defaultParams, outerParams)
					return request(defaultParams)
				}
			})
		})
		
	}
}

export default new MakeApi()['api']