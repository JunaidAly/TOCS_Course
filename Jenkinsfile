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
                sh 'node App.js'
            }
}
}
}
