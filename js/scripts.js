'use strict'
var hours=[7,8,9,10,11,12,13,14,15,16,17,18,19,20];
var locations=['Pike Place','Seattle Center','Red Square']
var minCustomersPerHour=[23,20,15]
var maxCustomersPerHour=[65,90,60]
var avgCookiesPerCustomer=['6.3','12','5']

var pike={
    minCustomersPerHour: minCustomersPerHour[0],
    maxCustomersPerHour: maxCustomersPerHour[0],
    avgCookiesPerCustomer: avgCookiesPerCustomer[0],
    customersEachHour:[],
    calcCustomersEachHour: function()
    {   for (var h=0;h<hours.length;h++){
            this.customersEachHour.push(this.getRandomInt(this.minCustomersPerHour,this.maxCustomersPerHour))
            console.log(this.customersEachHour[h])
        }
    },
    cookiesSoldEachHour:[],
    calcCookiesEachHour: function()
    {
        for(var h=0;h<hours.length;h++)
        {
            this.cookiesSoldEachHour.push(Math.ceil(this.customersEachHour[h]*6.3));
        }
    },
    totalCookiesSoldPerDay:0,
    calcTotalCookiesPerDay: function()
    {
        var total=0
        for(var h=0;h<hours.length;h++)
        {
            total+=this.cookiesSoldEachHour[h]
        }
        this.totalCookiesSoldPerDay=total;
    },
    locationName: locations[0],
    toDOM:function()
    {
    for(var h=0;h<hours.length;h++)
        {
            console.log(this.cookiesSoldEachHour[h],' toDOM is functional.')
        var liEl=document.createElement('li');
        liEl.textContent=hours[h]+' : '+this.cookiesSoldEachHour[h]+' cookies';
        var parentUl=document.getElementById('pike');
        parentUl.appendChild(liEl);
        }
    liEl=document.createElement('li')
    liEl.textContent='Total: '+this.totalCookiesSoldPerDay+' cookies'
    parentUl.appendChild(liEl);
    },
    getRandomInt:function(min,max){
        return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
    }
}
pike.calcCustomersEachHour();
pike.calcCookiesEachHour();
pike.calcTotalCookiesPerDay();

var cent={
    minCustomersPerHour: minCustomersPerHour[1],
    maxCustomersPerHour: maxCustomersPerHour[1],
    avgCookiesPerCustomer: avgCookiesPerCustomer[1],
    customersEachHour:[],
    calcCustomersEachHour: function()
    {   for (var h=0;h<hours.length;h++){
            this.customersEachHour.push(this.getRandomInt(this.minCustomersPerHour,this.maxCustomersPerHour))
            console.log(this.customersEachHour[h])
        }
    },
    cookiesSoldEachHour:[],
    calcCookiesEachHour: function()
    {
        for(var h=0;h<hours.length;h++)
        {
            this.cookiesSoldEachHour.push(Math.ceil(this.customersEachHour[h]*6.3));
        }
    },
    totalCookiesSoldPerDay:0,
    calcTotalCookiesPerDay: function()
    {
        var total=0
        for(var h=0;h<hours.length;h++)
        {
            total+=this.cookiesSoldEachHour[h]
        }
        this.totalCookiesSoldPerDay=total;
    },
    locationName: locations[1],
    toDOM:function()
    {
    for(var h=0;h<hours.length;h++)
        {
            console.log(this.cookiesSoldEachHour[h],' toDOM is functional.')
        var liEl=document.createElement('li');
        liEl.textContent=hours[h]+' : '+this.cookiesSoldEachHour[h]+' cookies';
        var parentUl=document.getElementById('center');
        parentUl.appendChild(liEl);
        }
    liEl=document.createElement('li')
    liEl.textContent='Total: '+this.totalCookiesSoldPerDay+' cookies'
    parentUl.appendChild(liEl);
    },
    getRandomInt:function(min,max){
        return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
    }
}
cent.calcCustomersEachHour();
cent.calcCookiesEachHour();
cent.calcTotalCookiesPerDay();

var red={
    minCustomersPerHour: minCustomersPerHour[2],
    maxCustomersPerHour: maxCustomersPerHour[2],
    avgCookiesPerCustomer: avgCookiesPerCustomer[2],
    customersEachHour:[],
    calcCustomersEachHour: function()
    {   for (var h=0;h<hours.length;h++){
            this.customersEachHour.push(this.getRandomInt(this.minCustomersPerHour,this.maxCustomersPerHour))
            console.log(this.customersEachHour[h])
        }
    },
    cookiesSoldEachHour:[],
    calcCookiesEachHour: function()
    {
        for(var h=0;h<hours.length;h++)
        {
            this.cookiesSoldEachHour.push(Math.ceil(this.customersEachHour[h]*6.3));
        }
    },
    totalCookiesSoldPerDay:0,
    calcTotalCookiesPerDay: function()
    {
        var total=0
        for(var h=0;h<hours.length;h++)
        {
            total+=this.cookiesSoldEachHour[h]
        }
        this.totalCookiesSoldPerDay=total;
    },
    locationName: locations[2],
    toDOM:function()
    {
    for(var h=0;h<hours.length;h++)
        {
            console.log(this.cookiesSoldEachHour[h],' toDOM is functional.')
        var liEl=document.createElement('li');
        liEl.textContent=hours[h]+' : '+this.cookiesSoldEachHour[h]+' cookies';
        var parentUl=document.getElementById('red');
        parentUl.appendChild(liEl);
        }
    liEl=document.createElement('li')
    liEl.textContent='Total: '+this.totalCookiesSoldPerDay+' cookies'
    parentUl.appendChild(liEl);
    },
    getRandomInt:function(min,max){
        return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
    }
}
red.calcCustomersEachHour();
red.calcCookiesEachHour();
red.calcTotalCookiesPerDay();
pike.toDOM();
cent.toDOM();
red.toDOM();