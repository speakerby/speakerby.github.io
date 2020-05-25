git checkout dev \
&& npm run build \
&& git commit -am 'Build' \
&& git checkout master \
&& git checkout dev -- ./build \
&& rm -rf ./css \
&& rm -rf ./images \
&& rm -rf ./js \
&& mv ./build/* ./ \
&& rm -rf ./build
