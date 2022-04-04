// // // // // // // Assignment 2



// // // // Js Object loop



// // // Question 1 - 2


// var  emptyArray=[[]]

// var matrixArray=[
//     [0 , 1 , 2 , 3],
//     [1 , 0 , 1 , 2],
//     [2 , 1 , 0 , 1]
// ]

// for (var col = 0; col < matrixArray.length; col++) {

//     console.log(matrixArray[col]);
// }

// // // Question 3


// for(count= 1 ; count <= 10 ; count++){
//     document.write(count + "<br>")
// }


// // // Question 4


// var multiNum=+prompt("Enter a Number to Multipy")

// var lengthNum=+prompt("Enter a Length to Multipy")

// document.write("Multiplication Table of " + multiNum + "<br>" + "Length " + lengthNum)

// for (multi=1 ; multi <= lengthNum ; multi++){

//     result= multi * multiNum ;
    
//     document.write(multiNum + " x " + multi + " = " + result + "<br>")
// }



// // // Question 5


// var fruits = ["apple", "banana", "mango", "orange", "strawberry"]


// for(i=0 ; i < fruits.length ; i++){
//     document.write("<h2>" + "Element at Index " + i + " is " + fruits[i] + "<br>" + "</h2>" )
// }


// // // // // Question 6

// //  // // counting

// document.write("<h1> Counting </h1>")
   
// for(i=0 ; i <= 15 ; i++){
 
//     document.write("<b>" + i + " , "  + "</b>")

// }

// // // // Reverse counting


// document.write("<h1> Reverse Counting </h1>")
   
// for(i=10 ; i > 0 ; i--){
 
//     document.write("<b>" + i + "  , "  + "</b>")

// }


// // // // Even Numbers

// document.write("<h1> Even Numbers </h1>")


// for(i=0 ; i <= 20 ; i++){
//      if(i % 2 ===0){
//         document.write("<b>" + i + " , "  + "</b>")
//      }

// }

// // // // Odd Numbers 

// document.write("<h1> Odd Numbers </h1>")

// for(i=0 ; i <= 20 ; i++){
//     if(i % 2 ===1){
//        document.write("<b>" + i + " , "  + "</b>")
//     }

// }

// // // // Series




// // // // Question 7


// var bakeItems= ["cake", "apple pie", "cookie" , "chips", "patties"]

// var want=prompt("Welcome to ABC bakery. What do you want to order")

// var state= false

// for(i=0 ; i < bakeItems.length ; i++){
//     if(want === bakeItems[i]){
//         document.write(want + " is <b>available</b> at index " + i + " in our Bakery")
//         state = true
//     break;
//     }
// }
// if(state=== false){
//     document.write(want + " is <b>not available</b> in our Bakery")
        
// }


// // // // Question 8

// var A = [24, 53, 78, 91, 12]

// var large=0

// for(i=0 ; i < A.length ; i++){
//     if(A[i] > large){
//         large=A[i] ;
//     }
// }

// document.write("The Largest Num is " + large)


// // // // Question 9


// var arr = [24, 53, 78, 91, 12]

// 	var smallest = arr[0];

// 		for(var i=1; i<arr.length; i++){

// 		if(arr[i] < smallest){

// 		smallest = arr[i];   
// 	}
// }

// document.write("The Smallest Num is " + smallest)


// // // // Question 10

// var multiNum= 5

// for (i=1 ; i <= 20 ; i++){

//     result= i * multiNum ;
        
//     document.write(result + " , ")
// }





// // // // // // // Arrays


// // // // Question 1 - 7 

// var studentNames=[]

// var studentNames= new Array()


// // // 3

// var names=[]

// var names = new String()

// // // // 4

// var number=[]

// var number= new Number()

// // // // 5

// var state=[]

// var state= new Boolean()

// // // // 6

// var List=[]

// var List= new Array()

// // // // 7

// var degrees=[" ","SSC", "HSC", "BCS", "BS", "BCOM", "MS", "M. Phil", "PhD"]

// document.write("<h1>Qualifications :</h1>")

// for(i=1 ; i < degrees.length ; i++){
//     document.write(i + ") "+ degrees[i] + "<br>")
// }


// // // // Question 8

// // Array Names

// var arrName=["Ss" , "Nn" , "Jj"]

// arrName[0]=prompt("Enter 1st Student Name")
// arrName[1]=prompt("Enter 2nd Student Name")
// arrName[2]=prompt("Enter 3rd Student Name")

