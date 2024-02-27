FROM nginx
#COPY nginx.conf /etc/nginx/nginx.conf
COPY ./dist /usr/share/nginx/html
LABEL GIT_TAG=${GIT_TAG}
LABEL BUILD=${BUILD_NO}
EXPOSE 80