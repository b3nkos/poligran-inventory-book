pipeline {
    agent any

    stages {

        stage('Build BACKEND docker image') {
            steps {
                sh 'docker build -t inventory-backend:latest backend/.'
            }
        }

        stage('Build FRONTEND docker image') {
            steps {
                sh 'docker build -t inventory-frontend:latest frontend/.'
            }
        }

        stage('Test Backend') {
            agent {
                docker { image 'inventory-backend:latest' }
            }
            steps {
                sh 'cd backend && mvn test'
            }
        }
        
        stage('Deploy backend') {
            steps {
                sh 'docker run --name inventory-backend-container --rm --detach --publish 8080:8080 inventory-backend'
            }
        }

        stage('Deploy frontend') {
            steps {
                sh 'docker run --name inventory-frontend-container --rm --detach --publish 3000:3000 inventory-frontend'
            }
        }
    }
}
