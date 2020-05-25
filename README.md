```
git checkout dev && npm run build && git -ac 'Build' && git checkout master && git checkout dev -- ./build && rm -rf ./css && rm -rf ./images && rm -rf ./js && mv ./build/* ./ && rm -rf ./build
```
