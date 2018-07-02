const shelljs = require('shelljs');
const program = require('commander');

const pages = {
 // configurator: './src/configuration/index',
 as: './src/index'
};

function buildPage(buildPages, cb) {
 let build = [];
 const splitPages = String(buildPages).split(',');
 splitPages.forEach((pageName, id) => {
   console.log(id);
   if (pageName === 'all') {
     build = Object.keys(pages);
   } else if (pages[pageName] !== undefined) {
     build.push(pageName);
   }
 });

 const uniquebuild = [...new Set(build)];
 console.log(uniquebuild);
 for (const i in uniquebuild) {
   const webpackConfig = 'webpack -p --config config/webpack.dev.js --progress --colors --display-cached --bail';
   shelljs.exec(`cross-env NODE_ENV=production BUNDLE=${build[i]} ${webpackConfig}`, cb);
 }
}

program
 .description('Independent page bundling system.')
 .option('-b, --build <all>', 'Pass all for complete build. e.g. "node ./config/bundle_page -b all"', pageArray)
 .parse(process.argv);

function pageArray(val) {
 return val.split(',');
}

buildPage(program.build, (error, stdout, strerr) => {
 console.log(error);
 console.log(stdout);
 console.log(strerr);
});