#! /bin/bash
curl -X PATCH \
     -d $1 \
     -H "Content-Type: application/json" \
     http://localhost:3000/dog
