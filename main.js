var i,j;
var arr=new Array(13);
var hun=new Array(100);
var pop=0,all=0;
var rand9 = new Array(5);
var rowNum = new Array(9);
var count;
var finalArray = new Array (27);
var FLAG = 0;


    //Calls table() function number of times...

    function howMany(){ 
            count = document.getElementById('loop').value;
        for(var k=0; k<1 ;k++)
        {
            Random();
            Random1();
            generate();
            //tables();
        }   
    }
    
    //Generates 15 random numbers.........

    function Random()
    { 
        for(i=0;i<15;i++)
        {
            arr[i]=Math.floor((Math.random()*98)+1);          
        }
        Random1();
    }

    //Checks whether the Random() function numbers are unique.....


    function Random1()
    {
        for(i=0;i<15;i++)
        {
            for(j=0;j<15;j++)
            {
                if(arr[i]==arr[j] && i!=j)
                {
                    Random();
                    break;
                }
            }
        }
    
        all=0;
        for(i=0;i<15;i++){
            all = all + arr[i] + "<br>"; 
        }
        document.getElementById('random').innerHTML="Random 15 numbers :"+"<br>"+all;
        generate();
        
    }

    //creates table.......
    function tables()
    {
        var table = document.getElementById("table");
        var a = 0;
        var row = 3;
        var cols = 9;
        //console.log( count);

        for (var i=0; i<row ; i++)
        {
            var tr = document.createElement('tr');
            
            for(var j=0; j<cols ; j++)
            {
                var td = document.createElement('td');
                if (a<=27){ 
                    var text = document.createTextNode(finalArray[a]);
                } 
                a++;
                td.appendChild(text);
                tr.appendChild(td);
            }
            table.appendChild(tr);
        }
        var textnode =document.createTextNode("**");
        table.appendChild(textnode);
    }

    document.getElementById('makeTable').addEventListener("click",makeTable);
//____________________________________________________________________________________________________________

    var all1 = 0, count1,count2=0, maxValue=0,temp=0;
    var a1=0;

    //genrates 5 numbers betn 0-8........
    function generate(){
        for( i=0; i<5; i++)
        {
            rand9[i]=0;
        }
        for( i=0; i<5; i++)
        {
            rand9[i]=Math.floor((Math.random()*9));
            if (i==4){
                unique();
            }
        }
        
    }
    
    //Checks whether the generate() function numbers are unique.....

    function unique(){
        count1 = 0;

        for(i=0;i<5;i++)
        {
            for(j=0;j<5;j++)
            {
                if(rand9[i]== rand9[j] && i!=j)
                {
                    generate();
                
                }
            }
            count1++;
            
        }
        all1=0;
        // for(i=0;i<5;i++){
        //     all1 = all1 + rand9[i] + "<br>"; 
        // }
        // document.getElementById('gen5').innerHTML="Random 15 numbers :"+"<br>"+all1;
        if (count1==5){
            total();    
        } 
    
    }
    


    //Stores 15 numbers in table in random order.........
    function total(){ 
        for ( i=0; i<9; i++)
        {
            rowNum[i] = '*';
        }
        for ( i=0; i<5; i++)
        {
            var b = rand9[i];
            rowNum[b] = arr[a1];
            var c= arr[a1];
            console.log(a1);    
            a1++;
        }
        all1=0;
        for(i=0;i<9;i++){
            all1 = all1 + rowNum[i] + "<br>"; 
        }
        document.getElementById('gen5').innerHTML="Random 15 numbers :"+"<br>"+all1;
        
        if ( a1>=15)
        {
            a1 = 0;
        }
        for(var j = 0; j<9 ; j++ )
            {
                finalArray[maxValue] = rowNum[j]; 
                maxValue ++ ;
            }
            //console.log('coming 3');
            count2 ++;
            if (count2 != 3){
                //console.log('go');
                //generate();
            }
            else{
                maxValue=0;
                count2=0;
                console.log('finished');
            }

    }