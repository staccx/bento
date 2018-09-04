read -p "make sure you are in bento root before continuing..."
lerna ls 2>&1 | grep "@staccx" | while read name
do 
  path=$(dirname $(grep -lr "\"name\": \"$name\"" --include=package.json --exclude-dir=node_modules .))
  npm publish $path
done