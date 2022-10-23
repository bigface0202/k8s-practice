# Multi-stage building
# Building Vue.js
FROM node:17-alpine3.14 as vue-build

COPY vue /app
WORKDIR /app
RUN npm install

RUN npm run build

# Building python3 flask environment and copy Vue.js from vue-build
FROM python:3.10-slim

ENV PYTHONUNBUFFERED True

ENV APP_HOME /app
COPY flask $APP_HOME
WORKDIR $APP_HOME
COPY --from=vue-build /app/dist ./html

RUN pip install --no-cache-dir -r requirements.txt

# gunicornを使ってWebサーバー起動
ENV PORT 8080
CMD exec gunicorn --bind :$PORT --workers 1 --threads 8 --timeout 0 main:app