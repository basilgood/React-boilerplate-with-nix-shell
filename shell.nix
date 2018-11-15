with import <nixpkgs> {};

let
  node = nodejs-8_x;
in

stdenv.mkDerivation rec {
  name = "todo-list";
  env = buildEnv { name = name; paths = buildInputs; };
  buildInputs = [
    node yarn
  ];
  shellHook = ''
    export PATH="$PWD/node_modules/.bin/:$PATH"

    echo "=> Yarn install"
    if [ -f "package.json" ]
    then
      yarn install
    else
      yarn init
    fi

    echo "=> Make src directory"
    if [ -d "src" ]
    then
      echo "=> src directory exists"
    else
      mkdir -p src
    fi

    echo "=> Create js file"
    if [ -f "src/app.js" ]
    then
      echo "=> app.js file exists"
    else
      echo "console.log('Hello world ... from Webpack')" > src/app.js
    fi

    echo "=> Create Webpack configuration file"
    if [ -f "webpack.config.js" ]
    then
      echo "webpack.config.js exists"
    else
      echo "var webpack = require('webpack');
            var path = require('path');
            var BUILD_DIR = path.join(__dirname, 'dist');
            var APP_DIR = path.join(__dirname, 'src');
            var config = {
              entry: APP_DIR + '/app.js',
              output: {
                path: BUILD_DIR,
                filename: 'app.bundle.js'
              }
            }
            module.exports = config;" > webpack.config.js
    fi
  '';
}
