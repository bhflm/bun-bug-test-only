# bun-bug-test-only

## Showcase of current bug in Bun test runner methods

Current finding shows that bun does not respect the .only method for running exclusively one test if it has more tests above it.

[bug](https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExMmRhcXdmMzMwbWxlcXlweGhkZGNzaG5jb3gzeDliNHRkYXhuMnlodSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/URK24fgsBEhwTYL2OD/giphy.gif)

In order to reproduce the bug please run:

```bash
bun install
```

Place a `.only` either on the "Second", or "Third" test.

To run the test suite:

```bash
bun test
```

check that console output reflects that tests above it are also run


This project was created using `bun init` in bun v1.0.15. [Bun](https://bun.sh) is a fast all-in-one JavaScript runtime.