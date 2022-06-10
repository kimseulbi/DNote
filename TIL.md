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

1. [backend] 폴더에서 가상환경을 만든다.

```
python3 -m venv myvenv
```

1. 가상환경을 실행 시킨다.

```
source venv/bin/activate
```

1. 가상환경에 장고를 설치

```
pip install django
```

1. 장고 설치 버전 확인

```
django-admin --version
```

1. dnote 프로젝트 생성 및 dnote로 이동

```
$ (venv) django-admin startproject dnote
$ (venv) cd dnote

```

1. 마이그레이션 적용

```
$ (venv) ./manage.py migrate

```

1. 서버 실행

```
$ (venv) ./manage.py runserver
```

1. 개발 환경을 파일로 저장, 개발하면서 여러모듈 설치 완료후 명령어로 갱신

```
pip freeze > requirements.txt
```

1. 가상 환경(Virtual Environment)을 종료

```
deactivate
```

1. 가상서버 실행

```
source myvenv/bin/activate
```

## SASS

스타일시트 언어이다.

CSS 파일을 작성한다면 전혀 쓸 수 없었던 것을 Sass 문법을 통해 구현

브라우저 중간에 껴서 일을 해주는 게 CSS 전처리기, Sass의 역할

### classnames

여러개의 클래스를 한번에 사용하게도 하고, scss와 bind하여 굳이 styles이름을 사용하지 않아도 되게 하는 라이브러리

## 리액트

### export default vs export

[](https://lily-im.tistory.com/21)
export default는 해당 모듈엔 대체가 하나만 있다, 하나만 내보낼때 사용, 개발자가 원하는 이름으로 import 할수 있다.

export 배열, 상수, 클래스등 다수를 내보낼수 있다.
named export

## 리덕스

리덕스는 글로벌하게 상태관리를 할수있게 도와주는 도구

- `Action`

  - 상태에 어떠한 변화에 필요한것, 하나의 객체

- `액션 생성함수`

  - 액션을 만드는 함수

- `리듀서`

  - 상태의 변화를 일으키는 함수

- `스토어`

  - 리덕스에서는 한 App당 하나의 스토어
  - 스토어 안에 현재의 앱상태, 리듀서 포함, 내장함수 포함

- `디스패치`

  - 스토어의 내장함수 중 하나
  - 액션을 발생 시키는것

- `구독`

  - 스토어의 내장 함수 중 하나
  - `subscribe`: 특정 함수를 전달해주면, 액션이 디스패치 되었을때 마다 전달해준 함수가 호출
  - `connect`, `useSelector`: Hook을 사용하여 리덕스 스토어의 상태에 구독

- `createStore`

  - 스토어를 만들어주는 함수
  - 저장소(store) 생성
  - App에는 하나의 저장소만 있어야한다.

- `applyMiddleware`
  - 여러개의 미들웨어가 조합시킬수 있다.

* `Provider`

  - `react-redux` 라이브러리에 내장되어있는, 리액트 앱에 store를 손쉽게 연동 할 수있도록 도와주는 컴포넌트

  - `react` context를 구독하는 컴포넌트들에게 context의 변화를 알리는 역활

### configure.js

모듈화를 하는 이유??

하나의 애플리케이션에서는 하나의 스토어밖에 없긴 하지만 예외의 케이스(서버쪽에서 각 요청이 처리될때 마다 스토어 생성)가 있기 때문에 스토어를 생성하는 함수를 이허게 모듈화를 합니다.

> 👉 reducer의 단위 기준
>
> 화면단위 X, 기능단위 O
> 데이터의 성격에 따라서 달라질 수 있겠지만 어떤 데이터는 여러 화면에서 공유하는 데이터 일 수도 있고 특정 화면에서만 사용하는 데이터 일 수도 있다. 화면이 복잡할 경우는 `Controller`기준으로 module을 분리하여 관리 하는게 좋다.
>
> 화면단위가 아닌 기능 단위로 reducer를 구성하였을때 local state를 우선 고려
> 적절한 local state와 props를 통한 전달은 reducer가 비대해지는 것을 막아준다.
> session storage에 저장하기 위한 값, 여러 화면에서 공유하는 화면 상태 값들만 reducer에서 별도로 관리를 진행

### useSelector 최적화

### 리덕스 미들웨어

![](https://redux-advanced.vlpt.us/images/redux-middleware.png)

리덕스 미들웨어를 사용하면 액션이 디스패치 된 다음, 리듀서에서 해당 액션을 받아와서 업데이트하기 전에 추가적인 작업을 할수 있습니다.

미들웨어를 사용하는 주된 사용 용도는 비동기 작업을 처리

![](https://i.imgur.com/fZs5yvY.png)

리덕스 스토어에는 여러 개의 미들웨어를 등록, 새로운 액션이 디스패치 되면 첫번째로 등록한 미들웨어가 호출, 만약 미들웨어에서 next(action)을 호출하게 되면 다음 미들웨어로 액션이 넘어갑니다. `store.dispath`를 사용하면 다른 액션을 추가적으로 발생

-미들웨어를 직접 만들수 있지만 직접 만들게 되는 일은 거의 없습니다.

### 미들웨어와 외부 데이터 연동

외부데이터를 연동 하기 위해서 리덕스 미들웨어를 꼭 필요한것은 아닙니다.
리액트 컴포넌트와 내부 state 만을 사용하여 모든 것을 들을 할수 있지만 리덕스에서 외부 데이터 연동 하기위해서는 미들웨어를 사용 하면 됩니다.

### Rudux Observable and rxjs

Rudux Observable 은 RxJS 기반의 Rudux Middleware.

rxjs- API통신

### redux-thunk

redux-thunk는 리덕스에서 비동기 작업을 처리 할대 가장 많이 사용하는 미들웨어 입니다.
redux-thunk는 리덕스의 창시자인 Dan Abramov가 만들었으며, 리덕스 공식 매뉴얼에서도 비동기 작업을 처리하기 위하여 미들웨어를 사용하는 예시를 보여줍니다.

[redux-observable vs redux-saga vs redux-thunk](https://www.npmtrends.com/redux-observable-vs-redux-saga-vs-redux-thunk)

### redux-logger

로거 미들웨어
리듀서가 실행되기 전과 실행된 후를 log로 비교
