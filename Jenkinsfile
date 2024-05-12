pipeline {
    agent any
    
    stages {
        stage('Clone Repository') {
            steps {
                // Clone the Git repository
                git 'https://github.com/JunaidAly/TOCS_Course.git'
            }
        }
        stage('Build') {
            steps {
                // Run Python script directly 
                sh 'node App.js'
            }
        }
    }
}