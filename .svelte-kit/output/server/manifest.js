export const manifest = {
	appDir: "_app",
	appPath: "_app",
	assets: new Set([".nojekyll","CNAME","assets/pdf/NTNU_Intro.pdf","assets/pdf/Vieweg_DieKulturrevolutionInChina.pdf","assets/pdf/Vieweg_Oceanography_Trip_Report.pdf","assets/pdf/Vieweg_TrajectoryPrediction.pdf","assets/pdf/e11806443_Berechnung.pdf","assets/pdf/lab_kinematic_chains.pdf","favicon.svg"]),
	mimeTypes: {".pdf":"application/pdf",".svg":"image/svg+xml"},
	_: {
		entry: {"file":"_app/immutable/start-efecc82d.js","imports":["_app/immutable/start-efecc82d.js","_app/immutable/chunks/index-e1a266ff.js","_app/immutable/chunks/singletons-617ff9e8.js"],"stylesheets":[],"fonts":[]},
		nodes: [
			() => import('./nodes/0.js'),
			() => import('./nodes/1.js')
		],
		routes: [
			
		],
		matchers: async () => {
			
			return {  };
		}
	}
};
