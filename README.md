##Contact List Application

Contact List Application is a web interface for contact management. Interface is not device specified and it should be compatible with older browsers. Application has no connection to server nor any other kind of persistent storage. Due to this any changes done in application during it's run will be lost when application is closed. All contacts are loaded from src/data/dataExample.json. 

Project uses given CSS style sheets without any changes to reflect differences between React implementation and given template as much as possible.


###Installation:

1. Open folder in CLI with npm installed and execute "npm install".


###How to run APP:

1. After installation is complete execute command "npm run app".
2. In web browser of your choice go to "[http://localhost:8080](http://localhost:8080)".

###Tests

Running tests from folder ./tests is possible thrue commend "npm run test". Test sets are written for basic usage of util.js and contactStore.js.

Keep in mind that thare is an issue with mocha writen in "Known Issues" section below in this file.

###Known issues

1. PropTypes - I was not able run properly make propTypes check running. I know I am missing something simple but I am not able to figure it out. And it already took me too long to keep being stuck on it without progress. I believe that this is a minor issue.

2. ProfilePic are not implemented - ProfilePic was not implemented in previous version and was not requested to implement in rework.

3. mocha store_test.js has problem with jquery load of contacts. Contacts have to be hardwriten in store constructor (this.contacts = this.loadContactList() line has to be commented out) for testing to run correctly. I found some guides to solve this by using sinon but I don't think it is needed that badly. the guide can by found [here](https://codeutopia.net/blog/2015/03/21/unit-testing-ajax-requests-with-mocha/).

4. It is not possible to load site with empty contact list.

###What should be reworked in next version of project?

 I believe that in each application there is always something to make it better in next version and I know very well that there is still a lot of thing that could be better on this application but I don't want to keep working on it until it's perfect since it is not going to be used in real life any time soon. Due that I am releasing it as it is with this improve list.
 
 1. More tests. Test suite is pretty far from complete Unit testing suite.
 
 2. PropTypes are important too.
 
 3. Make possible to have empty contactList.
 
 4. Make tests for views (list.js; detail.js) with jest and mocha to make sure that everything renders as it should and only when it should be rerendered (because rendering only those part of app, that really changed is essential idea of React).
 
 5. ProfilePics are simple feature that requirec changes in very few files. But one of those files is dataExample.json and due to that I decided to leave it out of implementation and work exactly with given example as much as I can.