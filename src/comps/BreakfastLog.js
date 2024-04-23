import {BsArrowCounterclockwise, BsEmojiSmileUpsideDown, BsFillPlusCircleFill} from 'react-icons/bs'
import {ImBin} from 'react-icons/im'
import React, {useState,useContext,useEffect, useRef, createContext} from 'react'
import {SearchFood} from './SearchFood.js'
import {useToggle} from './useToggle.js'
import { queryByTestId } from '@testing-library/react'
import { set } from 'animejs'
import { EatingTimeContext } from './EatingTimes.js'
import {Stacked }from './Stacked.js'
import Charts from './Charts.js'
import searchFoodContextData1 from "./SearchFoodDataContext.js";
import { AiOutlineConsoleSql } from 'react-icons/ai'
import { DragControls } from 'framer-motion'

// make it into classes then polymorph
//or make the values different for each component


export const BreakFastContext = createContext()



export const  BreakfastLog=({props, selected}) =>{

  const {setChartData} = useContext(searchFoodContextData1);
  const {carbData} = useContext(searchFoodContextData1);
  const {setCarbData} = useContext(searchFoodContextData1);
  const {chartData1} = useContext(searchFoodContextData1);
  const { head }  = useContext(searchFoodContextData1);
  const {objextA} = useContext(searchFoodContextData1)
  const{globalDivCalArr,setGlobalDivCalArr  } = useContext(searchFoodContextData1)
  const { backendArray,setBackendArray } = useContext(searchFoodContextData1)
  const{ update } = useContext(searchFoodContextData1)
  const{ newData } = useContext(searchFoodContextData1)
  const{getDayNew} = useContext(searchFoodContextData1)
  const{setTotalCal} = useContext(searchFoodContextData1)
  const{displayFoodArr,setDisplayFoodArr} = useContext(searchFoodContextData1)
  const{DeleteFood} = useContext(searchFoodContextData1)
  const{curDayID,setCurDayId} = useContext(searchFoodContextData1)
  const searchFoodData = useContext(SearchFood)
  const eatingTimeData = useContext(EatingTimeContext)

//do the array
//searchedfoodComp ->amount->queryOne->arr->caloireArr->addArr function->onTotal prop
const[selectedSlot,setSelectedSlot] = useState()

  const[divLogState,setDivLogState] = useState([])
  const [log, setLog] = useState([]);
  const[count,setCount]=useState(1)
  const[foodInput,setFoodInput]=useState('')
  const[calories,setCalories]=useState(0) 
  const[amount,setAmount]=useState() // here
  // const[totalCal,setTotalCal]=useState(0)
  const[divLog, setDivLog] = useState([])


 
const selectedComp =(value)=>{

let resultOne = arr.filter((zero) => zero!==0)
 
console.log(resultOne,'result one')
console.log(arr,'arr one')


  console.log('inputed into query')
  if(value !=0){    
  console.log('inputed ')
  
    // setQueryThree(value)
  
  }


  
    setCalorieValueArr([...resultOne])
    console.log(calorieValueArr,'calorieValueArr')
    console.log(calorieValueArr,'calorieValueArr divLogState added')
    console.log(arr,'arr divLogState added')


  //  setTotalCal(addArr(arr,0))
    // setTotalCal(addArr(arr,0))



    
  
  }
  
// to  update  ontotal is getting the daved cal consumed 

// might have to change the ontotal and have it only change itslef and others places have the total consumed from the global provider
  // useEffect(()=>{

   
  // onTotalOne(objextA[head][0].calConsumed)

  // },[head])

//to update the total calroites in the specific date

  
  const[queryOne,setQueryOne] =useState(0) 
  const[queryCarbThree,setQueryCarbThree]= useState(0)
  const [queryFat,setQueryFat] = useState(0)
  const[queryPro,setQueryPro] = useState(0)

  const[holderArr,setHolderArr]= useState([])
  const [calorieValueArr, setCalorieValueArr]= useState([])
  const[carbValueArrThree, setCarbValueArrThree]= useState([])// these should be a class for the 3 macros
  const[fatValueArr, setFatValueArr]= useState([])
  const[proValueArr,setProValueArr]= useState([])
  let arr= [...calorieValueArr,queryOne]// this is will the latest query number into it 

  let arrCarbThree = [...carbValueArrThree]
  let arrFat = [...fatValueArr]
  let arrPro = [...proValueArr]
  if(carbValueArrThree[0]==0){

    console.log(arrCarbThree.shift(),'shifted')
   }

const[totalCarbs,setTotalCarbs]= useState(20)
const[totalFat,setTotalFat]= useState(25)
const[totalPro,setTotalPro]= useState(30)

   let breakObject = {
    news:'succes',
    carbs:totalCarbs
   }
useEffect(()=>{


  selectedComp(0)

},[queryOne,holderArr])


useEffect(()=>{


  setCarbValueArrThree([...carbValueArrThree,queryCarbThree])
  setFatValueArr([...fatValueArr,queryFat])
  setProValueArr([...proValueArr,queryPro])
  

},[queryCarbThree])

useEffect(()=>{

setTotalCarbs(addArr(arrCarbThree,0))
setTotalFat(addArr(arrFat,0))
setTotalPro(addArr(arrPro,0))


 console.log(carbValueArrThree,'carb effect')
},[carbValueArrThree])




//take verything from 133 amount



// useEffect(()=>{
//   if(totalCarbs !=0){
// console.log(totalCarbs,'totalcarbs')
// console.log(totalFat,'total fat')
// console.log(totalPro,'total pro')

//   setChartData({
//     series: [
//       {
//         name: 'Today',
//         data: [100, 50, totalCarbs],
//       },
//     ],
//   })
// }
// },[totalCarbs])



useEffect(()=>{
  console.log(chartData1,'chartData1')
   
  },[chartData1])


useEffect(()=>{

  //if the same add it anyways 

  
  if(amount  != undefined|| NaN || amount == queryThree)  {

    if(amount.calories != 0 ){

setDivCalArr(newDivLogOne)

      console.log(arr, 'arr  first ')
      setQueryOne(amount.calories)
      console.log(amount,'amount')

   
      setQueryCarbThree(amount.carbs)
      setQueryFat(amount.fat)
      setQueryPro(amount.protein)
      
    
      console.log(amount.carbs,'amount.carbs')

    }
    else{
      setQueryOne(0)

    }

  }else{
    console.log('the oher women')
    setQueryOne(0)//changin thisn helps with maintaing it
    console.log(amount,'amount else')


  }

  // console.log(arr, 'arr')
  console.log(arr, 'arr  second')
  console.log(arrCarbThree, ' arr carb three ')


},[amount])


  const[queryTwo,setQueryTwo] =useState(0) 
  const[queryThree,setQueryThree] =useState(0) 


  // const[total,setTotal] = useState(0)
  const totalRef = useRef(10)


const[newDivLogOne,setNewDivLogOne] = useState([])
const[newDivLogTwo,setNewDivLogTwo] = useState([])
const[newDivLogThree,setNewDivLogThree] = useState([])


  const [calorieValueArrTwo, setCalorieValueArrTwo]= useState([])
  const [calorieValueArrThree, setCalorieValueArrThree]= useState([])

  //becuase it resest or th render is delayed to keep the speed have to keep the previous dealyed version in state which is naturall delayed becuase its state iwthin state ad have the new value updated into a regualr arr with the spreaded state arrau


  // let arr = [amount,...calorieValueArrTwo]// this is will the latest query number into it 
  // const [calorieValueArrOne, setCalorieValueArrOne]= useState([arr])
  
  let arrTwo = [...calorieValueArrTwo,queryTwo]// this is will the latest query number into it 
  let arrThree= [...calorieValueArrThree,queryTwo]// this is will the latest query number into it 

 
  let resultTwo = arrTwo.filter((zero) => zero!==0)
  let resultThree = arrThree.filter((zero) => zero!==0)



  // const[newArr,setNewArr] = useState([resultOne])
  const[result,setResult] = useState(0)

  // useEffect(()=>{
  //   onTotalOne(  addArr(fakeArr,0)    )
  
  // },[fakeArr])

  function addArr(array,type) {
    // console.log(fakeArr)
    // console.log(arr)
      
    // if(newDivLogOne.length==0){
    //   setCalorieValueArrOne([])
    // }

      let arrTotalOne = array.reduce((accumulator,currentValue)=>{
        console.log(accumulator+"accumulator")
        console.log(currentValue+"currentValue")

        return accumulator+currentValue},0)
      // console.log(resultOne+"result One")
      console.log(arrTotalOne+"arrTotal One")//thisi doubling arrTotla means its running it twice


      if (type==1){


        return arrTotalOne  - queryOne
      }   
      else if (type ==2){
        return arrTotalOne - queryCarbThree
      }
      else if(type ==3){
        return arrTotalOne - queryFat

      }
      else if (type ==4){
        return arrTotalOne - queryPro

      }
      else{
        // setResult(arrTotalOne)
        return arrTotalOne

      }
  }

  //result one is the one getting affected when deleteing in the other slots
  // function addArr(array,type) {
         
      

  //   if(newDivLogTwo.length==0){
  //     setCalorieValueArrOne([])
  //   }

  //     let arrTotalOne = array.reduce((accumulator,currentValue)=>{
  //       console.log(accumulator)
  //       console.log(currentValue +"queryOne")

  //       return accumulator+currentValue},0)
  //     console.log(resultOne)
  //     console.log(arrTotalOne)//thisi doubling arrTotla means its running it twice


  //     if (type==1){


  //       return arrTotalOne - queryOne
  //     }   
  //     else{
  //       return arrTotalOne

  //     }
  // }

  let clickCount = 0

const [fake,setFake]= useState(0)
//it does it on first renderthen on second state it second render
//   useEffect(()=>{

//       // setCalorieValueArrTwo([...arr])
// //ptoblem is its updating addArr function but not the state ontotal and only when newlog added
    

//     // console.log(resultOne) // these get activated when it works and when its different number  and so those th addArrFunction
//     // console.log(calorieValueArrOne) // this is pushing a 0 in the array but in line 316 it addes it but doesnt run the effect
//     // console.log(arr)
//     console.log('queryOne:' , queryOne)



  
//   },[amount])// couldf it be it only yactiavtes when queryOne changes 

//   useEffect(()=>{

//     setCalorieValueArrTwo([...calorieValueArrTwo,queryTwo])
// //ptoblem is its updating addArr function but not the state ontotal and only when newlog added
//   // onTotalTwo(addArrTwo(arrTwo,0))



// },[queryTwo])

// useEffect(()=>{

//   setCalorieValueArrThree([...calorieValueArrThree,queryThree])
// //ptoblem is its updating addArr function but not the state ontotal and only when newlog added
// // onTotalThree(addArrThree(arrThree,0))



// },[queryThree])
//   // setQuery(query)






  
// // calTrack += calories










  
const createNewlog=()=>{
console.log(eatingTimeData)

// if(eatingTimeData.selectedSlot == 1){
  divLog.push(breakfastLogTemplate(count))
    console.log(newDivLogOne,'newDivLogOne pushed created')


// }
// if(eatingTimeData.selectedSlot == 2){
//   newDivLogTwo.push(breakfastLogTemplate(count))
//     console.log(newDivLogTwo)


// }
}

// const queryRef = useRef(queryOne)


const showNewLog=()=>{

// return(log.map((log,index)=>{
//       return(
//         <div key = {index}ref = {queryRef}>
//         {breakfastLogTemplate(index)}
//         </div>
//         )
//     })
//   )

    return (
      divLog.map((log,index)=>log)


   
    )





  }

  // const{fakeChosen,setFakeChosen} = useContext(searchFoodContextData1)

  //might be able to chnage the onquery and call it from there
//   useEffect(()=>{

// let newFakeChosen = fakeChosen.filter(item => item !== 'Select Food')

// objextA[head][1](prev => ({...prev, breakfastLog: {...prev, loglog: newFakeChosen}}));

// console.log(fakeChosen,'chosen')
// console.log(newDivLogOne,'newDivLogOne')
// // objextA[head][1](prev => ({...prev, breakfastLog: {...prev.breakfastLog, loglog: fakeChosen}}));





//   },[fakeChosen])



// const [prevLoglog, setPrevLoglog] = useState(objextA[head][0].breakfastLog.loglog);

// useEffect(() => {
// console.log(fakeChosen, 'chosen fake  prev');  
// }, [fakeChosen]);


// useEffect(() => {
// objextA[head][1](prev => ({...prev, breakfastLog: {...prev.breakfastLog, loglog: prevLoglog}}));
// console.log(prevLoglog,'chosen prev')
// }, [prevLoglog]);
















// useEffect(() => {
//   console.log(objextA[head][0].calorieArrayLog, 'chosen log');



// }, [objextA[head][0].loglog]);


// this dictates the total Cal
// useEffect(() => {
//   if (totalCal !== undefined) {
//     objextA[head][1](prev => ({ ...prev, calConsumed: totalCal }));
//   }

  
// }, [totalCal]);

// Update loglog state while keeping previous state




useEffect(() => {
  objextA[head][1](prev => ({...prev, breakfastLog: {...prev.breakfastLog, calorieArray: calorieValueArr}}));
}, [calorieValueArr]);
// i will have to make it use the heads object states when it changes









  // useEffect(()=>{
  //   console.log(newDivLogOne,'divCalArr new div')
   

  //     console.log(objextA[head][0].breakfastLog.calorieArrayLog,'caloireArray');
  //     objextA[head][1](prev => ({...prev, breakfastLog: {...prev.breakfastLog, calorieArrayLog: newDivLogOne}}));


  // },[log]);

    
  const[divCalArr, setDivCalArr] = useState([])



  useEffect(()=>{
 

    setGlobalDivCalArr(divCalArr)



  },[divCalArr]);


  // useEffect(()=>{

  //     objextA[head][1](prev => ({...prev, calorieArrayLog: globalDivCalArr}));




  // },[globalDivCalArr]);
  


let fuckyou = [...globalDivCalArr]

  useEffect(()=>{



    console.log(fuckyou,'fuck ')
    setNewDivLogOne(globalDivCalArr)
  

    // objextA[head][1](prev => ({...prev, calorieArrayLog: fuckyou}));

    
  
  
  
  },[head])

  // useEffect(()=>{



  //   console.log(fuckyou,'fuck ')
  //   setNewDivLogOne(objextA[head][0].calorieArrayLog)
  




    
  
  
  
  // },[objextA[head][0].calorieArrayLog])
  


  useEffect(()=>{
    console.log(objextA[head][0].calorieArrayLog,'global log')
    console.log(objextA);
    console.log(head);
    console.log(objextA[head]);
    console.log(objextA[head][0]);
    console.log(objextA[head][0].calorieArrayLog);
    // console.log(objextA[head][0].breakfastLog.breakfastLog);
  },[objextA[head][0].calorieArrayLog]);
  



  // this attaches the amount of search components that need to be displayed to the head object

//show updated objexta log








const addLog=()=>{
  createNewlog()



    // setNewDivLog(0)
    setLog([...log,count])



      setCount(count+1) 
      // setLog([...log,count])    

      // console.log(resultOne)// this js not erasing afater the removing of all 
    console.log(count)





    }
    

//issues is its updating on the qeury and only chanign the first one


    //might have to conjoin the arrays of the position and the value , 
    console.log(arr,'arr solo')// its being fully erased the fuck
    console.log(calorieValueArr,'calorie arr solo') // it is being fully removed 
    console.log(arrCarbThree, ' arr carb solo ')
    console.log(carbValueArrThree, ' value carb solo ')


    const removeCards = (index, containerNum) => {




      clickCount ++
      console.log(index,'index')
      console.log(index+'key') //  key
     


      // if( containerNum == 1){
        const divIndexOne = newDivLogOne.findIndex((key)=>key.key == index) // finds index
        console.log(divIndexOne,' new index find')
        let newIndex = index -1

        newDivLogOne.splice(divIndexOne,1)
       //this will be used to updated objextA calorie array
        let newArr = arr.toSpliced(newIndex,1)
        console.log(newArr,'spliced divLogState for arr')
        console.log(arr,'spliced divLogState arr for totalCal')


        setCalorieValueArr(newArr)

        addArr(arrCarbThree,2)
        addArr(arrFat,3)
        addArr(arrPro,4)

        // setTotalCal(addArr(arr,1))
        console.log("container removed")
        console.log(newIndex,'newIndex')
        console.log(index,'normal index')
        DeleteFood(index)
        console.log(newDivLogOne, 'newdivlog one')
        console.log(arr,'arr removed')
        console.log(calorieValueArr,'cal arr removed')

        // console.log(resultOne,'result one removed')

  

      // }else if(containerNum == 2){
      //   const divIndexTwo = newDivLogTwo.findIndex((key)=>key.key ==index) // finds index
      //   let newIndex = index -1
      //   newDivLogTwo.splice(divIndexTwo,1)

      //   resultTwo.splice(newIndex,1)
      //   onTotalTwo(addArrTwo(arrTwo,1))
      //   console.log("second container removed")
      
      // }else if(containerNum == 3){
      //   const divIndexThree = newDivLogThree.findIndex((key)=>key.key ==index) // finds index
      //   let newIndex = index -1
      //   newDivLogThree.splice(divIndexThree,1)

      //   resultThree.splice(newIndex,1)
      //   onTotalThree(addArrThree(arrThree,1))
      //   console.log("third container removed")
     

      // }

      // if(eatingTimeData.selectedSlot == 1){
      //   resultOne.splice(index-1,1)

      // }else if(eatingTimeData.selectedSlot ==2){
      //   resultTwo.splice(index-1,1)

      
      // }else if(eatingTimeData.selectedSlot ==3){

      //   resultThree.splice(index-1,1)
      
      // }

      
// 
      // console.log(resultOne, "resultOne arr")

      // addArr(query,result)


      // console.log(arr+"arr")// this in removal other slots affects the first one. know which slot it clicks on and put that ass arg in the fucniton to perform over the right slot removal
      //solutions: when clciked record the container and pass it through the remove function to do only the container numver removal
      // have to make it conditional  when the useEffect takes place based on the container number

      // const newLog = log.filter((_,i)=> i!==index)
      // let newIndex = index - clickCount
      // log.splice(0,1)

      // console.log(newDivLog.splice(newIndex,1))
      // console.log(newIndex)
      // console.log(newDivLogOne+"newDivLog One") // this in removal other slots affects the first one





      // const newLog = log.reduce((p,c)=>(c[p]==index &&p.push(c),p),[]);//filtering array o(n)






      // const filteredArr = resultOne.filter((_,i)=> i!==index)
      // const callType = 1
      // // addArr(query,filteredArr,callType)
      // console.log(queryOne)

      setCount(count)




    };
    

// const calories = ()=>{
//   console.log( breakfastInputLog[0].date == 0 ? true:false)


// }




const { day } = useContext(searchFoodContextData1);
const {inputDate } = useContext(searchFoodContextData1)

let firstData = []
let [oldData,setOldData] = useState([])


useEffect(()=>{

  console.log(oldData,'data unique')


},[oldData])

// const showDayFoods = ()=>{
//   if(day.length == 0){
//     return(
//       <li>no notes</li>
//     )
//   }else{


//     const index = day.findIndex(note => note.date == inputDate)
//     const food = day[index].food_list
//     console.log(food,'data food')

//     if(food !== undefined){

//         food.forEach((foodItem) => {
//           firstData.push(
//             <div className="search-food-container">
//               <div className="select-btn">
//               <div key={foodItem.id} className="space-between">
//                 <span className="">{foodItem.name}</span>
//                 <span className="">{foodItem.calories} cal</span>
//             </div>
//         </div>
//         </div>
//           );
//         });
//         console.log(oldData,'data')

//     }else{
//       return(
//         <li>no notes</li>
//       )
//     }
//   }
// }



useEffect(() => {
  getDayNew()

  console.log('getting new day on date change')
  //add arr of the backend to the current array to get calories or can add it to the local array
  // if taking from backend arr

  // on first looad show and calucalte total calories  DONE  
  // after creation of food,  take the calcuation from the back end array againn DONE
  // Delete the food from the back end DONE
  // when delete happens get a new data DONE
  // when the date changes display backend array DONE

  // GRAPH
  // on first load get from backend array and calculate the macros  total DONE
  // on first load connect the macros total to the graphs  DONE
  // on new creation of food correct the calcualtion of macros DONE
  // on deletion of food correct the calculation of macros DONE


  // remove task bar on the right make date look better a long bar on top? DONE
  // date in the middle , logout on the right, track on the left  with logos on the left of box DONE
  // change the fake page route

 
  //code the weekly data 
//fix : the refresh causes more things to be added

console.log(inputDate,'inputDate')
}, [inputDate]); // Re-run effect when either day or inputDate changes

useEffect(()=>{
  showNewFoods();
  console.log(newData,'showing day foods on data change')

},[newData])
// useEffect(() => {
//   getBackendArr()
// }, [update]); //occurs when something is created

useEffect(() => {
console.log(backendArray,'backendArray update')
}, [backendArray]); 

// when a new added gets added into the backend then this array will be filled 
const getBackendArr = ()=>{
  if (day.length === 0) {
    return <li>no notes</li>;
  } else {
    const index = day.findIndex(note => note.date === inputDate);
    const food = day[index]?.food_list; // Using optional chaining to avoid errors if day[index] is undefined
    console.log(food, 'data food');

    if (food) {
      const uniqueFoods = Array.from(new Set(food.map(item =>item.id
        
        ))); // this makes it unique 
        console.log(uniqueFoods,'data unqieueee')
        let newArr = uniqueFoods.map(id => food.find(item => item.id === id))
      

        setBackendArray(prev => [...prev, ...newArr])
        console.log('done on update')

      
    } else {
      return <li>no notes</li>;
    }
  }

}


const showNewFoods = ()=>{
  if(newData.length == 0){
    return(
      <li>no notes</li>
    )
  }else{
    const index = newData.findIndex(note => note.date === inputDate);

    const food = newData[index]?.food_list; // Using optional chaining to avoid errors if day[index] is undefined

    console.log(newData[index].id,'localDay newData Foods')
    console.log(food, 'data food newData Foods');
    console.log(index, 'data index');
    console.log(day, 'data day newData Foods');



    if (food) {
      const uniqueFoods = Array.from(new Set(food.map(item =>item.id
        
      ))); // this makes it unique 
      console.log(uniqueFoods,'data unqieueee')
      let newArr = uniqueFoods.map(id => food.find(item => item.id === id))
  
      let caloriesArr = newArr.map((item) => item.calories)
      setDisplayFoodArr(caloriesArr)
      
      let holderArr =(
        newArr.map(item => (
          <div key ={item.id}>
          <div className='breakfast-log-inner-container'>
          <div  style={{paddingLeft:20}} className="search-food-container">
            <div className="select-btn">
              <div key={item.id} className="space-between">
                <span className="">{item.name}</span>
                <span className="">{item.calories} cal</span>
              </div>
            </div>
          </div>
          <div className="garbage-bin-2" onClick={()=>removeCards(item.id, eatingTimeData.selectedSlot)}> <ImBin color="white"/></div>
          </div>
        </div>
      ))
      )
      
      setDivLog(holderArr)
  

      // newDivLogOne.push(...holderArr)
      console.log(holderArr,'holderArr')

   
      
      console.log(newDivLogOne,'newDivLogOne')


    
    // You may not need to push items into firstData array directly, as we're updating oldData state
  } else {
    return <li>no notes</li>;
  }
}
}
const showDayFoods = () => {
  if (day.length === 0) {
    return <li>no notes</li>;
  } else {
    const index = day.findIndex(note => note.date === inputDate);

    const food = day[index]?.food_list; // Using optional chaining to avoid errors if day[index] is undefined
    setCurDayId(day[index].id)
    console.log(day[index].id,'localDay')
    console.log(food, 'data food');
    console.log(index, 'data index');
    console.log(day, 'data day');



    if (food) {
      const uniqueFoods = Array.from(new Set(food.map(item =>item.id
        
        ))); // this makes it unique 
        console.log(uniqueFoods,'data unqieueee')
        let newArr = uniqueFoods.map(id => food.find(item => item.id === id))
    
        let caloriesArr = newArr.map((item) => item.calories)
        setDisplayFoodArr(caloriesArr)
        
        let holderArr =(
          newArr.map(item => (
            <div key ={item.id}>
            <div className='breakfast-log-inner-container'>
            <div  style={{paddingLeft:20}} className="search-food-container">
              <div className="select-btn">
                <div key={item.id} className="space-between">
                  <span className="">{item.name}</span>
                  <span className="">{item.calories} cal</span>
                </div>
              </div>
            </div>
            <div className="garbage-bin-2" onClick={()=>removeCards(item.id, eatingTimeData.selectedSlot)}> <ImBin color="white"/></div>
            </div>
          </div>
        ))
        )
        
        setDivLog(holderArr)
    

        // newDivLogOne.push(...holderArr)
        console.log(holderArr,'holderArr')

     
        
        console.log(newDivLogOne,'newDivLogOne')


      
      // You may not need to push items into firstData array directly, as we're updating oldData state
    } else {
      return <li>no notes</li>;
    }
  }
};

useEffect(()=>{
  console.log(backendArray,'data food unique backend')
},[backendArray])
useEffect(()=>{
  console.log(divLogState,'divLogState')
},[divLogState])
useEffect(()=>{
  console.log(calorieValueArr,'divLogState calorieValueArr')
},[divLogState])


const breakfastLogTemplate =(index)=>{
  let newLog=(
    <div key ={index}>
      <div className='breakfast-log-inner-container'>
      <div style={{paddingLeft:20}} ><SearchFood onQueryOne = {setAmount}/></div>
        <div className="garbage-bin-2" onClick={()=>removeCards(index, eatingTimeData.selectedSlot)}> <ImBin color="white"/></div>



        {/* <div className='breakfast-item-name'>Egg Scrambled </div> */}
        {/* <form onSubmit={foodInfo}> */}

              {/* <input name="food" className='breakfast-item-name name-input'  type="text"/> */}
        {/* </form> */}
        {/* <div className='breakfast-item-container'>    */}
           
          {/* <div className='breakfast-item-calories'> {calories} cals</div> */}
       
          {/* <div className='breakfast-item-amount'>1 Large Egg </div> */}
          {/* <form>
            <input style={{background:"transparent", outline:"none",width:25}}className="food-quantity" type="number" id="quantity" name="quantity" min="0" max="20"/>
          </form> */}
        {/* </div>  */}
      </div>
    </div>
)
console.log(newLog,'newLog')
return newLog
} 
let news = 'exported successfully'

 


  return(
    <BreakFastContext.Provider value = {{breakObject}}>

    <div className='fake-container'>

     {showNewLog()}



      <div className='add-btn-container'>

        <i className="add-log-btn" onClick={addLog}> add</i>
      </div>
    </div>
    </BreakFastContext.Provider>

  )
}