pipeline {
    agent any

    stages {
        stage('Build') {
            steps {
                echo 'Building App...'
                sh  'node --version'
            }
        }
        stage('Deploying') {
            steps {
                echo 'Deploying App...'
                sh 'node App.js'
                sh 'gcloud compute ssh root@apache-server --zone=us-central1-f --command="chmod 644 /var/www/html/profile.jpg"'

                //sh 'gcloud compute zones list'
                sh 'gcloud compute scp /var/lib/jenkins/workspace/Assignment-4_main/index.html root@apache-server:/var/www/html --zone=us-central1-f'
                sh 'gcloud compute scp /var/lib/jenkins/workspace/Assignment-4_main/projects.html root@apache-server:/var/www/html --zone=us-central1-f'
                sh 'gcloud compute scp /var/lib/jenkins/workspace/Assignment-4_main/about.html root@apache-server:/var/www/html --zone=us-central1-f'
                sh 'gcloud compute scp /var/lib/jenkins/workspace/Assignment-4_main/contact.html root@apache-server:/var/www/html --zone=us-central1-f'
                sh 'gcloud compute scp /var/lib/jenkins/workspace/Assignment-4_main/assets/profile.jpg root@apache-server:/var/www/html --zone=us-central1-f'
            }
}
}
}
