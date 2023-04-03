FROM openjdk:8-jdk-alpine
# Install Python 3.8.10 and pip
RUN apk add --no-cache python3=3.8.10-r0 \
    && apk add --no-cache py3-pip
VOLUME /tmp
ARG JAR_FILE=build/libs/hwilyric-0.0.1-SNAPSHOT.jar
COPY ${JAR_FILE} app.jar
EXPOSE 8080
ENTRYPOINT ["java","-jar","/app.jar"]
