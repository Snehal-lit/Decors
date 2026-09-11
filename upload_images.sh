#!/bin/bash
export TOKEN="skcQ0PpgnULlyyLq6tTvaaZZasPDew33gSmGCzP5Wv1xVXmnY5WTaoacAfm2LsE7fHN8iKC337Jdl0ocFUd5nI8BmwIm6Aqx8kUSXhu6ebjHPS774s7Eo27LVeZl3G1OpDm166hidLmD1dwrhHbwkrDNOkUNsmJLtLW21vGjjDDzyIQqlrYl"
export PROJECT_ID="9oux6so5"
export DATASET="production"

for img in public/images/event/*.jpg; do
  echo "Uploading $img"
  filename=$(basename -- "$img")
  
  curl -s -X POST \
    "https://$PROJECT_ID.api.sanity.io/v2024-01-01/assets/images/$DATASET?filename=$filename" \
    -H "Authorization: Bearer $TOKEN" \
    -H "Content-Type: image/jpeg" \
    --data-binary "@$img" | grep -o '"_id":"image-[^"]*"'
done
