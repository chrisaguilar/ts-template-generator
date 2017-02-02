// clientTestIndex.ts - Dynamically requires test files in <rootDir>/src/client/
// tslint:disable:no-var-keyword

// I don't really know what's happening here, but according to my research, it's
// the correct thing to do. This is supposed to dynamically require new test
// files added to <rootDir>/src/client/, and, as far as I can tell, it does, but
// I don't know how. It's not important though, because it works.

var ctx = (require as any).context('../../src/client', true, /.+_test\.tsx?$/);

ctx.keys().forEach(function (file: any) {
  try {
    ctx(file);
  } catch (err) {
    console.error('[ERROR] WITH TEST FILE: ', file);
    console.error(err);
  }
});
