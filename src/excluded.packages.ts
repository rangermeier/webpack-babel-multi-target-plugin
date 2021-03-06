export const EXCLUDED_PACKAGES: (string | RegExp)[] = [

    // webpack-dev-server and dependencies
    /node_modules\/ansi-html/,
    /node_modules\/html-entities/,
    /node_modules\/loglevel/,
    /node_modules\/punycode/,
    /node_modules\/querystring-es3/,
    /node_modules\/sockjs-client/,
    /node_modules\/strip-ansi/,
    /node_modules\/url/,

    /node_modules\/regenerator-runtime/,

    // known misbehaving/already es5 packages
    /node_modules\/angular-2-local-storage/,
    /node_modules\/base64-js/,
    /node_modules\/buffer/, // prevents Cannot read property 'TYPED_ARRAY_SUPPORT' of undefined
    /node_modules\/date-fns/,
    /node_modules\/jquery/,
    /node_modules\/moment/,

];

// specific packages that aren't detected automatically, and are already es5
export const KNOWN_EXCLUDED = [
    /node_modules\/jsrsasign/,
];

export const STANDARD_EXCLUDED = [

    // webpack add-ins and webpack loaders
    /node_modules\/webpack/,
    /node_modules\/([\w-_]+)-loader/, // required for css-loader, to-string-loader,

    // webpack dev server
    /node_modules\/webpack-dev-server/,
    /node_modules\/\(webpack\)-dev-server/,

    // polyfills
    /node_modules\/core-js/,
    /node_modules\/regenerator-runtime/,

];
