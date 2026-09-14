#!/bin/bash
# Load environment variables from .env.local if it exists
if [ -f .env.local ]; then
  # export variables from .env.local
  while IFS='=' read -r key value; do
    # Remove quotes and comments
    value=$(echo "$value" | sed -e 's/^"//' -e 's/"$//')
    if [[ ! -z "$key" && ! "$key" =~ ^# ]]; then
      export "$key=$value"
    fi
  done < .env.local
fi

export TOKEN="${SANITY_API_WRITE_TOKEN}"
export PROJECT_ID="${NEXT_PUBLIC_SANITY_PROJECT_ID:-9oux6so5}"
export DATASET="${NEXT_PUBLIC_SANITY_DATASET:-production}"

if [ -z "$TOKEN" ]; then
  echo "Error: SANITY_API_WRITE_TOKEN is not set in .env.local"
  exit 1
fi

for img in public/images/event/*.jpg; do
  echo "Uploading $img"
  filename=$(basename -- "$img")
  
  curl -s -X POST \
    "https://$PROJECT_ID.api.sanity.io/v2024-01-01/assets/images/$DATASET?filename=$filename" \
    -H "Authorization: Bearer $TOKEN" \
    -H "Content-Type: image/jpeg" \
    --data-binary "@$img" | grep -o '"_id":"image-[^"]*"'
done
