FROM maven:3.8.6-amazoncorretto-11

WORKDIR /app

#COPY .mvn/ .mvn
COPY pom.xml ./
#RUN chmod +x ./mvnw
RUN mvn dependency:go-offline

COPY src ./src

EXPOSE 8080

CMD ["mvn", "spring-boot:run"]