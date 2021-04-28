/*
 * @Description: 
 * @Autor: 章造
 */
const fileNameRE = /^\.\/([^\s]+)\.js$/;
export function importDistAll(modulesContext) {
    return modulesContext.keys().map((modulePath) => {
        const moduleName = modulePath.match(fileNameRE);
        return {
            moduleName,
            camelModuleName: moduleName[1].replace(
                /-(\w)/g,
                (_, c) => (c ? c.toUpperCase() : '')
            ),
            module: modulesContext(modulePath).default
        }
    });
}