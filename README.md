![Atlan-Frontend-Task](https://socialify.git.ci/kirtiksingh/Atlan-Frontend-Task/image?font=Raleway&language=1&owner=1&stargazers=1&theme=Dark)



[![forthebadge](https://forthebadge.com/images/badges/built-by-developers.svg)](https://forthebadge.com)
[![forthebadge](https://forthebadge.com/images/badges/made-with-javascript.svg)](https://forthebadge.com)


# :computer: Atlan Frontend Task: Mastering SQL Queries
<strong> Link to the application: https://atlan-frontend-task.vercel.app/</strong>
<br>

## Introduction

The given application is developed as a task for Atlan. It enables users to run SQL queries in an online editor, and analyze the output obtained as a result of running the queries.

The detailed Problem Statement is also mentioned towards the end of this document.

## Data 
The data used in the application is obtained from https://www.mockaroo.com/, a website that can easily generate mock data. 

The data is downloaded and stored as a local JSON object but CSV files can also be used for the same by using a different logic, or a pre exisiting format conversion library.

## Page Speed and Optimisation

For all the page optimisation analysis, I have used Google's Lighthouse tool and Page Speed Insights to analysze the page load time, along with how well it performs as per web standards. I have also used GTMetrix to cross-check the same. On a laptop browser, the time to be interactive is <strong>0.5 seconds</strong> for the Homepage, as well as the SQL Editor page.

### 1. Page Load Time

I have taken the page load time used here to be the time taken for the site to be interactive, which in all the cases shown below, falls well under Google's time specified for mobile and desktop devices. It is the most important metric from the user's standpoint in my opinion as it allows the users to start navigating the site.

The Detailed Screenshots have been attached along with respective page load times in a later section of the document.

### 2. Optimizing the Page Load Time and other metrics

1. I have made the application into a <strong>PWA(Progressive Web App)</strong> so that it can be optimized as Google is promoting the use of such Installable apps. This also allows the web app to be used offline as it <strong>can be installed</strong>.

2. The website is made responsive to a great extent even though such an application is not very likely to be used on mobile devices. <strong>Absolute sizing is not used</strong> as much as possible and in turn, sizing units like <strong>em, rem, vh, and vw</strong> are used. <strong>Media queries</strong> have been used at most places, except a few where Bootstrap had to be used for rapid development.

3. The website is hosted on Vercel, which is considered to be one of the fastest free hosting mechanisms for JavaScript based Web apps due to it's CDN and caching benefits. It also provides a free SSL during hosting that is generally better for page security, and ranking.

4. React lazy loading has been used for loading parts of the page not immediately required in the background.

5. Minimal dependencies have been used for the creation of the page.

6. Restructured code to reuse components & used minimal imports where necessary.

## Screenshots

### Functionality

<img width="720" alt="Screenshot 2021-08-30 at 7 38 36 PM" src="https://user-images.githubusercontent.com/42700919/131353252-03bf8bd1-802d-4096-8ee2-e72018445768.png">
<img width="720" alt="Screenshot 2021-08-30 at 7 40 12 PM" src="https://user-images.githubusercontent.com/42700919/131353301-f79d31d8-be49-4c48-86f8-c91c9ccfc9c2.png">
<img width="720" alt="Screenshot 2021-08-30 at 7 40 51 PM" src="https://user-images.githubusercontent.com/42700919/131353314-e5e37598-4493-4813-a19d-0293603c7532.png">
<img width="720" alt="Screenshot 2021-08-30 at 7 40 58 PM" src="https://user-images.githubusercontent.com/42700919/131353317-95d16384-1d08-4e1c-8037-dc2a1bd83603.png">
<img width="720" alt="Screenshot 2021-08-30 at 7 39 19 PM" src="https://user-images.githubusercontent.com/42700919/131353262-9a6a9852-a39b-4583-a856-4056af4b1161.png">
<img width="720" alt="Screenshot 2021-08-30 at 7 39 30 PM" src="https://user-images.githubusercontent.com/42700919/131353295-04226e93-30da-4b47-a8cd-58e65f6320e6.png">


### Page Load Times (Google Lighthouse used, in Incognito Browser Mode in Brave V1.28.106 based on Chromium V92

<strong>Homepage Load Time (Desktop) : 0.5 seconds</strong>
  
![Screenshot 2021-08-30 at 5.52.12 PM](https://user-images.githubusercontent.com/42700919/131347527-42e5c389-7b5e-4a44-bb7f-a200e37fcaf4.png)

<strong>Editor Load Time (Desktop) : 0.5 seconds</strong>

![Screenshot 2021-08-30 at 6.24.00 PM](https://user-images.githubusercontent.com/42700919/131347818-c2c35f3b-010a-4352-8a65-0466e95c9434.png)

    
<strong>Homepage Load Time (Mobile) : 1.6 seconds</strong>

![Screenshot 2021-08-30 at 6.07.54 PM](https://user-images.githubusercontent.com/42700919/131347790-83701500-cc1b-4bea-b3d8-9b7286c5e6d0.png)

    
<strong>Editor Load Time (Mobile) : 1.7 seconds</strong>

![Screenshot 2021-08-30 at 6.25.43 PM](https://user-images.githubusercontent.com/42700919/131347801-4af9560d-9837-4b70-bc50-bdd936097666.png)   

## Problem Statement

### SQL Editor
Create a SQL editor view where your users can query easily on a table using SQL, and see the results. Think of all the features, style, design, layout that you think would be needed to make the query experience beautiful, smooth & efficient. Create your web app accordingly.

<strong>Ideal User:</strong> Our target users here are the data analysts of any organization, who will actually use the interface, query the data and pass on the results to their business team.

<strong>*Note:</strong> Do not worry about the backend of the app. Just focus on the frontend. Use stubs & mocks wherever you think the backend is necessary.

<strong>*Note2:</strong> Do not write SQL logic to show data results. Have a few predefined SQL queries and show their results directly.

<strong>Sample csv data you can use:</strong> https://github.com/graphql-compose/graphql-compose-examples/tree/master/examples/northwind/data/csv

<strong>Things to note:</strong>
1. Use a JavaScript framework for the task, preferably Vue.js/Nuxt.js but any framework would work. <strong>DO NOT code</strong> in vanilla JS.
2. You are <strong>NOT</strong> restricted to use this particular data. You can use any external data as well, if you want.
3. Calculate the page load time of your app. Write the page load time in README. Also write, how did you calculate the page load time of the app.
4. If you made any changes to optimize the page load time of your app, write all the steps you took to optimize the page load time in README.

<strong>Submission details:</strong>
1. Host the code in a version control system eg. Github, Gitlab etc, and send us the link to the repository.
2. Also, host the web app online using services like Netlify, Surge etc and send us its link. (DO NOT EXPECT the person checking the task to install your web app locally. There can be a lot of issues and back & forth, in case of any issue during local installation. It’s better you host the app and send us the link)

<strong>You will be judged on the following: </strong>
1. Code structure and readability.
2. Page layout and feature set
3. Information hierarchy of all the content and components shown on the page(s) of your app.
4. Page load time of your app.

<strong><em>Good luck!</em></strong>

## 👨‍💻 Contributors 

<table>
  <tr>
    <td align="center"><a href="https://github.com/kirtiksingh"><img src="https://avatars.githubusercontent.com/u/42700919?v=4" width="100px;" alt="" style="border-radius:50%"/><br /><sub><b>Kirtik Singh</b></sub></a><br /></td>  
  </tr>
</table>
