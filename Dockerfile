FROM banian/node

EXPOSE 3000 3001

# ENV NODE_ENV=production

# https://github.com/bower/bower/issues/1752
RUN echo '{ "allow_root": true }' > /root/.bowerrc

# Install required cli
RUN yarn global add grunt-cli bower yo generator-karma generator-angular

# Copies dependencies in seperate layers to improve caching
COPY ./UI/package.json ./UI/yarn.lock ./UI/bower.json /usr/src/app/
RUN yarn install

# Copy source
COPY ./UI /usr/src/app/

# Serve command
CMD grunt serve
