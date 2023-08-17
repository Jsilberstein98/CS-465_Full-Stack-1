# CS-465_Full-Stack-1

**Architecture**

1. Compare and contrast the types of frontend development you used in your full stack project, including Express HTML, JavaScript, and the single-page application (SPA).
  - Throughout this project, I used several different types and styles of frontend development surrounding the MEAN stack. The use of Javascript, static and Express HTML, and SPA architecuture all played very different and key roles in this project. We started out with static HTML content and utilized a lot of recurring code that formatted the lists, headers, footers, and several other formatting options. This helped to contextualize and realize the symmetry between many different styles of pages and how this one worked with the Express page hosted on localhost:3000. Alternatively, it is important to mention the work done on the Single-Page Application with Angular, and how it used a different format all together. We still utilzied most of the existing architecture from the Express site, but the single page made for an entirely different experience. With the SPA, all information needed to be loaded on initiation and functioned dependently on the Express site being live. This is in stark contrast to the Express site which did not require the Angular site to be live at all. From an administrative standpoint, it was easy to see why the SPA architecture was more feasible and adaptible for the continued work on the express site. The Angular site made it so that adding, editing, and updating trips and information was all in a singular location with easy access after authentication.


2. Why did the backend use a NoSQL MongoDB database?
  - There are several reasons to use a NoSQL MongoDB Database. One of the most influential reasons in this project was that MongoDB uses Javascript which is very maleable and easily applicable in the MEAN stack. What is cool about this use of javascript, is that it essentially allows for us the developers to use JavaScript at all sides of the application, front-end, back-end, and database. This made many of the functional calls much smoother and streamlined as well, while also cutting down on code length due to syntax requirements. Additionally, the lack of necessity on schema, ease of indexing, and the flexibility of the parameters involved were important factors.




**Functionality**

1. How is JSON different from Javascript and how does JSON tie together the frontend and backend development pieces?
   - Firstly, JSON is different from JavaScript in its implementation. JavaScript Object Notation, or JSON, is JavaScript that is intended only to break up objects into key/value pairs. While it is still the same language, the key element that diversifies JSON from javascript is that in and of itself, it is only useful as string representation of object literals and as such is utilized by setting key/pairs within bracketed quotes. This ties in with the front and backend however in the sense that it allows for seamless and easy manipulation of strings as data using JavaScript Objects. TO show an example of this in the project, wherever a trip exists, the data involved with it are broken into key/pairs such as trip name, trip image, trip duration, trip description, and _ID. All of these store the data for each trip in the format of Key/Pairs using strings. In terms of the backend, this makes for easy CRUD methods as updating strings based on preexisting strings is far easier than making calls for several differnet object types when utilizingh MongoDB's servers.


   
2. Provide instances in the full stack process when you refactored code to improve functionality and efficiencies, and name the benefits that come from reusable user interface (UI) components.
   - There are many instances where reusable interfaces came in handy throughout this process, and especially when going through and updating the CRUD methods. For the app_admin site, the update method and add method use a similar page layout and style, the likes of which are basically interchangabel by title and function. Over the course of the project, I have gone back on several occasions to clean up, refactor and overall fix parts of the code that seemed bulky or unnecesary. One such example is when I went back and refactored for authentication. This edit of the program was fairly simmple in terms of implementation with other already existing aspects of the project. The main parts that needed to be added were the authentication functions and methods themselves. After writing the logic for them, the next step was to implement them in the functions so that most of the CRUD methods could not be done unless by an authenticated user. Another example of improving functionality in a larger sense was the method to read trips. I struggled on this for a while due to an issue with a quotation that had gotten misformatted when pasting code in. In doing so, I had peered through many pages of code only to find that it was a single quotation mark that was preventing the /api/trips call from displaying all of the trips.


  
 **Testing**

1. Methods for request and retrieval necessitate various types of API testing of endpoints, in addition to the difficulties of testing with added layers of security. Explain your understanding of methods, endpoints, and security in a full stack application.
   - For the most part, I am still working on my own comfortability with the security and testing of the methods. From what was worked on through the course, we worked a bit on troubleshooting the problems through the developer tools in the browser, but primarily through command line prompts and status codes. Later in the course, when working through authentication, we also recieved error messages that would direct us on how to fix the issue ourselves. From my understanding, the methods themselves are the GET, POST, PUT, and DELETE methods, all of which are facilitated through HTML. Similar to CRUD's Create, Read, Update, and Delete, HTML's methods function in much the same way. GET is the equivalent for Read on a database, POST is the equivalent of Create, PUT is the equivalent of Update, and DELETE is pretty universally Delete. There are some lingering security issues that should be eventually addressed for the safety of this applicaiton. One major issue is that in the app_admin site, there is no verification on who should be authenticated for CRUD functionality. It is extremely at risk for anyone to come in and write, update, or delete the information.

  
**Reflection**

1. How has this course helped you in reaching your professional goals? What skills have you learned, developed, or mastered in this course to help you become a more marketable candidate in your career field?
   - I struggled greatly in this course overall, but really enjoyed the content. This is something I could see myself doing with more practice and time. I have learned how interactive and overarching the stretch of web applications are. Additionally, I have learned that programming for a web applications is a very flexible thing, and can be done in a myriad of safe, secure, and productive ways. This course has made me understand fairly comfortably how the MEAN architecture works and is implemented in modern web applications, as well as made me more comfortable with developing and bug fixing in javaScript, HTML, and CSS formats.

  
