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

  '';
}
