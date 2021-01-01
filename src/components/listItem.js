import React from 'react';
import { Link } from "gatsby"
import PropTypes from 'prop-types'
import WalkInfo from "./walkInfo"

const ListItem = ({ data }) => {
  return (
    <Link 
      className="card"
      to={`/${data.url_slug.value}`} 
    >
      <h2 className="card__heading">{data.title.value}</h2>
      <ul className="card__info">
        <li className="card__info-item">
          <WalkInfo data={data.attractivity.value[0].codename} type="attractivity" />
        </li>
        <li className="card__info-item">
          <WalkInfo data={data.difficulty.value[0].codename} type="difficulty" />
        </li>
        <li className="card__info-item">
          <WalkInfo data={data.length.value} type="length" />
        </li>
        <li className="card__info-item">
          <WalkInfo data={[data.distance_from_brno.value, data.duration_from_brno.value]} type="car" />
        </li>
      </ul>
    </Link>
  )
};

ListItem.propTypes = {
  data: PropTypes.object,
};

export default ListItem;