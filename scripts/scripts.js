'use strict'
var hours=[7,8,9,10,11,12,13,14,15,16,17,18,19,20];
var locations=['Pike Place','Seattle Center','Red Square','Edmonds Beach','King Street Station']
var access=['pikePlace','seattleCenter','redSquare','edmondsBeach','kingStreetStation']
var minCustomersPerHour=[23,20,15,5,30]
var maxCustomersPerHour=[65,90,60,75,60]
var avgCookiesPerCustomer=[6.3,12.2,5.1,15.5,3.9]
var stands=[]

for(var i=0;i<locations.length;i++)
{
    stands.push(new Stand(i));
    stands[i].calcCustomersEachHour();
    stands[i].calcCookiesEachHour();
    stands[i].calcTotalCookiesPerDay();
}
function Stand(i) {
    this.locationName=locations[i];
    this.minCustomersPerHour=minCustomersPerHour[i];
    this.maxCustomersPerHour=maxCustomersPerHour[i];
    this.avgCookiesPerCustomer=avgCookiesPerCustomer[0];
    this.customersEachHour=[];
    this.access=access[i]
    this.cookiesSoldEachHour=[];
    this.totalCookiesSoldPerDay= 0;
    this.calcCustomersEachHour=function()
    {   for (var h=0;h<hours.length;h++){
            this.customersEachHour.push(getRandomInt(this.minCustomersPerHour,this.maxCustomersPerHour));
        }
    },
    this.calcCookiesEachHour=function()
    {
        for(var h=0;h<hours.length;h++)
        {
            this.cookiesSoldEachHour.push(Math.ceil(this.customersEachHour[h]*6.3));
        }
    };
    this.calcTotalCookiesPerDay= function()
    {
        var total=0;
        for(var h=0;h<hours.length;h++)
        {
            total+=this.cookiesSoldEachHour[h];
        }
        this.totalCookiesSoldPerDay=total;
    };
    this.toDOM=function()
    {
    for(var h=0;h<hours.length;h++)
        {
        var liEl=document.createElement('li');
        liEl.textContent=hours[h]+' : '+this.cookiesSoldEachHour[h]+' cookies';
        var parentUl=document.getElementById(this.access);
        parentUl.appendChild(liEl);
        }
    liEl=document.createElement('li');
    liEl.textContent='Total: '+this.totalCookiesSoldPerDay+' cookies';
    parentUl.appendChild(liEl);
    }
}
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
}
for(i=0;i<stands.length;i++)
{
    stands[i].toDOM()
}