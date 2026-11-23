# Warning Label for Humans: One Line, Big Laugh — make.fun Entry

[![make.fun bounty](https://make.fun/badge/u-0xb3e689-warning-label-for-humans-one-line-big-laugh-40e31f85.svg)](https://make.fun/bounty/u-0xb3e689-warning-label-for-humans-one-line-big-laugh-40e31f85)
[![make.fun rank](https://make.fun/badge/u-0xb3e689-warning-label-for-humans-one-line-big-laugh-40e31f85/0xrifai/makefun-warning-label-for-humans-20261124/rank.svg)](https://make.fun/bounty/u-0xb3e689-warning-label-for-humans-one-line-big-laugh-40e31f85)
[![make.fun reward](https://make.fun/badge/u-0xb3e689-warning-label-for-humans-one-line-big-laugh-40e31f85/0xrifai/makefun-warning-label-for-humans-20261124/reward.svg)](https://make.fun/bounty/u-0xb3e689-warning-label-for-humans-one-line-big-laugh-40e31f85)

Entry for the [Warning Label for Humans: One Line, Big Laugh](https://make.fun/bounty/u-0xb3e689-warning-label-for-humans-one-line-big-laugh-40e31f85) bounty on [make.fun](https://make.fun).

## What it does

`main.ts` writes exactly one single-line safety warning label for humans to
`/output/entry.txt`. The line is a fixed string baked into the program, so
the output is byte-identical on every run: one line, no trailing newline,
139 characters — inside the 160-character limit.

## The line

> CAUTION: This human will insist they are five minutes away while still in bed, wearing no shoes, and googling whether they even need to go.

Six candidates were drafted against the judge criteria (a real warning-label
form, a laugh that lands in one read, true about people in general, one idea
only, twist in the last few words). This one won: "five minutes away" is a
lie almost every human has told, the label rhythm ("CAUTION: This human
will…") reads like a real printed warning, and the turn arrives at the very
end — still in bed, no shoes on, already googling whether the trip is even
necessary. The other candidates leaned on a second idea (screenshots,
apologies), a list of three separate lies, or a twist that arrived
mid-sentence instead of in the final words.

## How to run

Requires Node 22 or later. No dependencies to install.

```bash
node main.ts
cat /output/entry.txt
```

## How it works

- The line is validated before writing: non-empty, at most 160 characters
  (and 160 UTF-8 bytes), a single line, and no leading or trailing
  whitespace.
- `/output` is created with `mkdirSync(..., { recursive: true })` if it
  does not already exist.
- The file is written with `writeFileSync` and plain UTF-8, deterministically.
- Verified locally: two runs produce byte-identical output
  (sha256 `569f53d388bca0c91c857a258957fa271c993de0f456b88d8136f0bba19eb97d`),
  139 characters, no trailing newline.
