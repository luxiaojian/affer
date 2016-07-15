.PHONY: dist

dev:
	@npm run dev

dist:
	@npm run dist

deploy:
	@npm run deploy

clean:
	@rm -rf ./index.html;
	@rm -rf dist;
