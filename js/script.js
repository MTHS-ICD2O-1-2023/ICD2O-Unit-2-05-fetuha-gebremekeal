// Created by: Fetuha
// Created on: Sep 2020
// This file contains the JS functions for index.html

"use strict"

/**
 * This function calculates area of a triangle.
 */
function findIncomeClicked() {
  // input
  const hoursEntered = parseInt(document.getElementById('hours-entered').value)
  const hourlyIncome = parseInt(document.getElementById('hourly-income').value)
  const govTax = (hoursEntered* hourlyIncome) * 0.18
  const totalEarnings = (hoursEntered * hourlyIncome) - govTax
  document.getElementById("answer").innerHTML = 'Your total earnings is: $' + totalEarnings.toFixed(2) + '<br>' + "The government will take: $" + govTax.toFixed(2)
}