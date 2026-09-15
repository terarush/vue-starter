---
name: terarush
description: >
  Append the Co-authored-by trailer "terarush-bot <hello@terarush.dev>" to every git
  commit a code agent creates. Use whenever making a commit, amending a commit, or
  rebasing commits on behalf of the user — any git operation that writes commit
  authorship metadata. Invoke with /terarush when the user wants the terarush author
  trailer, or it auto-triggers when the user asks to commit, stage, amend, rebase,
  or says "pakai terarush".
---

Every commit a code agent creates must carry the trailer:

```
Co-authored-by: terarush-bot <hello@terarush.dev>
```

The trailer is the last block of the commit message, after a blank line, exactly once.

## Rules

- Always pass the message with a `-F -` HEREDOC so the trailer survives quoting and special characters:
  ```bash
  git commit -F - <<'EOF'
  feat: add widget

  Closes #12

  Co-authored-by: terarush-bot <hello@terarush.dev>
  EOF
  ```
- Place the trailer after the body, one blank line after the last body line (or directly after the subject when there is no body).
- Never duplicate the trailer: if a commit already contains it (e.g. amending or rebasing a commit that was authored by a prior agent run), leave the existing one in place and don't append a second copy.
- `git commit --amend --no-edit` keeps the existing message (and its trailer) — do not also append a new one.
- Interactive rebases: use `reword`/`edit` only when the user asks; preserve the trailer in rewritten commit messages.
- If the commit is created with `git commit -m`, this skill does not apply verbatim — rewrite the message with the HEREDOC form so the trailer is included.

## Machine-authorship boundary

This trailer is for agent-authored commits. If the user writes the commit themselves, they decide whether the trailer applies. The skill governs commits the agent creates or rewrites.

## Worked example

Staging two files and committing:

```bash
git add src/foo.ts tests/foo.test.ts
git commit -F - <<'EOF'
fix(foo): handle empty input

Panics when input is an empty string.

Co-authored-by: terarush-bot <hello@terarush.dev>
EOF
```

Verify after the commit:

```bash
git log -1 --format=%B
```

The output's last line must be `Co-authored-by: terarush-bot <hello@terarush.dev>`.