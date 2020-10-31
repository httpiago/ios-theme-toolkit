# Contribution Guidelines

First of all, thanks for thinking of contributing to this project! 👏❤️

## Ways to Contribute

- Blog or tweet about the project
- Improve documentation
- Fix a bug
- Implement a new feature
- Discuss potential ways to improve the package
- Improve existing implementation, performance, etc.

## Bugs

In case you've encountered a bug, please make sure:

- You are using the [latest version](https://github.com/httpiago/ios-theme-toolkit/releases).
- You have read the [documentation](https://httpiago.github.io/ios-theme-toolkit/) first, and double-checked your implementation.
- In your issue description, please include:
  - What you expected to see, and what happened instead.
  - How you implemented the component (written \<Button ... >...\</Button> or screenshot).
  - Interesting logs in console.
  - All steps to reproduce the issue.

## Pull Request

Pull requests are welcome! Please keep the following in mind:

- This package uses the [Angular Commit Guidelines](https://github.com/angular/angular.js/blob/master/DEVELOPERS.md#-git-commit-guidelines) to create the changelog of new releases so try to use then.
- Simplicity is the best friend of the maintenance and performance, if you look all the components are a just stateless function, try to follow this pattern.
- To match the existing code styling, use `yarn run prettier` before committing code.
- Make sure the tests pass (`yarn npm test`). Your changes probably deserve new tests as well.
- Documentation for components is done with [.mdx files](https://github.com/mdx-js/mdx) and [JsDoc](http://usejsdoc.org).
