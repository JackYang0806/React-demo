/*
 * @Description: 
 * @Autor: cheung
 */
import { importDistAll } from '@/utils/common.js'

const apiModules = importDistAll(
    require.context('./module/', false, /\.js$/)
);

const configs = {}
apiModules.forEach(({camelModuleName, module}) => {
    configs[camelModuleName] = module;
});

export default configs