npm install -g @nestjs/cli 설치해서 프로젝트 생성
nest로 명령어 확인 가능

nest new hi-nest

# Architect
- module -> controller -> service


# entry point
main.ts

# module
한가지 역할을 하는 모듈

# controller
controller는 는 url을 가져오고 함수를 실행하는 역할임 (Router)
MVC 의 C 맞음

# service
실제로 function을 가짐, 비즈니스 로직 실행

데코레이터는 꾸며주는 함수와 클래스에 있어야함

# 유효성 검사
class-validator, class-transformer

1. whitelist: true
클라이언트 측에서 전송한 데이터가 다음과 같을 경우
{
　 "title": "Tenet",
　 "year": 2020,
　 "genres": ["Action", "Sci-Fi"],
　 "hack": "by me"
}

whitelist: true 로 설정했을 때 아래와 같이 데코레이터가 없는 속성("hack")은 제거되어 저장됩니다.
{
　 id: 1,
　 title: 'Tenet',
　 year: 2020,
　 genres: ['Action', 'Sci-Fi'],
}


2. forbidNonWhitelisted: true
클라이언트 측에서 전송한 데이터가 다음과 같을 경우
{
　 "title": "Tenet",
　 "year": 2020,
　 "genres": ["Action", "Sci-Fi"],
　 "hack": "by me"
}

"hack"이라는 속성은 화이트리스트에 존재하지 않으므로 HttpException 을 던집니다.

response :
{
　 "statusCode": 400,
　 "message": [ "property hack should not exist" ],
　 "error": "Bad Request"
}

 forbidNonWhitelisted를 사용하기 위해서는 whitelist가 먼저 true가 되어야 합니다.


 공식 문서 참고, class-validator


 express 위에서 돌아가면서 동시에
 Fastify위에서도 돌아간다. (Express 처럼 작동하는데 빠른 프레임워크)