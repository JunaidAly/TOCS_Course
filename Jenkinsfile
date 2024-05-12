pipeline {
    agent any

    stages {
        stage('Build') {
            steps {
                echo 'Building App...'
                bat  'node --version'
            }
        }
        stage('Test') {
            steps {
                echo 'Testing App...'
                bat 'node app.js'
            }
        }
    }
}