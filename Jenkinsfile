pipeline {
    agent any

    stages {

        stage('Stop and remove containers') {
            steps {
                sh 'docker stop poligram-inventory-book-backend'
                sh 'docker rm poligram-inventory-book-backend'
                sh 'docker stop poligram-inventory-book-frontend'
                sh 'docker rm poligram-inventory-book-frontend'
            }
        }

        stage('Build docker images') {
            steps {
                sh 'docker compose -f docker-compose.yml build backend'
                sh 'docker compose -f docker-compose.yml build frontend'
            }
        }

        stage('Test Backend') {
            agent {
                docker { image 'poligran-inventory-book-backend:latest' }
            }
            steps {
                sh 'mvn test'
            }
        }
        
        stage('Deploy') {
            steps {
                sh 'docker compose -f docker-compose.yml up -d backend'
                sh 'docker compose -f docker-compose.yml up -d frontend'
            }
        }
    }
}
