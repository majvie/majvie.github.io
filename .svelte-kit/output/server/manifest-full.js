export const manifest = {
	appDir: "_app",
	appPath: "_app",
	assets: new Set([".DS_Store",".nojekyll","CNAME","assets/.DS_Store","assets/pdf/Vieweg_DieKulturrevolutionInChina.pdf","assets/pdf/Vieweg_TrajectoryPrediction.pdf","assets/pdf/e11806443_Berechnung.pdf","assets/pdf/lab_kinematic_chains.pdf","favicon.svg"]),
	mimeTypes: {".pdf":"application/pdf",".svg":"image/svg+xml"},
	_: {
		entry: {"file":"_app/immutable/start-9daf84bb.js","imports":["_app/immutable/start-9daf84bb.js","_app/immutable/chunks/index-e1a266ff.js","_app/immutable/chunks/singletons-617ff9e8.js"],"stylesheets":[],"fonts":[]},
		nodes: [
			() => import('./nodes/0.js'),
			() => import('./nodes/1.js'),
			() => import('./nodes/2.js'),
			() => import('./nodes/3.js'),
			() => import('./nodes/4.js'),
			() => import('./nodes/5.js')
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0], errors: [1], leaf: 2 },
				endpoint: null
			},
			{
				id: "/projects",
				pattern: /^\/projects\/?$/,
				params: [],
				page: { layouts: [0], errors: [1], leaf: 3 },
				endpoint: null
			},
			{
				id: "/resume",
				pattern: /^\/resume\/?$/,
				params: [],
				page: { layouts: [0], errors: [1], leaf: 4 },
				endpoint: null
			},
			{
				id: "/writing",
				pattern: /^\/writing\/?$/,
				params: [],
				page: { layouts: [0], errors: [1], leaf: 5 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
};