workflow "New workflow" {
  on = "push"
  resolves = ["Test code"]
}

action "Test code" {
  uses = "actions/npm@e7aaefed7c9f2e83d493ff810f17fa5ccd7ed437"
  runs = "npm run test"
}
