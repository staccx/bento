#!/bin/bash
#testcomment
rm -f installdev.txt install.txt

soypkg="/Users/torgeir/projects/bento/packages/internal/soy/package.json"

doit () {
    while read dep; do 
        echo $dep | grep -q "^@.*/" && dep=$(echo $dep | cut -f1-2 -d"/")
        echo $dep | grep -q "^[a-z].*/" && dep=$(echo $dep | cut -f1 -d"/")

        if ! grep -q "\"$dep\": \".*\"" package.json; then
            if grep -q \"$dep\" $soypkg; then
                echo -n "$dep@$(grep \"$dep\" $soypkg | cut -f2 -d":" | tr -d '", ') " 
            else
                echo "WARNING: $dep missing from package.json and is not in soy" >&2
                echo -n "$dep "
            fi
        fi
    done
}

grep -hr --include=*.js --exclude-dir=coverage --exclude-dir=node_modules --exclude-dir=dist --exclude-dir=public --exclude-dir=build --exclude-dir=src 'import.*from.*"[a-z@]' . | rev | awk '{print $1}' | rev | tr -d '"'| sort | uniq | doit >> installdev.txt
grep -hr --include=*.js --exclude-dir=coverage --exclude-dir=node_modules --exclude-dir=dist --exclude-dir=public --exclude-dir=build --exclude-dir=src 'require("[a-z@]' . | rev | cut -f1 -d" " | rev | cut -f2 -d'"' | sort | uniq | doit >> installdev.txt
grep -hr --include=*.js --exclude-dir=generated 'import.*from.*"[a-z@]' src/ | rev | awk '{print $1}' | rev | tr -d '"'| sort | uniq | doit >> install.txt
grep -hr --include=*.js --exclude-dir=generated 'require(.*"[a-z@]' src/ | rev | cut -f1 -d" " | rev | cut -f2 -d'"' | sort | uniq | doit >> install.txt

read -p "continue..."
yarn add $(cat install.txt) && 
yarn add -D $(cat installdev.txt) && 
yarn remove @staccx/soy
rm -f installdev.txt install.txt 
