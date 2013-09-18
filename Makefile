.PHONY: all

all:
	@grunt
	@cp -r release/* publish
	@cd publish; git add --all; git commit -m "New Iteration"; git push origin gh-pages

