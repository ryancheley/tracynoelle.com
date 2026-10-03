FROM nginx:alpine
COPY . /usr/share/nginx/html
# ponytail: default nginx conf serves /usr/share/nginx/html on :80 — nothing to configure
EXPOSE 80