// // // array marks

// var arrMarks=[250 , 320 , 450]

// // arrMarks[0]=prompt("Enter "+ arrName[0] +" Student Marks")
// // arrMarks[1]=prompt("Enter "+ arrName[1] +" Student Marks")
// // arrMarks[2]=prompt("Enter "+ arrName[2] +" Student Marks")

// var totalMarks=500

// // // // Array Names

// for(i=0 ; i < arrName.length ; i++){

//     disName=arrName[i]

//     for(m=0 ; m < arrMarks.length ; m++){
     
//      disMarks=arrMarks[m]

//      Percentage=arrMarks[m] / totalMarks * 100
    
//     document.write("Score of "+ disName +" is " + disMarks + " Percentage : "+ Percentage +" % <br>")
//    }
// }


// // // // // Question 9


// var color=["Orange" , "Yellow" , "Green" , "Blue" , "Red"]

// document.write("<h2> Colors </h2>")
// document.write(color +"<br>")

// // // // Color Start

// var new1color=prompt("Which color you want to add at Start")

// color.unshift("<b>"+new1color+"</b>")

// document.write("<h2> Color added at Start </h2>")

// document.write(color +"<br>" )

// // // // Color End

// var new2color=prompt("Which color you want to add at last")

// color.push("<b>"+new2color+"</b>")

// document.write("<h2> Color added at End </h2>")

// document.write(color +"<br>" )

// // // // Color Start 2

// var new3color=prompt("Which color you want to add at 1st")
// var new4color=prompt("Which color you want to add at 2nd")


// color.unshift("<b>"+new3color+"</b>" , "<b>"+new4color+"</b>")

// document.write("<h2> 2 Color added at Start  </h2>")

// document.write(color +"<br>" )


// // // // delete color 1

// document.write("<h2> 1 Color removed at Start  </h2>")

// color.shift(0)
// document.write(color +"<br>" )

// // // // delete color last

// document.write("<h2> 1 Color removed at last  </h2>")

// color.pop()
// document.write(color +"<br>" )


// // // where to put color


// var whereAdd=+prompt("At which number you want to add color")

// var whichAdd=prompt("Which color you want to add")


// color.splice(whereAdd , 0 , whichAdd)

// document.write("<h2> Color added to index "+whereAdd+"</h2>")

// document.write(color +"<br>" )

// // // // from where to remove color


// var fromWhere=+prompt("From Which index you want to remove color")

// var endWhere=+prompt("Value of number you want to remove")

// color.splice(fromWhere , endWhere)

// document.write("<h2> Color removed to index </h2>")

// document.write(color +"<br>" )



// // // Question 10


// var arr=[320 , 230 , 480 , 120]

// document.write("<h2>Ascending Order </h2>")

// document.write(arr +"<br><br>")

// arr.sort((a , b) => a - b)

// document.write(arr)


// // // Question 11


// var cities=["Karachi" , "Lahore", "Islamabad" , "Quetta","Peshawar"]


// document.write("<h2>Cities List</h2>")

// document.write(cities+"<br>")

// document.write("<h2>Selected Cities List</h2>")

// var selectedCities=cities.slice(2,4)

// document.write(selectedCities)



// // // question 12



// var arr = ["This" ,  "is" ,  "my" ,  "cat"];

// document.write("<h1> Array : </h1>")

// document.write(arr+"<br>")

// var Joined= arr.join(" ")

// document.write("<h1> String : </h1>")


// document.write(Joined+"<br>")



// // // Question 13


// var devices=["keyboard" , "mouse" , "printer" , "monitor"]

// for(i=0 ; i < devices.length ; i++){

//     document.write("<h2>Out :</h2>")
    
//     document.write(devices[i]+"<br>")

// }



// // // Question 14


// var devices=["keyboard" , "mouse" , "printer" , "monitor"]

 
// for(i=3 ; i >= 0 ; i--){
 
//     document.write("<h2>Out :</h2>")
    
//     document.write(devices[i]+"<br>")

// }



// // // Question 15



// var arr = ["Apple", "Samsung", "Motorola", "Nokia", "Sony", "Haier"];

// document.write("<select>");

// for(i=0 ; i < arr.length ; i++){

//     document.write("<option>" + arr[i] + "</option>");

// }

// document.write("</select>");













