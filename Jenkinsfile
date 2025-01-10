pipeline{
    agent any
    environment{
        SONAR_HOME = tool "Sonar"
    }
    stages{
        stage("Clone Code From Github"){
            steps{
                git url: "https://github.com/persistsolution/KwickBill-API.git", branch: "main"
            }
        }
        stage("SonarQube Quality Analysis"){
            steps{
                withSonarQubeEnv("Sonar"){
                    sh "$SONAR_HOME/bin/sonar-scanner -Dsonar.projectName=kwickbillapi -Dsonar.projectKey=kwickbillapi"
                }
            }
        }
        stage("OWASP Dependency Check"){
            steps{
                dependencyCheck additionalArguments: '--scan ./', odcInstallation: 'dc'
                dependencyCheckPublisher pattern: '**/dependency-check-report.xml'
            }
        }
        
        
        stage("Trivy File System Scan"){
            steps{
              sh "trivy fs --format table -o trivy-fs-report.html ."
            }
        }
        stage("Deploy using Docker compose"){
            steps{
                sh "docker-compose up -d"
            }
        }
            
    }
}
