# TIL

[파이썬 & 장고](https://tutorial.djangogirls.org/ko/python_installation/)

## 인터넷은 어떻게 작동

- 웹사이트는 HTML이라는 프로그래밍 코드가 존재
- HTML을 저장 하는것이 인터넷에서는 "서버"=> 네트워크
- 데이터 패킷을 보내면 각기 다른 라우터를 통해 전달 (라우터는 우체국)
- 전달하기 위해서는 IP주소 써야함 (IP는 도로명, 우편번호)
- 컴퓨터는 먼저 DNS에 IP주소가 무엇인지 물어봄.(전화주소록에서 이름을 찾아 전화번호 찾기)
- HTTP(Hypertext Transfer Protocol: 하이퍼텍스트 전송 프로토콜)라는 프로토콜을 사용(우표)
- 웹 사이트를 만들려면 그 웹 사이트가 동작할 서버(기계)가 필요합니다. 서버에서 요청(편지)을 받으면, 다시 웹 사이트(다른 편지)로 되돌려줍니다.

## 파이썬 설치

Linux에서는 이미 설치 되어있음.

```
$ python3 --version
Python 3.6.1
```

## 장고

- 파이썬으로 만들어진 무료 오픈소스 웹 애플리케이션 프레임워크
- 이미 여러구성요소들을 갖추고 있음.
- 웹 서버에서 요청이 오면 장고로 전달
- 장고 urlresolver가 패턴 목록을 가져와 URL과 맞는지 처음부터 하나씩 대조해 식별 (집배원이 집집이 편지와 대조해서 주소와 번지를 확인, 주소와 번지가 일치하면 그곳에 편지 전달: urlresolver가 바로 집배원)

## 장고 설치

### 가상환경(virtualenv)

장고 설치전 도움이 되는 도구, Virtualenv는 프로젝트 기초 전부를 Python/Django와 분리해줍니다. 웹사이트가 변경되어도 개발 중인 것에 영향을 미치지 않는다.

**결국 독립된 환경에서 파이썬을 이용하기 위해 가상환경을 사용한다.**

python package 관리

### 장고 설치하기

[설치도움받은 곳](https://dev-yakuza.posstree.com/ko/django/installation/)

1. 가상환경을 만든다.

```
python3 -m venv myvenv
```

2. 가상환경을 실행 시킨다.

```
source venv/bin/activate
```

3. 가상환경에 장고를 설치

```
pip install django
```

4. 장고 설치 버전 확인

```
django-admin --version
```

5. 개발 환경을 파일로 저장, 개발하면서 여러모듈 설치 완료후 명령어로 갱신

```
pip freeze > requirements.txt
```

6. 가상 환경(Virtual Environment)을 종료

```
deactivate
```
