
// 
// const showDetalis = $('showDetalis');
// const searchBtn = $('searchBtn').

const $ = (selectedId) => {
    return document.getElementById(selectedId);
};

$("searchBtn").addEventListener("click", function(){
    inputValue()
});
const foodItem = $('foodItem');
const showDetalis = $('showDetalis');

function inputValue(){
    const inputName = $('input').value;
    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${inputName}`)

    .then(response => response.json())
    .then(data => {

        const foodName = data.meals;
        let htmlDesign = "";

        if(foodName){
            foodName.forEach(element => {

                htmlDesign +=`   
                <div onclick="details('${element.strMeal}')" class="containt-img">
    
                    <img src="${element.strMealThumb}"  alt="food img">
    
                    <h2>${element.strMeal}</h2>
    
    
    
                </div>
                `
               
            });
        }else{
            htmlDesign = "Sorry, we didn't find any meal!";
            // mealList.classList.add('notFound');
            showDetalis.innerHTML = '';
        }
        
        foodItem.innerHTML = htmlDesign;

        
    });
}

function details(z){
    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${z}`)
    .then(response => response.json())
    .then(data => {
        const foodDetails = data.meals;
        let htmlDesign2 = "";
        foodDetails.forEach(element => {
            
            htmlDesign2 +=`   
            <div class="containt-img">

                <img src="${element.strMealThumb}"  alt="food img">

                <h2>${element.strMeal}</h2>
            <ul>
                <li>${element.strMeasure1} ${element.strIngredient1}</li>
                <li>${element.strMeasure2} ${element.strIngredient2}</li>
                <li>${element.strMeasure3} ${element.strIngredient3}</li>
                <li>${element.strMeasure4} ${element.strIngredient4}</li>
                <li>${element.strMeasure5} ${element.strIngredient5}</li>
                <li>${element.strMeasure6} ${element.strIngredient6}</li>
                <li>${element.strMeasure7} ${element.strIngredient7}</li>
                <li>${element.strMeasure8} ${element.strIngredient8}</li>
                <li>${element.strMeasure9} ${element.strIngredient9}</li>
                <li>${element.strMeasure10} ${element.strIngredient10}</li>
              
            </ul>


            </div>
            `
        });

        showDetalis.innerHTML = htmlDesign2;

    })
        

}
// strMeal
// strMealThumb