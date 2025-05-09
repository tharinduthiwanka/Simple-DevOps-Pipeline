pipeline {
    agent any

    environment {
        IMAGE_NAME = 'tmax1998/simple-devops'
    }

    stages {
        stage('Build Docker Image') {
            steps {
                bat "docker build -t %IMAGE_NAME% ."
            }
        }

        stage('Run Tests') {
            steps {
                echo '⚠️ No tests defined. Skipping test phase.'
            }
        }

        stage('Push to Docker Hub') {
            steps {
                withCredentials([usernamePassword(credentialsId: 'dockerhub-pass', usernameVariable: 'USERNAME', passwordVariable: 'PASSWORD')]) {
                    bat '''
                        echo %PASSWORD% | docker login -u %USERNAME% --password-stdin
                        docker push %IMAGE_NAME%
                    '''
                }
            }
        }

        stage('Deploy') {
            steps {
                bat "docker run -d -p 3000:3000 %IMAGE_NAME%"
            }
        }
    }
}
