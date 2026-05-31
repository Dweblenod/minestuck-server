#!/usr/bin/env bash
set -euo pipefail

while IFS= read -r line || [ -n "${line:-}" ]; do
  # trim surrounding whitespace
  url="$(echo "$line" | sed -e 's/^[[:space:]]*//' -e 's/[[:space:]]*$//')"

  # skip empty lines and comments
  if [ -z "$url" ] || [[ "$url" =~ ^# ]]; then
    continue
  fi

  if echo "$url" | grep -qi 'modrinth\.'; then
    curl -L --fail -O -- "$url"
  elif echo "$url" | grep -qi 'curseforge\.'; then
	# use the full URL as the filename but make it filesystem-safe (no path separators)
    raw="$url"
    # encode slash as %2F and keep other URL chars, replace anything else with _
    safe="$(printf '%s' "$raw" | sed -E 's/\//%2F/g; s/[^A-Za-z0-9._+\=\@:%?%-]/_/g')"
    # collapse repeated underscores
    safe="$(printf '%s' "$safe" | sed -E 's/_+/_/g')"
    file="${safe}.url"
    # ensure unique if exact filename already exists
    if [ -e "$file" ]; then
      i=1
      base="${file%.url}"
      while [ -e "${base}_$i.url" ]; do i=$((i+1)); done
      file="${base}_$i.url"
    fi
    cat > "$file" <<EOF
[InternetShortcut]
URL=$url
EOF
    echo "Created URL file: $file"
  else
    # unknown host: skip
    continue
  fi

  sleep 5
done <"mods"
