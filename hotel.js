/* The script is placed inside an immediately invoked function expression
   which helps protect the scope of variables */

//PART ONE: GENERATE A RANDOM ROOM RATE. Write a function called genRand() that has no paremeters that will return a room rate between 100 and 400. HINT: You should hit a number within this range within 10 tries.
function genRand() {
    var x = Math.floor((Math.random() * 400) + 101);
    return x;
}

  // PART TWO: CALCULATE AND RETURN THE EXPIRY DETAILS FOR THE OFFER. Write a function called offerExpires that has one parameter a Date object. The function should return a string in the format "OFFER EXPIRES NEXT "WeekDay" (Date Month Year)". The date should be one week from today's date
function offerExpires(dateObject) {
    var weekday = dateObject.getDay() + 7;
    switch(weekday) {
        case 0:
        case 7: weekday = "Sunday"; break;
        case 1:
        case 8: weekday = "Monday"; break;
        case 2:
        case 9: weekday = "Tuesday"; break;
        case 3: 
        case 10: weekday = "Wednesday"; break;
        case 4:
        case 11: weekday = "Thursday"; break;
        case 5:
        case 12: weekday = "Friday"; break;
        case 6:
        case 13: weekday = "Saturday"; break;
    }
    var date = dateObject.getDate() + 7;
    var month = dateObject.getMonth();
    var flag = false;
    switch(month) {
        case 0: 
            if(date > 31){
                date = (date - 31);
                month = "February";
                flag = true;
            }
            else{
                month = "January";
            }
            break;
        case 1: 
            if(date > 28){
                date = (date - 28);
                month = "March";
                flag = true;
            }
            else{
                month = "February";
            }
            break;
        case 2:
            if(date > 31){
                date = (date - 31);
                month = "April";
                flag = true;
            }
            else{
                month = "March";
            }
            break;
        case 3:
            if(date > 30){
                date = (date - 30);
                month = "May";
                flag = true;
            }
            else{
                month = "April";
            }
            break;
        case 4:
            if(date > 31){
                date = (date - 31);
                month = "June";
                flag = true;
            }
            else{
                month = "May";
            }
            break;
        case 5:
            if(date > 30){
                date = (date - 30);
                month = "July";
                flag = true;
            }
            else{
                month = "June";
            }
            break;
        case 6:
            if(date > 31){
                date = (date - 31);
                month = "August";
                flag = true;
            }
            else{
                month = "July";
            }
            break;
        case 7:
            if(date > 31){
                date = (date - 31);
                month = "September";
                flag = true;
            }
            else{
                month = "August";
            }
            break;
        case 8: 
            if(date > 30){
                date = (date - 30);
                month = "October";
                flag = true;
            }
            else{
                month = "September";
            }
            break;
        case 9:
            if(date > 31){
                date = (date - 31);
                month = "November";
                flag = true;
            }
            else{
                month = "October";
            }
            break;
        case 10:
            if(date > 30){
                date = (date - 30);
                month = "December";
                flag = true;
            }
            else{
                month = "November";
            }
            break;
        case 11:
            if(date > 31){
                date = (date - 31);
                month = "January";
                flag = true;
            }
            else{
                month = "December";
            }
            break;
    }
    var year = (month == 1 && flag == true)? dateObject.getFullYear() + 1: dateObject.getFullYear(); 
    return "OFFER EXPIRES NEXT " + weekday + " (" + date + " " + month + " " + year +")";
}

//PART THREE: CALL THE FUNCTIONS AND WRITE INFO TO WEBPAGE

//Call getRand() function to get random room rate and write it to the special rate section on the webpage
var el = document.getElementById("specialRate");
el.innerHTML = genRand();

//create a new Date object
dateObject = new Date();

//Call the function passing the date object to it and write it to the offer ends section on the webpage
el = document.getElementById("offerEnds");
el.innerHTML = offerExpires(dateObject);
