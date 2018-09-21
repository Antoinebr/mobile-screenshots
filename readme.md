# Mobile screenshots

Work still in progress. 


## How to use 

```
npm install 
```

Run it : 
```

node app.js

``` 


## Make HTTP calls 

### generate a screenshot

```

 * generate a screenshot
 * 
 * @access : GET : /screenshot?url=https://google.fr 
 * @param {string} url
 * @returns {object} 

 ```


### compare a screenshot

```

 * Compare two screenshots
 * 
 * @access : /compare?screenA=${path}&screenB=${path} 
 * @param {string} screenA file name 
 * @param {string} screenB file name 
 * @returns {object} 

 ``` 

