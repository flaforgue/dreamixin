FROM node:12

ENV APP_ROOT /nuxt

RUN mkdir -p ${APP_ROOT}
WORKDIR ${APP_ROOT}
RUN npm install

ENV HOST 0.0.0.0
