# Zumul Market
![Image](https://github.com/user-attachments/assets/a333d329-f1aa-4d69-966f-8b52e3693b52)

### 프로잭트 개요

- **창작자(판매자)** 가 자신의 작품(음원, 디지털 콘텐츠, 예술품 등)을 쉽게 판매하고, 팬과 직접 연결될 수 있는 커머스 플랫폼 입니다
- 📃[배포링크](https://zumul-market-rere-alrang0929-alrangs-projects.vercel.app/)

### 기술 스텍
|분류|이름|
|---|:---|
|Framework|React|
|Language|JavaScript|
|Database|Supabase|
|Build Tools|Vite|
|State Management|Zustand|
|Data Fetching & Caching|TanStack Query|
|Security & Authentication|bcryptjs|
|Form Management|React Hook Form|

### 핵심 개념

- **창작자의 가시성 강화**: 작품 홍보 및 판매 지원
- **소통 중심 플랫폼**: 팬들과의 실시간 소통(채팅) 기능 제공

### 활용방법(프로젝트 예시)

- 채팅 기능 추가 예정

### 실행 방법

**Node.js** (버전 16 이상 권장) 및 yarn환경에서 실행 가능합니다
<details>
  <summary>how to run</summary>
  <!-- 내용 -->
      1. 이 저장소를 복제하세요
    
    ```bash
    git clone https://github.com/alrang0929/zumul-market-rere.git
    ```
    
    2. 프로젝트 디렉토리로 이동합니다
    
    ```bash
    cd zumul-app
    ```
    
    3. 의존성을 설치합니다
    
    ```bash
    yarn
    ```
    
    4. 개발 서버를 실행합니다
    
    ```bash
    yarn dev
    ```
</details>

### 활용방법(프로젝트 예시)

![Image](https://github.com/user-attachments/assets/a79cf771-3df9-4fa4-b7f5-19d7476cec31)

- 회원가입 시 type 선택을 통해 **창작자(판매자) or 팬(소비자, 일반 회원)** 으로 권한이 구분되고 그에 따른 기능을 제공합니다
<details>
  <summary>창작자(판매자)의 상품등록/조회 기능</summary>
  <!-- 내용 -->
     
</details>
<details>
  <summary>장바구니/구매 </summary>
  <!-- 내용 -->
- 로그인 상태가 아닐 시: `alret` 플로팅
        <img width="2503" alt="Image" src="https://github.com/user-attachments/assets/dd5c2c1d-830c-469d-a89f-1d1f9079a69a" />
    
- 로그인 상태: `handleAddToCartg`함수를 호출하여 cart DB에 저장
![Image](https://github.com/user-attachments/assets/0cd2f5b4-3c6a-4b05-a413-525a39891567)

</details>
<details>
  <summary>로그인/회원가</summary>
  <!-- 내용 -->
</details>
  
- soket.io 활용한 채팅 기능

### 화면설계/유저 플로우 [이동링크](https://www.figma.com/design/ZuHIjGrhASbvrYKbIHKHXk/%EC%AA%BC%EB%AC%BC%EB%A7%88%EC%BC%93_%ED%99%94%EB%A9%B4%EC%84%A4%EA%B3%84%EC%84%9C_ver241218?node-id=32-99&t=n3FhKS3jvT6imT7Q-1)
![Image](https://github.com/user-attachments/assets/63e18f1a-881e-42a1-a38c-77b73f134b7a)

### 프로젝트 ERD [이동링크](https://drawsql.app/teams/-2680/diagrams/zumulmarket/embed)
![Image](https://github.com/user-attachments/assets/6c40c23e-2803-4014-bf6a-ebe795bcb48f)

