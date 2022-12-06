pipeline {
    agent any
    options {
        skipStagesAfterUnstable()
    }
    stages {
         stage('Clone repository') { 
            steps { 
                script{
                    checkout scm
                }
            }
        }

        stage('Build') { 
            steps { 
                script{
                    echo "Building the proyect"
                }
            }
        }
        stage('Testing'){
            steps {
                echo 'Testing the proyect ...'
            }
        }
        stage('Deploy') {
            steps {
                script{
                    echo "Deploying .."
                }
            }
        }
    }
}