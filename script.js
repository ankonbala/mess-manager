
// common function
function common(data){
const inputField = document.getElementById(data);
const inputFieldString = inputField.value;
const input = parseFloat(inputFieldString);

return input;
}
// common function2
function common2(data){
const inputField = document.getElementById(data);
const inputFieldString = inputField.innerText;
const input = parseFloat(inputFieldString);

return input;
}

// monthly expense

const date1 = common('date-1');
const date2 = common('date-2');
const date3 = common('date-3');
const date4 = common('date-4');
const date5 = common('date-5');
const date6 = common('date-6');
const date7 = common('date-7');
const date8 = common('date-8');
const date9 = common('date-9');
const date10 = common('date-10');
const date11 = common('date-11');
const date12 = common('date-12');
const date13 = common('date-13');
const date14 = common('date-14');
const date15 = common('date-15');
const date16 = common('date-16');
const date17 = common('date-17');
const date18 = common('date-18');
const date19 = common('date-19');
const date20 = common('date-20');
const date21 = common('date-21');
const date22 = common('date-22');
const date23 = common('date-23');
const date24 = common('date-24');
const date25 = common('date-25');
const date26 = common('date-26');
const date27 = common('date-27');
const date28 = common('date-28');
const date29 = common('date-29');
const date30 = common('date-30');
const date31 = common('date-31');

// total cost

const totalCost = date1+date2+date3+date4+date5+date6+date7+date8+date9+date10+date11+date12+date13+date14+date15+date16+date17+date18+date19+date20+date21+date22+date23+date24+date25+date26+date27+date28+date29+date30+date31;

// deposit

const member1 = common('member-1');
const member2 = common('member-2');
const member3 = common('member-3');
const member4 = common('member-4');
const member5 = common('member-5');
const member6 = common('member-6');

// total deposit

const totalDeposit = member1+member2+member3+member4+member5+member6;

// meal

const meal1 = common('meal-1');
const meal2 = common('meal-2');
const meal3 = common('meal-3');
const meal4 = common('meal-4');
const meal5 = common('meal-5');
const meal6 = common('meal-6');

// total meal

const totalMeal = meal1+meal2+meal3+meal4+meal5+meal6;

// total meal field

const totalMealField = common2('total-meal')

// cost Field

const cost1 = common2('cost-1');
const cost2 = common2('cost-2');
const cost3 = common2('cost-3');
const cost4 = common2('cost-4');
const cost5 = common2('cost-5');
const cost6 = common2('cost-6');

// feedback Field

const feedback1 = common2('feedback-1');
const feedback2 = common2('feedback-2');
const feedback3 = common2('feedback-3');
const feedback4 = common2('feedback-4');
const feedback5 = common2('feedback-5');
const feedback6 = common2('feedback-6');

// meal charge

const mealCharge = totalCost/mealCharge;

// meal charge field

const mealChargeField = common2('meal-charge')

// meal cost

const mealCost1 = meal1 * mealCharge;
const mealCost2 = meal2 * mealCharge;
const mealCost3 = meal3 * mealCharge;
const mealCost4 = meal4 * mealCharge;
const mealCost5 = meal5 * mealCharge;
const mealCost6 = meal6 * mealCharge;

// total deposit field

const totalDepositField = common2('total-deposit');

// total cost field

const totalCostField = common2('total-cost');



document.getElementById('btn').addEventListener('click', function(){
    totalCostField.innerText = totalCost;
    totalDepositField.innerText = totalDeposit;
    mealChargeField.innerText = mealCharge;
    totalMealField.innerText = totalMeal;



})




