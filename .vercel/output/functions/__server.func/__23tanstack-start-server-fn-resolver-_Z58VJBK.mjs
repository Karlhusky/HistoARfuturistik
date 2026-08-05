//#region node_modules/.nitro/vite/services/ssr/assets/__23tanstack-start-server-fn-resolver-_Z58VJBK.js
var manifest = { "bf3044906b458a1018dcfed1b9cfd31bcf6e07ed7c019bdc057b2abb9f369330": {
	functionName: "askHistoAI_createServerFn_handler",
	importer: () => import("./_ssr/histo-ai-DXWleq85.mjs")
} };
async function getServerFnById(id, access) {
	const serverFnInfo = manifest[id];
	if (!serverFnInfo) throw new Error("Server function info not found for " + id);
	const fnModule = serverFnInfo.module ?? await serverFnInfo.importer();
	if (!fnModule) throw new Error("Server function module not resolved for " + id);
	const action = fnModule[serverFnInfo.functionName];
	if (!action) throw new Error("Server function module export not resolved for serverFn ID: " + id);
	return action;
}
//#endregion
export { getServerFnById as t };
