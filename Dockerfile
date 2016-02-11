FROM alpine:latest
RUN apk update
RUN apk add nodejs git
RUN npm i mocha -g
RUN npm i gulp -g
RUN git clone https://github.com/dottgonzo/couchjsonconf.git /app
WORKDIR /app
RUN npm i

CMD    ["npm", "test"]
