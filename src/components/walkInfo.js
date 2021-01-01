import React from 'react';
import PropTypes from 'prop-types'

const getAttractivity = (data) => {
  let text = '';

  switch (data) {
    case "boring":
      text = "Nuda"
      break
    case "attractive":
      text = "Fajn"
      break
    case "amazing":
      text = "Úžasné"
      break
    default:
      text = null
  }

  return text
};

const getDifficulty = (data) => {
  let text = '';

  switch (data) {
    case "easy":
      text = "Jednoduché"
      break
    case "moderate":
      text = "Průměrné"
      break
    case "challenging":
      text = "Náročné"
      break
    default:
      text = null
  }

  return text
};

const getLength = (data) => {
  return `Délka ${data} km`
};

const getCar = (data) => {
  return `Z Brna ${data[0]} km | ${data[1]} min`
};

const WalkInfo = ({ data, type }) => {
  let text = ''

  switch (type) {
    case "attractivity":
      text = getAttractivity(data)
      break
    case "difficulty":
      text = getDifficulty(data)
      break
    case "length":
      text = getLength(data)
      break
    case "car":
      text = getCar(data)
      break
    default:
      text = null
  }

  if (text) {
    return (
      <div className="tag">
        {text}
      </div>
    )
  }

  return text
};

WalkInfo.propTypes = {
  data: PropTypes.string || PropTypes.array,
  type: PropTypes.string
};

export default WalkInfo;