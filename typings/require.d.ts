// TypeScript knows the require keyword only as part of the import statement.
// TypeScript handles such import in a very smart way. It insists on locating that
// module and expects it to have typing included.
// Hence, sometimes it's useful to emit the JS require statement without TS compiler nosing in.
// Good example of this are the Webpack's loaders. We need requires for external resources
// to simply end up in the generated JS code without any questions because they will be handled
// by Webpack.

declare function require(name: string): any

