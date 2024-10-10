FROM openjdk:17-jdk-slim
WORKDIR /app
COPY target/spotify-app-1.0.0.jar /app/spotify-app.jar
EXPOSE 6666
ENTRYPOINT ["java", "-jar", "spotify-app.jar"]
