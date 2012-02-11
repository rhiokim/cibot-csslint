init:
	git submodule update --init
	cp -R ./modules/csslint/release/npm/lib/csslint-node.js ./lib/

build: init

test:

.PHONY: init build test
