FROM daocloud.io/library/node:8.4.0-onbuild
COPY . /usr/src/app
RUN cp tools/ffmpeg /usr/bin/
EXPOSE 3006
