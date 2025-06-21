pipeline {
  agent any

  stages {
    // stage('Clone') {
    //   steps {
    //     git 'https://github.com/PRAJWALPATIL-13/To-do-App-Jenkins-.git'
    //   }
    // }

    // stage('Build Docker Images') {
    //   steps {
    //     sh 'docker build -t todo-frontend ./frontend1'
    //     sh 'docker build -t todo-auth-service ./auth-service'
    //     sh 'docker build -t todo-task-service ./task-service'
    //   }
    // }

    // stage('Run Containers (Optional)') {
    //   steps {
    //     sh 'docker-compose up -d'
    //   }
    // }

    stage('Verify Environment') {
      steps {
        script {
          sh 'echo "Jenkins is working"'
        }
      }
  }
}
