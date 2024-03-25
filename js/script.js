// Created by: Fetuha
// Created on: Sep 2020
// This file contains the JS functions for index.html

"use strict"

/**
 * This function calculates area of a triangle.
 */
function findIncomeClicked() {
  // input
  const baseOfTriangle = parseInt(document.getElementById('base-of-triangle').value)
  const heightOfTriangle = parseInt(document.getElementById('hourly-income').value)
  const govTax = (baseOfTriangle * heightOfTriangle) * 0.5
  const totalEarnings = (baseOfTriangle * heightOfTriangle) * 0.5
  document.getElementById("area").innerHTML = 'Area is: ' + areaOfTriangle + ' cm²'
}