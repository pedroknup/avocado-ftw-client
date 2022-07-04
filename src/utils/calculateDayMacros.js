const calculateDayMacros = ({ meals }) => {
  if (!meals) return {}
  const calories = meals.reduce((acc, meal) => {
    const mealCalories = meal !== undefined ? meal.calories * meal.quantity : 0
    return acc + mealCalories
  }, 0)

  const proteins = meals.reduce((acc, meal) => {
    const mealProteins = meal !== undefined ? meal.proteins * meal.quantity : 0

    return acc + mealProteins
  }, 0)

  // sum up all the carbs for the day
  const carbs = meals.reduce((acc, meal) => {
    const mealCarbs = meal !== undefined ? meal.carbs * meal.quantity : 0
    return acc + mealCarbs
  }, 0)

  // sum up all the fat for the day
  const fat = meals.reduce((acc, meal) => {
    const mealFat = meal !== undefined ? meal.fat * meal.quantity : 0
    return acc + mealFat
  }, 0)

  return {
    calories,
    proteins,
    carbs,
    fat
  }
}

const calculateWeekMacros = (weekPlan) => {
  if (!weekPlan) { throw new Error('Week plan is required to calculate week macros') }

  const macrosMonday = calculateDayMacros(weekPlan.monday)
  Object.assign(macrosMonday, weekPlan.monday)
  const macrosTuesday = calculateDayMacros(weekPlan.tuesday)
  Object.assign(macrosTuesday, weekPlan.tuesday)
  const macrosWednesday = calculateDayMacros(weekPlan.wednesday)
  Object.assign(macrosWednesday, weekPlan.wednesday)
  const macrosThursday = calculateDayMacros(weekPlan.thursday)
  Object.assign(macrosThursday, weekPlan.thursday)
  const macrosFriday = calculateDayMacros(weekPlan.friday)
  Object.assign(macrosFriday, weekPlan.friday)
  const macrosSaturday = calculateDayMacros(weekPlan.saturday)
  Object.assign(macrosSaturday, weekPlan.saturday)
  const macrosSunday = calculateDayMacros(weekPlan.sunday)
  Object.assign(macrosSunday, weekPlan.sunday)

  return weekPlan
}

export { calculateDayMacros, calculateWeekMacros }
