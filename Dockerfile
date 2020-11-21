FROM nginx:stable-alpine

WORKDIR /usr/share/nginx/html

# Bundle app source
COPY . .
RUN chmod -R 755 /usr/share/nginx/html

CMD nginx -g "daemon off;"
